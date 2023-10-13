import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { fetchCategoriesOneToFive } from "../../util/apiRequests";
import HomeSection from "../../components/home-screen/HomeSection/HomeSection";
import { styles } from "./style";
import HomeHeader from "../../components/home-screen/HomeHeader/HomeHeader";
import SearchButton from "../../components/home-screen/SearchButton/SearchButton";
import HomeProfileHeader from "../../components/home-screen/HomeProfileHeader/HomeProfileHeader";
import Splash from "../Splash/Splash";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type HomeScreenNavigationProp = NativeStackScreenProps<StackParamList>;

interface ItemData {
  id: number;
  name: string;
}

export default function Home({ navigation }: HomeScreenNavigationProp) {
  const [initializing, setInitializing] = useState<boolean>();

  const [data, setData] = useState<ItemData[]>([]);

  async function getCategories() {
    try {
      const response = await fetchCategoriesOneToFive();
      setData(response);
      setInitializing(false);
    } catch (error) {
      // TO DO: HANDLE THIS ERROR
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    setInitializing(true);
    getCategories();
  }, []);

  function onCardPress() {
    navigation.navigate("HomeRoutes");
  }

  let isAuthenticated = true;

  if (initializing) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        {isAuthenticated ? (
          <HomeProfileHeader
            userImageUrl={"https://i.imgur.com/nZnWUc0.jpeg"}
            userName={"Jhon"}
          />
        ) : null}

        <SearchButton />
      </View>

      <FlatList
        style={{ zIndex: -1 }}
        ListHeaderComponent={HomeHeader}
        ListFooterComponent={<View></View>}
        ListFooterComponentStyle={{ marginVertical: 15 }}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          initializing ? (
            <Splash />
          ) : (
            <HomeSection
              onCardPress={onCardPress}
              categoryId={item.id}
              categoryName={item.name}
            />
          )
        }
      />
    </View>
  );
}
