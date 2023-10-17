import { Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import Card from "../../components/Card/Card";

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
      <Card
        img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        amount={1}
        name="Nome"
        price="15.11"
      />

      <Button
        title="buy"
        onPress={() => {
          navigation.navigate("CartRoutes");
        }}
      />
    </View>
  );
}
