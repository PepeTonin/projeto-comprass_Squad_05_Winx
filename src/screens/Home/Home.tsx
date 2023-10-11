import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import { fetchCategoriesOneToFive } from "../../util/apiRequests";
import HomeSection from "../../components/HomeSection/HomeSection";
import { styles } from "./style";
import { colors } from "../../styles/globalStyles";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

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
  const [data, setData] = useState<ItemData[]>([]);

  async function getCategories() {
    try {
      const response = await fetchCategoriesOneToFive();
      setData(response);
    } catch (error) {
      // TO DO: HANDLE THIS ERROR
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  function onCardPress() {
    navigation.navigate("HomeRoutes");
  }

  let isAuthenticated = false;

  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
        <Text
          style={{ color: "white", position: "absolute", top: 60, left: 16 }}
        >
          {isAuthenticated ? "Logged in" : "Not logged in"}
        </Text>

        <View style={styles.searchButtonContainer}>
          <Ionicons name="search" size={22} color={colors.white} />
        </View>
      </View>

      <FlatList
        style={{ zIndex: -1 }}
        ListHeaderComponent={HomeHeader}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HomeSection
            onCardPress={onCardPress}
            categoryId={item.id}
            categoryName={item.name}
          />
        )}
      />
    </View>
  );
}
