import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";

import InfoField from "./info-field";
import { IUser } from "../contexts/auth";

interface Props {
  user: IUser;
  updatePath?: string;
  singOut?: () => void;
}

const UserBadge = ({ user, updatePath, singOut }: Props) => {
  return (
    <View
      className="w-[95%] h-[80%] relative mt-10 mx-auto px-4 
      py-4 bg-primary rounded-xl items-center"
    >
      <View className="w-[30%] h-4 bg-background rounded-lg" />

      <Text className="text-2xl mt-10 font-sfsemibold">{user.name}</Text>

      <View
        className="mt-6 bg-primary-100 rounded-xl flex-1 
        w-full px-4 py-2"
      >
        <InfoField label="Nome" value={user.name} />
        <InfoField label="Email" value={user.email} />
        <InfoField label="Telefone" value={user.phone} />

        {updatePath && singOut && (
          <View className="flex-row gap-2 mt-auto py-4 items-center">
            <TouchableOpacity
              onPress={() => router.push(updatePath)}
              className="rounded-lg 
            flex-1 border-background border p-2"
            >
              <Text className="font-sfsemibold text-center">Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={singOut}
              className="rounded-lg 
            flex-1 border-background border p-2"
            >
              <Text className="font-sfsemibold text-center">Sair</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default UserBadge;
