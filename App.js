import * as React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { Focus } from "./src/features/Focus";
import { colors } from "./src/utils/colors";

Focus;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
