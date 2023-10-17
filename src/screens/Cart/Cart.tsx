import { useContext, useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import { CartContext } from "../../contexts/cartContext";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type CartScreenNavigationProp = NativeStackScreenProps<StackParamList>;

export default function Cart({ navigation }: CartScreenNavigationProp) {
  const cartContext = useContext(CartContext);
  console.log("cart", cartContext.items);
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
