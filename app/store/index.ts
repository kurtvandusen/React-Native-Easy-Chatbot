import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from './messages/messagesSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()


export const store = configureStore({
  reducer: {
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddleware) => [ ...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware],
})
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch