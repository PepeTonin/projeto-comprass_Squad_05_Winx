import { Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

type HomeStackParamList = {
  Home: any;
  ProductDetails: any;
};

type HomeScreenNavigationProp = NativeStackScreenProps<HomeStackParamList>;

export default function Home({ navigation }: HomeScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="product card"
        onPress={() => navigation.navigate("ProductDetails")}
      />
    </View>
  );
}
