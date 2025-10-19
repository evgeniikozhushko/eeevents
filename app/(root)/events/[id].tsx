import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Event = () => {
  
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Event {id}</Text>
    </View>
  );
};

export default Event;