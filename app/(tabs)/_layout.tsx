import { ReactNode } from "react";
import { Platform, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

interface IconProps {
  name: string;
  color: string;
  focused: boolean;
  children: ReactNode;
}

const TabIcon = ({ children, color, name, focused }: IconProps) => {
  return (
    <View className="items-center justify-center">
      {children}
      <Text
        className={`text-xs ${focused ? "font-sfsemibold" : "font-sfregular"}`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#070707",
            borderTopWidth: 0,
            height: Platform.OS === "android" ? 64 : 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Home" focused={focused}>
                <Ionicons name="home-outline" color={color} size={24} />
              </TabIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="visit"
          options={{
            title: "Visit",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Visitar" focused={focused}>
                <MaterialIcons name="mode-of-travel" color={color} size={24} />
              </TabIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="roulete"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Home" focused={focused}>
                <Ionicons name="home-outline" color={color} size={24} />
              </TabIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="club"
          options={{
            title: "Club",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Club" focused={focused}>
                <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  color={color}
                  size={24}
                />
              </TabIcon>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon color={color} name="Perfil" focused={focused}>
                <AntDesign name="user" color={color} size={24} />
              </TabIcon>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
