import React, { useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { useSelector, useDispatch } from "react-redux";

import { sendMessage, defaultUser } from "../features/messages/messagesSlice";
import { RootState } from "../store";

const placeholder = "Chat with Alice in Wonderland...";

export default function Main() {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.messages.messages);
  const isTyping = useSelector((state: RootState) => state.messages.isTyping);

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
        isTyping={isTyping}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
