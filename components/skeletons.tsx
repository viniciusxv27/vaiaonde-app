import { View } from "react-native";

export const CardSkeleton = () => {
  return (
    <View className="justify-center items-center px-4">
      <View className="relative mx-auto w-full h-[240px] mb-8 rounded-lg overflow-hidden gap-2">
        <View className="h-[60%] relative bg-gray-900 rounded-lg overflow-hidden" />
        <View className="flex-1 px-1 flex-row items-center justify-between">
          <View className="gap-y-2">
            <View className="bg-gray-900 w-[200px] h-5 rounded-lg" />
            <View className="bg-gray-900 w-[80px] h-5 rounded-lg" />
          </View>
          <View
            className="w-[80px] h-8 bg-gray-900 rounded-3xl flex-row 
          items-center justify-center gap-x-1"
          />
        </View>
      </View>
    </View>
  );
};
