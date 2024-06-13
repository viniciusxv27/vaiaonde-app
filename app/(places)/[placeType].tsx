import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Place = () => {
  const { placeType } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Text>{placeType}</Text>
    </SafeAreaView>
  );
};

export default Place;

const styles = StyleSheet.create({});
