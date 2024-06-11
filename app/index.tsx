import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl font-sfregular">Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
