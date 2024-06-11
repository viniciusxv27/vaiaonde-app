import { useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";

import images from "../../constants/images";
import FormField from "../../components/form-field";
import CustomButton from "../../components/custom-button";

interface FormSchema {
  email: string;
  password: string;
}

const SignInPage = () => {
  const [form, setForm] = useState<FormSchema>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsSubmitting(false);
    console.log(form);
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

          <FormField
            title="Email"
            value={form.email}
            handleChange={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            otherStyles="mt-7"
            placeholder="seumail@exeplo.com"
          />
          <FormField
            title="Senha"
            value={form.password}
            handleChange={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            placeholder="Sua senha"
          />
          <CustomButton
            title="Entrar"
            containerStyles="mt-7"
            handlePress={handleSubmit}
            isLoading={isSubmitting}
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
