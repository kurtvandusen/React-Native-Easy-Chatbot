import React, { useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useSelector, useDispatch } from "react-redux";

import {
  sendMessage,
  MessagesState,
  defaultUser,
} from "../store/messages/messagesSlice";

const placeholder = "Chat with Alice in Wonderland...";

export default function Main() {
  const dispatch = useDispatch();
  const messages = useSelector((state: MessagesState) => state.messages);

  const onSend = useCallback((messages = []) => {
    dispatch({ type: sendMessage.toString(), payload: messages[0] });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={defaultUser}
        placeholder={placeholder}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
