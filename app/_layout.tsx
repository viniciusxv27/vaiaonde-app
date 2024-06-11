import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Sf-Black": require("../assets/fonts/Sf-Black.otf"),
    "Sf-Bold": require("../assets/fonts/Sf-Bold.ttf"),
    "Sf-Heavy": require("../assets/fonts/Sf-Heavy.otf"),
    "Sf-Light": require("../assets/fonts/Sf-Light.ttf"),
    "Sf-Medium": require("../assets/fonts/Sf-Medium.otf"),
    "Sf-Regular": require("../assets/fonts/Sf-Regular.otf"),
    "Sf-Semibold": require("../assets/fonts/Sf-Semibold.otf"),
    "Sf-Thin": require("../assets/fonts/Sf-Thin.otf"),
    "Sf-Ultralight": require("../assets/fonts/Sf-Ultralight.otf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default RootLayout;
