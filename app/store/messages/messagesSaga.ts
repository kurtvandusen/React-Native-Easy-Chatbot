import { IMessage } from 'react-native-gifted-chat'
import { all, put, takeEvery } from 'redux-saga/effects'
import { setMessages, sendMessage } from './messagesSlice'

const getReply = (message: IMessage) => {return message}

// Our worker Sagas
function* sendMessageStart({ payload: message }) {
  yield put({ type: setMessages, payload: message })
  let reply = yield getReply(message)
  yield put({ type: setMessages, payload: reply })
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