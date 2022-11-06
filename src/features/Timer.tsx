import React, { useState } from "react";

import { View, Text } from "react-native";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";

export const Timer = ({
  focusSubject,
  onTimerEnd,
  clearSubject,
}: {
  focusSubject: string;
  onTimerEnd: () => any;
  clearSubject: () => any;
}) => {
  const [isStarted, setIsStarted] = useState(false);
  const startButtonHandler = () => setIsStarted(true);
  const pauseButtonHandler = () => setIsStarted(false);

  return (
    <View className="flex-1">
      <View className="flex-[0.5] items-center justify-center">
        <Countdown
          minutes={5}
          isPaused={!isStarted}
          onProgress={() => { }}
          onEnd={onTimerEnd}
        />
        <Text className="text-white text-6xl">{focusSubject}</Text>
      </View>
      <View className="flex-[0.3] flex-row p-4 justify-center items-center">
        {isStarted ? (
          <RoundedButton title="pause" onPress={pauseButtonHandler} />
        ) : (
          <RoundedButton title="start" onPress={startButtonHandler} />
        )}
      </View>
    </View>
  );
};

export default Timer;
