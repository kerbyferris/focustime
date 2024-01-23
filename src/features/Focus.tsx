import React, { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

TextInput;

const Focus = ({ addSubject }: { addSubject: any }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View>
      <View className="flex-row justify-center p-6 text-black">
        <TextInput
          className="mr-2 flex-1"
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View className="justify-center">
          <RoundedButton
            title="+"
            height="h-14"
            width="w-14"
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

export default Focus;
