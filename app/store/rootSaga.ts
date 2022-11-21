import { all } from 'redux-saga/effects'
import { messagesSaga } from './messages/messagesSaga'

export default function* rootSaga() {
    yield all([
      messagesSaga()
    ])
  }