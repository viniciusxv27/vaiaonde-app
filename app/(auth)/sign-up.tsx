import { useState } from "react";

import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import FormField from "../../components/form-field";
import CustomButton from "../../components/custom-button";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RequestRegisterType,
  requestRegisterSchema,
} from "../../lib/schemas/auth-schemas";
import { useAuth } from "../../contexts/auth-context";

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestRegisterType>({
    resolver: zodResolver(requestRegisterSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const { register, isLoading } = useAuth();

  const handleRegister = async (data: RequestRegisterType) => {
    try {
      await register(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[160px] h-[48px]"
          />

          <Text className="text-xl text-white font-sfsemibold mt-8">
            Crie já sua conta no{" "}
            <Text className="underline text-primary">Vai Aonde App</Text>
          </Text>

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
            rules={{ required: true }}
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
              />
            )}
            name="email"
            rules={{ required: true }}
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
            rules={{ required: true }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                title="Senha"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                otherStyles="mt-4"
                placeholder="Sua senha"
                errors={errors.password?.message}
              />
            )}
            name="password"
            rules={{ required: true }}
          />
          <CustomButton
            title="Criar conta"
            containerStyles="mt-7"
            handlePress={handleSubmit(handleRegister)}
            isLoading={isLoading}
            filled
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-base text-gray-100 font-sfregular">
              Já Possui conta?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-primary text-base font-sfregular"
            >
              Faça login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpPage;
