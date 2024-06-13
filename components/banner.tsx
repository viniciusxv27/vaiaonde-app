import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { api } from "../lib/api";

interface IBanners {
  id: string;
  image: string;
  created_at: string;
  updated_at: string;
}

const Banner = () => {
  const windowWith = Dimensions.get("window").width;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);
  const [banners, setBanners] = useState<IBanners[] | null>(null);

  const FlatListRef = useRef<FlatList>(null);

  const getBanners = async () => {
    try {
      const { data } = await api.get<{ banners: IBanners[] }>("/banner");

      setBanners(data.banners);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  useEffect(() => {
    if (banners && banners.length >= 1) {
      const intervalId = setInterval(() => {
        if (autoScroll) {
          if (currentIndex === banners.length - 1) {
            FlatListRef.current?.scrollToIndex({
              index: 0,
              animated: true,
            });
            setCurrentIndex(0);
          } else {
            FlatListRef.current?.scrollToIndex({
              index: currentIndex + 1,
              animated: true,
            });
            setCurrentIndex((prev) => prev + 1);
          }
        }
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex, autoScroll]);

  function handleScrollBegin() {
    setAutoScroll(false);
  }

  function handleScrollEnd() {
    setAutoScroll(true);
  }

  if (!banners) {
    return <ActivityIndicator color={"#fb8000"} size={"large"} />;
  }

  return (
    <View className="h=[160px]">
      <FlatList
        ref={FlatListRef}
        data={banners}
        renderItem={({ item, index }) => (
          <View
            style={{ width: windowWith }}
            className="h-[160px] py-3 items-center justify-center"
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: windowWith }}
              className="h-[160px] self-center"
            />
          </View>
        )}
        horizontal
        pagingEnabled
        keyExtractor={(item: IBanners, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={handleScrollBegin}
        onScrollEndDrag={handleScrollEnd}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
