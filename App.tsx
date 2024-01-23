import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Focus from "./src/features/Focus";
import FocusHistory from "./src/features/FocusHistory";
import Timer from "./src/features/Timer";

export default function App() {
  const clearSubjectHandler = () => {
    return setCurrentSubject("");
  };
  return (
    <SafeAreaView className="android:pt-10 flex-1 bg-red-500">
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          clearSubject={clearSubjectHandler}
          onTimerEnd={(subject: string) => {
            setHistory([...history, subject]);
          }}
        />
      )}
    </SafeAreaView>
  );
}
