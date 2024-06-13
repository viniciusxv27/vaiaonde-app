import React from "react";

import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Tabs, router } from "expo-router";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import images from "../../constants/images";
import SearchInput from "../../components/search-input";

const Visit = () => {
  const handlePlaceNavigate = (path: string) => {
    router.push(`/(places)/${path}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Tabs.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#070707",
            height: 110,
            borderBottomColor: "#070707",
            borderBottomWidth: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <View className="px-6 py-8">
              <Image
                source={images.logo}
                className="w-[130px] h-[48px]"
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <ScrollView>
        <View className="flex-1 w-full min-h-[75vh] px-4 space-y-4">
          <SearchInput
            value=""
            handleChange={() => {}}
            placeholder="Busque por todo o Vai aonde App"
          />
          <View className="gap-y-2">
            <Text className="text-2xl text-white font-sfbold">
              Ou procure por
            </Text>
            <View className="gap-y-3 items-center">
              <TouchableOpacity
                onPress={() => handlePlaceNavigate("restaurants")}
                className="w-full bg-primary rounded-lg min-h-[100px] items-center 
                justify-center flex-row gap-x-2"
              >
                <Ionicons name="restaurant" color="#070707" size={24} />
                <Text className="font-sfsemibold text-lg">Restaurantes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePlaceNavigate("places")}
                className="w-full bg-primary rounded-lg min-h-[100px] items-center 
                justify-center flex-row gap-x-2"
              >
                <MaterialCommunityIcons
                  name="fireplace-off"
                  color="#070707"
                  size={24}
                />
                <Text className="font-sfsemibold text-lg">Lugares</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handlePlaceNavigate("events")}
                className="w-full bg-primary rounded-lg min-h-[100px] items-center 
                justify-center flex-row gap-x-2"
              >
                <MaterialIcons name="event" color="#070707" size={24} />
                <Text className="font-sfsemibold text-lg">Eventos</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            className="bg-slate-100/80 px-4 py-4 rounded-lg 
            flex-row justify-between items-center"
            activeOpacity={0.7}
          >
            <Text className="font-sfsemibold text-base text-slate-500">
              Explorar o <Text className="text-slate-900">VAClub?</Text>
            </Text>
            <AntDesign name="arrowright" color="#070707" size={20} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Visit;
