import { StatusBar } from "expo-status-bar";
import { router, Redirect } from "expo-router";

import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logo from "../assets/logo.png";
import path from "../assets/path.png";

import CustomButton from "../components/custom-button";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-background">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl font-sfbold text-center text-white z-10">
              Conheça e explore novos lugares com o
              <Text className="text-primary-100"> Vai Aonde!</Text>
            </Text>
            <Image
              source={path}
              className="w-[260px] h-[20px] absolute -bottom-2.5 left-[15%]"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-sfregular text-gray-100 mt-7 text-center">
            A melhor forma de se surpreender com novos lugares, restaurantes,
            eventos e muito mais.
          </Text>
          <CustomButton
            title="Faça login"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            filled
          />
          <CustomButton
            title="Continuar sem login"
            handlePress={() => router.replace("/home")}
            containerStyles="w-full mt-2"
          />
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
