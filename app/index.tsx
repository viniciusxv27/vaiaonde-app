import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="text-2xl font-sfregular">Hello World!</Text>
      <Link className="text-blue font-sfultralight" href={"/home"}>
        Go to Home
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
