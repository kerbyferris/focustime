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
      <View className="items-center flex-1">
        <RoundedButton
          title={minutes.toString()}
          textSize="3xl"
          size={14}
          onPress={onPressHandler}
        />
      </View>
    </>
  );
};

export default Timing;
