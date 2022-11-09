import React from "react";
import { View } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

const Timing = ({
  onChangeTime,
  minutes,
}: {
  onChangeTime: any;
  minutes: number;
}) => {
  const onPressHandler = () => onChangeTime(minutes);
  return (
    <>
      <View className="flex-1 items-center">
        <RoundedButton
          title={minutes.toString()}
          textSize="3xl"
          height="h-16"
          width="w-16"
          onPress={onPressHandler}
        />
      </View>
    </>
  );
};

export default Timing;
