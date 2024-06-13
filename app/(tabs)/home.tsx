import React from "react";

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Tabs } from "expo-router";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";

import images from "../../constants/images";
import Banner from "../../components/banner";
import CardsRow from "../../components/cards-row";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <Tabs.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <View className="px-6 py-6">
              <Image
                source={images.logo}
                className="w-[120px] h-[48px]"
                resizeMode="contain"
              />
            </View>
          ),
          headerRight: () => (
            <View className="items-center px-4 py-6">
              <Text className="text-sm font-sfsemibold text-white">
                Economizou
              </Text>
              <View className="flex-row gap-1 items-center">
                <MaterialIcons
                  name="wallet-giftcard"
                  color={"#fff"}
                  size={20}
                />
                <Text className="text-sm font-sfsemibold text-white">
                  R$ 0,00
                </Text>
              </View>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#070707",
            borderBottomColor: "#070707",
            borderBottomWidth: 0,
            height: 100,
          },
          headerShadowVisible: false,
        }}
      />
      <ScrollView>
        <View className="w-full min-h-[70vh]">
          <Banner />
          <CardsRow />
          <View className="flex-row pt-10 items-center gap-3 px-5">
            <TouchableOpacity
              className="bg-primary min-h-[64px] items-center justify-center 
            flex-1 px-4 py-3 rounded-lg"
            >
              <AntDesign name="infocirlceo" color={"#070707"} size={20} />
              <Text className="text-background text-base font-sfregular">
                Como usar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-primary flex-1 px-4 py-3 rounded-lg min-h-[64px] 
              items-center justify-center"
            >
              <Ionicons name="heart" color={"#070707"} size={20} />
              <Text className="text-background text-base font-sfregular">
                Favoritos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
