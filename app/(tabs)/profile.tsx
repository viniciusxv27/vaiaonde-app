import React from "react";

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";

import { useAuth } from "../../contexts/auth-context";
import { Entypo } from "@expo/vector-icons";
import UserBadge from "../../components/user-badge";

const Profile = () => {
  const { user, session, signOut } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          {user && session && (
            <Text className="text-2xl font-sfsemibold text-center text-primary-100">
              Minha Conta
            </Text>
          )}
          {!user || !session ? (
            <>
              <View className="w-full h-auto items-center">
                <Entypo name="emoji-sad" size={64} color={"#ff9c01"} />
              </View>

              <Text className="text-2xl text-white font-sfsemibold mt-8">
                Parece que você ainda não está conectado. Faça login e aproveite
                de nossos serviços.
              </Text>

              <Link
                href={"/sign-in"}
                className="text-primary font-sfsemibold underline text-2xl mt-4 text-center"
              >
                Fazer Login
              </Link>
            </>
          ) : (
            <UserBadge
              user={user}
              updatePath="/edit-profile"
              singOut={signOut}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
