import { Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type HomeScreenNavigationProp = NativeStackScreenProps<StackParamList>;

export default function Home({ navigation }: HomeScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="product card"
        onPress={() => navigation.navigate("HomeRoutes")}
      />
    </View>
  );
}
