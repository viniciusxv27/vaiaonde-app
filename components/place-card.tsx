import React from "react";
import { IPlace } from "../app/(places)/[placeType]";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { checkHourly } from "../lib/check-hourly";

const PlaceCard = ({ data }: { data: IPlace }) => {
  const isOpen = checkHourly(data);

  return (
    <View className="relative w-[90%] h-[240px] mb-8 rounded-lg overflow-hidden gap-2">
      <TouchableOpacity
        className="absolute right-[20px] top-[10px] z-10 bg-primary h-7 
        w-7 rounded-full items-center justify-center"
      >
        <Ionicons name="heart-outline" size={20} color={"#070707"} />
      </TouchableOpacity>
      {data.ticket > 0 && (
        <TouchableOpacity
          className="absolute left-[20px] top-[10px] z-10 bg-primary h-7 
          w-7 rounded-full items-center justify-center"
        >
          <MaterialCommunityIcons name="ticket" size={20} color={"#070707"} />
        </TouchableOpacity>
      )}
      <View className="h-[60%] relative bg-slate-700 rounded-lg overflow-hidden">
        <Image src={data.card_image} className="w-full h-full" />
      </View>
      <View
        className="bg-primary absolute z-10 h-16 w-16 
        rounded-full top-[45%] left-[50%] -translate-x-8 overflow-hidden 
        border-4 border-primary-100"
      >
        <Image
          className="w-full h-full"
          source={{ uri: data.logo }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          backgroundColor: isOpen ? "#3d8" : "#ff0000",
        }}
        className="absolute bottom-0 left-0 w-[170px] h-4 items-center justify-center rounded-bl-lg rounded-tr-lg"
      >
        <Text className="text-background font-sfregular text-xs">
          {isOpen ? "Aberto Agora" : "Fechado"}
        </Text>
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

export default PlaceCard;
