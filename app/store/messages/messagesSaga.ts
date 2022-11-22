import { IMessage } from 'react-native-gifted-chat'
import { all, put, takeEvery } from 'redux-saga/effects'
import { setMessages, sendMessage, chatbotUser } from './messagesSlice'
import { Post } from '../../services/api'
import { context } from '../../services/context'

const getReply = (message: IMessage) => {
  let body = {
    inputs:{
      question: message.text,
      context: context
    }
  }
  return Post.getAnswer(body)
}

// Our worker Sagas
function* sendMessageStart({ payload: message }) {
  yield put({ type: setMessages, payload: message })
  let reply = yield getReply(message)
  let replyMessages = {
    _id: chatbotUser._id,
    text: reply.answer,
    createdAt: new Date(),
    user: chatbotUser
  }
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