import { all } from "redux-saga/effects";

import { messagesSaga } from "../features/messages/messagesSaga";

export default function* rootSaga() {
  yield all([messagesSaga()]);
}
