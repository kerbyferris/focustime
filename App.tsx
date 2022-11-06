import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import Focus from "./src/features/Focus";
import Timer from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-red-500 android:pt-10">
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => { }}
          clearSubject={() => { }}
        />
      )}
    </SafeAreaView>
  );
}
