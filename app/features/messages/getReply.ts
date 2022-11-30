import { IMessage } from "react-native-gifted-chat";

import { api } from "../../services/api";
import { newId } from "../../utils/newId";
import { context } from "./context";
import { chatbotUser } from "./messagesSlice";

export const getReply = async (message: IMessage) => {
  const body = {
    inputs: {
      question: message.text,
      context,
    },
    options: {
      wait_for_model: true,
    },
  };
  const reply = await api.getAnswer(body);

  const replyMessages: IMessage = {
    _id: newId(),
    text: reply.answer,
    createdAt: new Date(),
    user: chatbotUser,
  };

  return replyMessages;
};
