import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type HomeScreenNavigationProp = NativeStackScreenProps<StackParamList>;

export default function SuccessEnd({
  navigation,
}: HomeScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Success End Screen</Text>
      <Text>
        Nesta tela é necessário adicionar formatação condicional de acordo com o
        método de pagamento selecionado
      </Text>
      <Button
        title="continue shopping"
        onPress={() => {
          navigation.navigate("BottomTabRoutes", {screen: "HomeTab"});
        }}
      />
    </View>
  );
}
