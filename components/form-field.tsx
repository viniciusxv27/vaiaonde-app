import { useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

interface Props extends TextInputProps {
  title: string;
  value: string;
  handleChange: (e: string) => void;
  otherStyles?: string;
}

const FormField = ({
  title,
  value,
  handleChange,
  otherStyles,
  ...props
}: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>
      <View
        className="border-2 border-black-200 w-full rounded-md h-16 
        px-4 bg-black-100 focus:border-primary flex-row items-center"
      >
        <TextInput
          className="flex-1 text-white font-sfsemibold text-base"
          value={value}
          placeholder={props.placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChange}
          secureTextEntry={title === "Senha" && !showPassword}
          {...props}
        />

        {title === "Senha" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Feather name="eye" size={24} color={"#7b7b8b"} />
            ) : (
              <Feather name="eye-off" size={24} color={"#7b7b8b"} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
