import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaceCard from "../../components/place-card";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { CardSkeleton } from "../../components/skeletons";
import EmptyState from "../../components/empty-state";
import { useData } from "../../lib/hooks/useData";
import { api } from "../../lib/api";
import { IPlace } from "../(places)/[placeType]";

const Search = () => {
  const { data, isLoading, refetch } = useData(getPlaces);

  const { query, placeType } = useLocalSearchParams();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getPlaceTypeName = (placeType: string | string[]) => {
    switch (placeType) {
      case "1":
        return "Restaurantes";
      case "2":
        return "Lugares";
      case "3":
        return "Eventos";
      default:
        return "Unknown Place Type";
    }
  };

  if (!query) return null;

  async function getPlaces() {
    if (!query) return null;
    const searchQuery = Array.isArray(query)
      ? query[0].toLowerCase()
      : query.toLowerCase();

    const { data } = await api.get<{ places: IPlace[] }>(
      `/places/${placeType ?? "1"}?search=${searchQuery}`
    );

    const places = data?.places.filter((place) =>
      place.name.toLowerCase().includes(searchQuery)
    );

    return places;
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <>
            <>
              {item.hidden === 0 && (
                <View className="flex-1 items-center">
                  <PlaceCard data={item} />
                </View>
              )}
            </>
          </>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-4">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-sfregular text-xs text-white">
                  Exibindo Resultados{" "}
                  {placeType && `em ${getPlaceTypeName(placeType)} `}para
                </Text>
                <Text className="font-sfsemibold text-lg text-white">
                  {query}
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Ionicons name="filter" color={"#e4e4e4"} size={24} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              {/* <SearchInput
                // value=""
                // handleChange={() => {}}
                placeholder={`Busque em ${getPlaceTypeName(placeType)}`}
              /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <>
            {isLoading ? (
              <CardSkeleton />
            ) : (
              <EmptyState
                title="Nenhum estabelecimento encontrado."
                subtitle="Verifique se digitou corretamente ou possui algum filtro ativo."
              />
            )}
          </>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Search;
