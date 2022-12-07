import Constants from "expo-constants";
import { put, takeEvery, call } from "redux-saga/effects";

import { getReply, createReplyMessage } from "./messagesHelpers";
import { setMessages, sendMessage, setIsTyping } from "./messagesSlice";

// Our worker Sagas
function* sendMessageStart({ payload: message }) {
  yield put({ type: setIsTyping, payload: true });
  yield put({ type: setMessages, payload: message });
  try {
    const replyMessages = yield call(getReply, message);
    yield put({ type: setMessages, payload: replyMessages });
  } catch (error) {
    const errorMessage: string =
      Constants.expoConfig.extra?.messagesErrorMessage + error?.toString;
    yield put({ type: setMessages, payload: createReplyMessage(errorMessage) });
  }
  yield put({ type: setIsTyping, payload: false });
}

// Our watcher Sagas
function* messagesSaga() {
  yield takeEvery(sendMessage, sendMessageStart);
}

export { messagesSaga, sendMessageStart };
