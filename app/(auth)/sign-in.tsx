import { useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";

import images from "../../constants/images";
import FormField from "../../components/form-field";
import CustomButton from "../../components/custom-button";

import { useAuth } from "../../contexts/auth-context";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RequestLoginType,
  requestLoginSchema,
} from "../../lib/schemas/auth-schemas";

interface FormSchema {
  email: string;
  password: string;
}

const SignInPage = () => {
  const { signIn, isLoading } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestLoginType>({
    resolver: zodResolver(requestLoginSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: RequestLoginType) => {
    try {
      await signIn(data);
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

          <Text className="text-2xl text-white font-sfsemibold mt-8">
            Faça login no{" "}
            <Text className="underline text-primary">Vai Aonde App</Text>
          </Text>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                title="Email"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                keyboardType="email-address"
                otherStyles="mt-7"
                placeholder="seumail@exeplo.com"
                errors={errors.email?.message}
                autoCapitalize="none"
              />
            )}
            name="email"
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
                otherStyles="mt-7"
                placeholder="Sua senha"
                errors={errors.password?.message}
                autoCapitalize="none"
              />
            )}
            name="password"
            rules={{ required: true }}
          />
          <CustomButton
            title="Entrar"
            containerStyles="mt-7"
            handlePress={handleSubmit(handleLogin)}
            isLoading={isLoading}
            filled
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-base text-gray-100 font-sfregular">
              Ainda não tem conta?
            </Text>
            <Link
              href="/sign-up"
              className="text-primary text-base font-sfregular"
            >
              Registre-se
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInPage;
