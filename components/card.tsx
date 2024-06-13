import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

export interface ICard {
  card_image: string;
  name: string;
  categorie: string;
  rate: number;
}

export const Card = ({ data }: { data: ICard }) => {
  return (
    <View className="relative w-[280px] h-[220px] rounded-lg overflow-hidden gap-2">
      <TouchableOpacity
        className="absolute right-[10px] top-[10px] z-10 bg-primary h-7 
        w-7 rounded-full items-center justify-center"
      >
        <Ionicons name="heart-outline" size={20} color={"#070707"} />
      </TouchableOpacity>
      <View className="h-[60%] bg-slate-700 rounded-lg overflow-hidden">
        <Image src={data.card_image} className="w-full h-full" />
      </View>
      <View className="flex-1 px-1 flex-row items-center justify-between">
        <View>
          <Text className="text-white font-sfsemibold text-base">
            {data.name}
          </Text>
          <Text className="text-gray-400 font-sfsemibold text-xs">
            {data.categorie}
          </Text>
        </View>
        <View
          className="w-[80px] h-8 bg-white rounded-3xl flex-row 
        items-center justify-center gap-x-1"
        >
          <AntDesign name="star" size={16} color="#feb800" />
          <Text className="text-background text-[12px] font-sfsemibold">
            {data.rate}
          </Text>
        </View>
      </View>
    </View>
  );
};
