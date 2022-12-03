import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import MessagesComponent from "../features/messages/MessagesComponent";
import { controller } from "../services/api";

export default function Main() {
  useEffect(() => {
    return () => {
      /* cancel API requests when component unmounts*/
      controller.abort();
      console.log("main component unmounted");
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MessagesComponent textInputStyle={styles.textInputStyle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    backgroundColor: "#FFFFF0",
  },
});
