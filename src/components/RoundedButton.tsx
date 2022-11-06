import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 126,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      className={`items-center justify-center border-white border-2 w-[${size}] h-[${size}] rounded-full`}
    >
      <Text className="text-white text-4xl">{props.title}</Text>
    </TouchableOpacity>
  );
};
