import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Filters = ({ filterType }: { filterType: string }) => {
  const filters = ["padaria", "churrasco", "vegetariano", "doces"];

  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity className="bg-slate-800 rounded-xl p-2">
          <Text className="text-slate-50 capitalize text-xs font-sfregular">
            {item}
          </Text>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 12 }}
    />
  );
};

export default Filters;

const styles = StyleSheet.create({});
