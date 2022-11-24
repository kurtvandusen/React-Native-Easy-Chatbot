import {
  createSlice,
  createAction,
  ActionCreatorWithPayload,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { GiftedChat, User, IMessage } from "react-native-gifted-chat";

export interface MessagesState {
  messages: IMessage[];
  isTyping: boolean;
}

export const defaultUser: User = {
  _id: 0,
  name: "User",
  avatar: "https://gravatar.com/avatar?d=wavatar",
};

export const chatbotUser: User = {
  _id: 1,
  name: "Chatbot",
  avatar: "https://gravatar.com/avatar?d=robohash",
};

const initialState: MessagesState = {
  messages: [],
  isTyping: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state: MessagesState, action: PayloadAction<IMessage>) => {
      const newState = GiftedChat.append(state.messages, [action.payload]);
      state.messages = newState;
    },
    setIsTyping: (state: MessagesState, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
  },
});

export const sendMessage: ActionCreatorWithPayload<IMessage[]> =
  createAction("SEND_MESSAGE");

// Action creators are generated for each case reducer function
export const { setMessages, setIsTyping } = messagesSlice.actions;

export default messagesSlice.reducer;
