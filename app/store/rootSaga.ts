import { all } from "redux-saga/effects";

import { messagesSaga } from "../features/messages/messagesSagas";

export default function* rootSaga() {
  yield all([messagesSaga()]);
}
