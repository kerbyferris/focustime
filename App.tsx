import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Focus from "./src/features/Focus";
import Timer from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState("");
  const clearSubjectHandler = () => {
    console.log("pressed");
    return setCurrentSubject("");
  };
  return (
    <SafeAreaView className="android:pt-10 flex-1 bg-red-500">
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          clearSubject={clearSubjectHandler}
        />
      )}
    </SafeAreaView>
  );
}
