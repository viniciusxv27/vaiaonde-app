import React from "react";
import { Stack, router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RequestUpdateUserType,
  requestUpdateUserSchema,
} from "../lib/schemas/auth-schemas";

import FormField from "../components/form-field";
import CustomButton from "../components/custom-button";

import { useAuth } from "../contexts/auth-context";

const EditProfile = () => {
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestUpdateUserType>({
    resolver: zodResolver(requestUpdateUserSchema),
    mode: "onBlur",
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    },
  });

  const handleUpdateUser = (data: RequestUpdateUserType) => {
    console.log(data);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl font-sfsemibold text-center text-primary-100">
            Editar Perfil
          </Text>

          <View className="px-2 justify-center mt-4">
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormField
                  title="Nome"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  otherStyles="mt-4"
                  placeholder="Seu nome"
                  errors={errors.name?.message}
                />
              )}
              name="name"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormField
                  title="Email"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  keyboardType="email-address"
                  otherStyles="mt-4"
                  placeholder="seumail@exeplo.com"
                  errors={errors.email?.message}
                  autoCapitalize="none"
                />
              )}
              name="email"
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormField
                  title="Telefone"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  otherStyles="mt-4"
                  placeholder="(00)00000-0000"
                  errors={errors.phone?.message}
                  keyboardType="numeric"
                />
              )}
              name="phone"
            />
            <CustomButton
              title="Atualizar Perfil"
              containerStyles="mt-7"
              handlePress={handleSubmit(handleUpdateUser)}
              isLoading={false}
              filled
            />
            <CustomButton
              title="Cancelar"
              containerStyles="mt-4"
              handlePress={() => router.back()}
              isLoading={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
