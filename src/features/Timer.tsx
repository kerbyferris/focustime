import React, { useState } from "react";
import { View, Text, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";

import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import Timing from "./Timing";

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({
  focusSubject,
  clearSubject,
}: {
  focusSubject: string;
  clearSubject: () => any;
}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(15);

  const startButtonHandler = () => setIsStarted(true);
  const pauseButtonHandler = () => setIsStarted(false);
  const onEndHandler = () => Vibration.vibrate(PATTERN);

  return (
    <View className="flex-1">
      <View className="flex-[0.4] items-center justify-center">
        <Countdown
          // minutes={setMinutes}
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEndHandler}
        />
        <View>
          <ProgressBar color="white" className="h-3" progress={progress} />
        </View>
        <View className="pt-1">
          <Text className="text-center text-3xl text-white">focusing on:</Text>
          <Text className="text-center text-4xl font-bold text-white">
            {focusSubject}
          </Text>
        </View>
      </View>
      <View className="flex-[0.3] flex-row items-center justify-center p-4">
        {isStarted ? (
          <RoundedButton title="pause" onPress={pauseButtonHandler} />
        ) : (
          <RoundedButton title="start" onPress={startButtonHandler} />
        )}
      </View>
      <View className="flex-row">
        <Timing onChangeTime={setMinutes} minutes={10} />
        <Timing onChangeTime={setMinutes} minutes={15} />
        <Timing onChangeTime={setMinutes} minutes={20} />
      </View>
      <View className="flex-row justify-center pt-6">
        <RoundedButton
          title="clear"
          textSize="1xl"
          height="h-12"
          width="w-12"
          onPress={clearSubject}
        />
      </View>
    </View>
  );
};

export default Timer;
