import React, { useState } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { Focus } from "./src/features/Focus";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView className="flex-1 bg-red-500 android:pt-10">
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <View>
          <Text>I am going to render the timer for {currentSubject}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
