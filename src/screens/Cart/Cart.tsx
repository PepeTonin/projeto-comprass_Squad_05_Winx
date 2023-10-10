import { Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type CartScreenNavigationProp = NativeStackScreenProps<StackParamList>;

export default function Cart({ navigation }: CartScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
      <Button
        title="buy"
        onPress={() => {
          navigation.navigate("CartRoutes");
        }}
      />
    </View>
  );
}
