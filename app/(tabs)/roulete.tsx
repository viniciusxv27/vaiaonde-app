import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Tabs } from "expo-router";
import images from "../../constants/images";
import { CardSkeleton } from "../../components/skeletons";
import EmptyState from "../../components/empty-state";
import { RefreshControl } from "react-native";

const drawData: any = [
  {
    name: "Cupom 50%",
    date: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    isHappening: true,
  },
  {
    name: "Cupom 25%",
    date: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    isHappening: true,
  },
  {
    name: "Cupom 15%",
    date: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
    isHappening: true,
  },
  {
    name: "1 refeição Grátis",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    isHappening: false,
  },
];

const Roulete = () => {
  const isLoading: boolean = false;
  const [data, setData] = useState<any>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [happening, setHappening] = useState<boolean>(true);

  const filterDrawHappens = () => {
    if (happening) {
      const happeningData = drawData.filter((draw: any) => draw.isHappening);

      setData(happeningData);
      return;
    }

    if (!happening) {
      const isNotHappeningData = drawData.filter(
        (draw: any) => !draw.isHappening
      );

      setData(isNotHappeningData);
    }
  };

  useEffect(() => {
    filterDrawHappens();
  }, [happening]);

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
          headerLeft: () => (
            <View className="px-6 py-6">
              <Image
                source={images.logo}
                className="w-[120px] h-[48px]"
                resizeMode="contain"
              />
            </View>
          ),
          headerRight: () => (
            <View className="items-center px-4 py-6">
              <Text className="text-sm font-sfsemibold text-white">
                Em andamento
              </Text>
              <View className="flex-row gap-1 items-center">
                <Text className="text-xs font-sfsemibold text-primary">
                  {data.length > 0 ? data.length : "Nenhum"}
                </Text>
              </View>
            </View>
          ),
          headerStyle: {
            backgroundColor: "#070707",
            borderBottomColor: "#070707",
            borderBottomWidth: 0,
            height: 100,
          },
          headerShadowVisible: false,
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <>
            <>
              <View className="flex-1 items-center px-4 mt-2">
                <View
                  className="w-full px-4 py-3 bg-primary flex-row items-center 
                    justify-between rounded-md"
                >
                  <View className="space-y-2">
                    <Text className="font-sfsemibold text-black capitalize text-sm">
                      {item.name}
                    </Text>
                    <Text className="font-sflight text-black text-sxs">
                      {new Date(item.date).toLocaleDateString()} às{" "}
                      {new Date(item.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      disabled={!happening}
                      className={`${
                        happening ? "bg-[#3d8]" : "bg-[#fd3a40]"
                      } p-2 rounded-lg items-center`}
                      activeOpacity={0.7}
                    >
                      <Text className="text-xs font-sfregular">
                        {happening ? "Participar" : "Já encerrado"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          </>
        )}
        ListHeaderComponent={() => (
          <View className="px-4 mb-6 space-y-4">
            {/* <View className="items-center">
              <Text className="font-sfsemibold text-primary text-2xl">
                Sorteios
              </Text>
            </View> */}
            <View className="flex-row gap-2">
              <TouchableOpacity
                disabled={happening}
                className="px-2 py-3 rounded-md flex-1 items-center"
                style={{ backgroundColor: happening ? "#ff8e01" : "#ff9c01" }}
                activeOpacity={0.7}
                onPress={() => setHappening(true)}
              >
                <Text
                  className={`font-${happening ? "sfsemibold" : "sfregular"}`}
                >
                  Em andamento
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!happening}
                className="px-2 py-3  rounded-md flex-1 items-center"
                style={{ backgroundColor: !happening ? "#ff8e01" : "#ff9c01" }}
                onPress={() => setHappening(false)}
                activeOpacity={0.7}
              >
                <Text
                  className={`font-${!happening ? "sfsemibold" : "sfregular"}`}
                >
                  Já ocorridos
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <>
            {isLoading ? (
              <CardSkeleton />
            ) : (
              <EmptyState
                title="Nenhum sorteio encontrado."
                subtitle="Em breve novos sorteios."
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

export default Roulete;
