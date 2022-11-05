import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";

TextInput;

export const Focus = () => (
  <View style={styles.container}>
    <TextInput style={styles.text}>Focus Feature</TextInput>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
  },
});
