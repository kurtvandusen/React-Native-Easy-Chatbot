import React, { ErrorInfo } from "react";
import { ScrollView, View, Text, Button } from "react-native";

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

export function ErrorDetails(props: ErrorDetailsProps) {
  return (
    <View>
      <ScrollView>
        <Text>{`${props.error}`.trim()}</Text>
        <Text>{`${props.errorInfo.componentStack}`.trim()}</Text>
      </ScrollView>

      <Button title="Reset" onPress={props.onReset} />
    </View>
  );
}
