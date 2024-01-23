import React from "react";
import { View, Text, FlatList } from "react-native";

const FocusHistory = ({ history }: { history: any }) => {
  if (!history || !history.length)
    return (
      <Text className="text-2xl font-bold text-white">
        We haven't focused on anything yet
      </Text>
    );
  const renderItem = ({ item }: { item: string }) => (
    <Text className="text-2xl font-bold text-white">- {item}</Text>
  );
  return (
    <View className="flex-1 p-6">
      <Text className="text-2xl font-bold text-white">
        The things we've focused on:
        <FlatList data={history} renderItem={renderItem} />
      </Text>
    </View>
  );
};

export default FocusHistory;
