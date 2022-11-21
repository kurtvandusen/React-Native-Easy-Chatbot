import { createSlice, createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, IMessage } from 'react-native-gifted-chat'

export interface MessagesState {
  messages: Array<IMessage>,
}

export const defaultUser: User = {
  _id: 0,
  name: "User",
  avatar: "../../../assets/user-solid.svg"
}

export const chatbotUser: User = {
  _id: 1,
  name: "Chatbot",
  avatar: "../../../assets/face-smile-beam-solid.svg"
}

const initialState: Array<IMessage> = []

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<IMessage>) => {
      state.push(action.payload)
    },
  },
})

export const sendMessage: ActionCreatorWithPayload<IMessage[]> = createAction('SEND_MESSAGE')

// Action creators are generated for each case reducer function
export const { setMessages } = messagesSlice.actions

export default messagesSlice.reducer