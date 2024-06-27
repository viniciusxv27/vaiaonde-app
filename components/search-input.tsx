import { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputProps,
  TextInputSubmitEditingEventData,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

interface Props extends TextInputProps {
  placeType?: string;
  otherStyles?: string;
}

const SearchInput = ({ otherStyles, placeType, ...props }: Props) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmitQuery = (placeType?: string) => {
    if (!query) return;

    router.push(`/search/${query}`);
    if (placeType !== undefined) {
      router.setParams({ placeType });
    }
    setQuery("");
  };

  const handleEnterPress = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    handleSubmitQuery(placeType);
  };

  return (
    <View
      className="border-2 border-black-200 w-full rounded-md h-16 
        px-4 bg-black-100 focus:border-primary flex-row items-center 
        space-x-4"
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-sfregular"
        value={query}
        placeholder={props.placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={setQuery}
        returnKeyType="search"
        onSubmitEditing={handleEnterPress}
        {...props}
      />

      <TouchableOpacity onPress={() => handleSubmitQuery(placeType)}>
        <AntDesign name="search1" color={"#7b7b8b"} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
