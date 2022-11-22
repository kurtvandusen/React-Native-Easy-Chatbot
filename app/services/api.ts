import axios, { AxiosResponse } from "axios";

export interface QuestionAnswerArgs {
  inputs: {
    question: string;
    context: string;
  };
};

export interface QuestionAnswerReturn  {
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

const instance = axios.create({
  baseURL: "https://api-inference.huggingface.co/models/deepset/tinyroberta-squad2",
  headers: {
    "Authorization": "Bearer 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",
    timeout: 10000,
  }
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	// get: (url: string) => instance.get(url).then(responseBody),
	post: (url: string, body: QuestionAnswerArgs) => instance.post(url, body).then(responseBody),
	// put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
	// delete: (url: string) => instance.delete(url).then(responseBody),
};

export const api = {
	getAnswer: (body): Promise<QuestionAnswerReturn> => requests.post('', body)
};