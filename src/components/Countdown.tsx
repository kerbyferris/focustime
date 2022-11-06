import React, { useState, useEffect } from "react";
import { Text } from "react-native";

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);
export const Countdown = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}: {
  minutes: number;
  isPaused: boolean;
  onProgress: any;
  onEnd: any;
}) => {
  const interval: any = React.useRef(null);

  const [millis, setMillis] = useState(0);

  const countDown = () => {
    setMillis((time: any) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text className="text-8xl font-bold text-white p-8">
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};
