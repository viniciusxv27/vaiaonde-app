import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";
import { Tabs } from "expo-router";
import PlaceCard from "../../components/place-card";
import SearchInput from "../../components/search-input";
import { CardSkeleton } from "../../components/skeletons";
import EmptyState from "../../components/empty-state";

const Club = () => {
  const data: any = [];
  const isLoading: boolean = false;
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <Tabs.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#070707",
            height: 110,
            borderBottomColor: "#070707",
            borderBottomWidth: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <View className="px-6 py-8">
              <Image
                source={images.logo}
                className="w-[130px] h-[48px]"
                resizeMode="contain"
              />
            </View>
          ),
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
          <View className="px-4">
            <View>
              <SearchInput placeholder={`Busque no VA Club`} />
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

export default Club;
