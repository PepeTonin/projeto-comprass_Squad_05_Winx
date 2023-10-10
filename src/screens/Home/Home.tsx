import { Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import ProductCard from "../../components/ProductCard/ProductCard";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type HomeScreenNavigationProp = NativeStackScreenProps<StackParamList>;

export default function Home({ navigation }: HomeScreenNavigationProp) {
  function onCardPress() {
    navigation.navigate("HomeRoutes");
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ProductCard
        productDescription={"Product Description bigger to see if it works"}
        productName={"Product Name"}
        productPrice={10.5}
        onCardPress={onCardPress}
        imageUrl={"https://i.imgur.com/QEGACen.jpeg"}
      />
    </View>
  );
}
