import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

TextInput;

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View className="flex-1">
      <View className="p-6 justify-center text-black flex-row">
        <TextInput
          className="flex-1 mr-2"
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View className="justify-center">
          <RoundedButton
            title="+"
            size={14}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;
