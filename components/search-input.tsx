import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";

interface Props extends TextInputProps {
  value: string;
  handleChange: (e: string) => void;
  otherStyles?: string;
}

const SearchInput = ({ value, handleChange, otherStyles, ...props }: Props) => {
  return (
    <View
      className="border-2 border-black-200 w-full rounded-md h-16 
        px-4 bg-black-100 focus:border-primary flex-row items-center 
        space-x-4"
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-sfregular"
        value={value}
        placeholder={props.placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChange}
        {...props}
      />

      <TouchableOpacity>
        <AntDesign name="search1" color={"#7b7b8b"} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
