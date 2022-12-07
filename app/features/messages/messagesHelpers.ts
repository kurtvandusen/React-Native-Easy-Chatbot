import { IMessage } from "react-native-gifted-chat";

import { context } from "../../../assets/context";
import { api } from "../../services/api";
import { newId } from "../../utils/newId";
import { chatbotUser } from "./messagesSlice";

export const createReplyMessage = (reply: string) => {
  const replyMessage: IMessage = {
    _id: newId(),
    text: reply,
    createdAt: new Date(),
    user: chatbotUser,
  };
  return replyMessage;
};

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
  const replyResponse = await api.getAnswer(body);

  return createReplyMessage(replyResponse.answer);
};
