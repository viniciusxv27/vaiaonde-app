import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

interface Props {
  title: string;
  handlePress?: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  filled?: boolean;
  outlined?: boolean;
}

const CustomButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props?.handlePress}
      activeOpacity={0.7}
      disabled={props.isLoading}
      className={`bg-primary rounded-xl min-h-[54px] 
      justify-center items-center ${props.containerStyles} 
      ${props.isLoading ? "opacity-50" : ""} 
      ${props.filled ? "" : "bg-transparent"}
      ${
        !props.filled && props.outlined
          ? "bg-transparent border border-background"
          : ""
      }`}
    >
      <Text
        className={`text-background font-sfsemibold text-lg capitalize 
        ${props.textStyles} ${props.filled ? "" : "text-primary underline"}
        ${
          !props.filled && props.outlined ? "text-background no-underline" : ""
        }`}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
