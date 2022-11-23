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
    timeout: 20000, // 20 seconds
  }
});

const responseBody = (response: AxiosResponse) => response.data;

const handleError = (error) => console.log("API Error:", error)

const handlePostError = (error) => {
  handleError(error)
  let defaultResponse: QuestionAnswerReturn = {
    answer: `I don't know. My API feels fuzzy.`,
    score: .5,
    start: 0,
    end: 0,
  }
  return defaultResponse
}

const requests = {
	// get: (url: string) => instance.get(url).then(responseBody.catch(handleError),
	post: (url: string, body: QuestionAnswerArgs) => instance.post(url, body).then(responseBody).catch(handlePostError),
	// put: (url: string, body: {}) => instance.put(url, body).then(responseBody).catch(handleError),
	// delete: (url: string) => instance.delete(url).then(responseBody).catch(handleError),
};

export const api = {
	getAnswer: (body): Promise<QuestionAnswerReturn> => requests.post('', body)
};

 
axios.get('Web URL')
.then(function(response) {
    // handle response
}).catch(function(error) {
    // handle error
}).finally(function() {
    // always executes at the last of any API call
});