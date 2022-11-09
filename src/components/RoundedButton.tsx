import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const RoundedButton = ({
  textSize = "4xl",
  height = "h-32",
  width = "w-32",
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      className={`items-center justify-center border-2 border-white ${height} ${width} rounded-full`}
    >
      <Text className={`text-white text-${textSize}`}>{props.title}</Text>
    </TouchableOpacity>
  );
};
