import Constants from "expo-constants";
import React, { useCallback, useEffect } from "react";
import { StyleProp, TextStyle } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useSelector, useDispatch } from "react-redux";

import { controller } from "../../services/api";
import { RootState } from "../../store";
import { sendMessage, defaultUser } from "./messagesSlice";

export interface MessagesComponentProps {
  textInputStyle?: StyleProp<TextStyle>;
}

const placeholder = Constants.expoConfig.extra?.messagesPlaceholder ?? "";

export default function MessagesComponent({
  textInputStyle,
}: MessagesComponentProps) {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.messages.messages);
  const isTyping = useSelector((state: RootState) => state.messages.isTyping);

  useEffect(() => {
    return () => {
      /* cancel API requests when component unmounts*/
      controller.abort();
      console.log("message component unmounted");
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    dispatch({ type: sendMessage.toString(), payload: messages[0] });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={defaultUser}
      placeholder={placeholder}
      isTyping={isTyping}
      textInputStyle={textInputStyle}
    />
  );
}
