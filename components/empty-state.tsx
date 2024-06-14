import { Image, Text, View } from "react-native";
import React from "react";
import images from "../constants/images";

interface Props {
  title: string;
  subtitle: string;
}

const EmptyState = ({ title, subtitle }: Props) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-2xl text-slate-100 font-sfsemibold text-center">
        {title}
      </Text>
      <Text className="text-sm text-slate-400 font-sfregular text-center">
        {subtitle}
      </Text>
    </View>
  );
};

export default EmptyState;
