import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { api } from "../../lib/api";
import { useData } from "../../lib/hooks/useData";

import SearchInput from "../../components/search-input";
import EmptyState from "../../components/empty-state";
import PlaceCard from "../../components/place-card";
import { CardSkeleton } from "../../components/skeletons";

export interface IPlace {
  id: string;
  name: string;
  card_image: string;
  categorie: string;
  city: string;
  logo: string;
  ticket: number;
  ticket_count: number;
  hidden: number;
  rate: string;
  coords: {
    lat: string;
    ling: string;
  };
  hourly: any;
}

const Place = () => {
  const { data, refetch, isLoading } = useData(getPlaces);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const { placeType } = useLocalSearchParams();

  async function getPlaces() {
    const { data } = await api.get<{ places: IPlace[] }>(
      `/places/${placeType}`
    );

    return data;
  }

  if (!placeType) return null;

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

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

  return (
    <SafeAreaView className="flex-1 w-full bg-background">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <FlatList
        data={data?.places}
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
                <Text className="font-sfsemibold text-2xl text-white">
                  {getPlaceTypeName(placeType)}
                </Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Ionicons name="filter" color={"#e4e4e4"} size={24} />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <SearchInput
                // value=""
                // handleChange={() => {}}
                placeholder={`Busque em ${getPlaceTypeName(placeType)}`}
              />
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

export default Place;

const styles = StyleSheet.create({});
