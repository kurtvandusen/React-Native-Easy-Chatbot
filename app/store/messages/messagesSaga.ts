import { all, put, takeEvery } from 'redux-saga/effects'
import { setMessages, sendMessage } from './messagesSlice'
import { getReply } from '../../utils/getReply'

// Our worker Sagas
function* sendMessageStart({ payload: message }) {
  yield put({ type: setMessages, payload: message })
  let replyMessages = yield getReply(message)
  yield put({ type: setMessages, payload: replyMessages })
}

// Our watcher Sagas
function* watchSendMessage() {
  yield takeEvery( sendMessage, sendMessageStart )
}

// Combine watcher Sagas (only needed if more than one)
function* messagesSaga() {
  yield all([
    watchSendMessage()
  ]);
}

export { messagesSaga };