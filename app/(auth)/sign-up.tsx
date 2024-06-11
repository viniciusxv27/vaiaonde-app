import { useState } from "react";

import { Link } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "../../constants/images";
import FormField from "../../components/form-field";
import CustomButton from "../../components/custom-button";

interface FormSchema {
  name: string;
  email: string;
  password: string;
}

const SignUpPage = () => {
  const [form, setForm] = useState<FormSchema>({
    name: "",
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

          <Text className="text-xl text-white font-sfsemibold mt-8">
            Crie já sua conta no{" "}
            <Text className="underline text-primary">Vai Aonde App</Text>
          </Text>

          <FormField
            title="Nome"
            value={form.email}
            handleChange={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            placeholder="Seu nome"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChange={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
            otherStyles="mt-4"
            placeholder="seumail@exeplo.com"
          />
          <FormField
            title="Senha"
            value={form.password}
            handleChange={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4"
            placeholder="Sua senha"
          />
          <CustomButton
            title="Criar conta"
            containerStyles="mt-7"
            handlePress={handleSubmit}
            isLoading={isSubmitting}
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
