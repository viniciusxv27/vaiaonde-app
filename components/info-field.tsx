import { Text, View } from "react-native";
import React from "react";

interface Props {
  label: string;
  value: any;
}

const InfoField = ({ label, value }: Props) => {
  return (
    <View className="gap-2 p-2">
      <Text className="font-sfsemibold text-lg capitalize">{label}</Text>
      <Text className="font-sfregular text-lg">{value}</Text>
    </View>
  );
};

export default InfoField;
