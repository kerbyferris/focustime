import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const RoundedButton = ({ textSize = "4xl", size = 32, ...props }) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      className={`items-center justify-center border-white border-2 h-${size} w-${size} rounded-full`}
    >
      <Text className={`text-white text-${textSize}`}>{props.title}</Text>
    </TouchableOpacity>
  );
};
