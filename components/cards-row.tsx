import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Card, ICard } from "./card";
import { api } from "../lib/api";

const CardsRow = () => {
  const [data, setData] = useState<ICard[] | null>(null);

  const getCardsData = async () => {
    const { data } = await api.get<{ tops: ICard[] }>("/top");
    setData(data.tops);
  };

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <View className="gap-3 pl-5 mt-4">
      <Text className="font-sfsemibold text-2xl text-white">Destaques</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          gap: 24,
          paddingRight: 20,
        }}
      >
        {data?.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CardsRow;
