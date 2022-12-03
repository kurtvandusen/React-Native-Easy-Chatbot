import axios, { AxiosResponse, AxiosError } from "axios";
import axiosRetry from "axios-retry";
import Constants from "expo-constants";

export interface QuestionAnswerArgs {
  inputs: {
    question: string;
    context: string;
  };
  options: {
    wait_for_model?: boolean;
  };
}

export interface QuestionAnswerReturn {
  /**
   * A string that’s the answer within the text.
   */
  answer: string;
  /**
   * A float that represents how likely that the answer is correct
   */
  score: number;
  /**
   * The index (string wise) of the start of the answer within context.
   */
  start: number;
  /**
   * The index (string wise) of the stop of the answer within context.
   */
  end: number;
}

export const controller = new AbortController();

const instance = axios.create({
  baseURL: Constants.expoConfig.extra?.baseURL ?? "",
  headers: {
    Authorization: "Bearer " + Constants.expoConfig.extra?.huggingfaceKey,
  },
  signal: controller.signal,
  timeout: 20000, // 20 seconds
  validateStatus(status) {
    return status < 500; // Resolve only if the status code is less than 500
  },
});

const onRetry = (retryCount, error) => {
  console.log("retry", retryCount, error);
};

const retryDelay = () => 3000; // 3 seconds

const retryCondition = () => true;

axiosRetry(instance, {
  retries: 3,
  onRetry,
  retryDelay,
  retryCondition,
});

const responseBody = (response: AxiosResponse) => response.data;

function handleError(error: Error | AxiosError) {
  console.log(error);
  const defaultResponse: QuestionAnswerReturn = {
    answer: `I don't know. My API feels fuzzy.`,
    score: 0.5,
    start: 0,
    end: 0,
  };
  return defaultResponse;
}

const requests = {
  post: (url: string, body: QuestionAnswerArgs) =>
    instance.post(url, body).then(responseBody).catch(handleError),
};

export const api = {
  getAnswer: (body): Promise<QuestionAnswerReturn> => requests.post("", body),
};
