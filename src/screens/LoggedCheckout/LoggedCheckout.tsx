import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import { TokenContext } from "../../contexts/authJWTContext";
import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoggedCheckoutStackParamList = {
  LoggedCheckout: any;
  AddShippingAddress: any;
  SuccessContinue: any;
  SuccessEnd: any;
};

type LoggedCheckoutScreenNavigationProp =
  NativeStackScreenProps<LoggedCheckoutStackParamList>;

enum typeofPayment {
  card,
  pix,
  bankslip,
}
let paymentMethod: typeofPayment;
paymentMethod = typeofPayment.bankslip;
export default function LoggedCheckout({
  navigation,
}: LoggedCheckoutScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Logged checkout screen</Text>
      <Button
        title="add shipping address"
        onPress={() => {
          navigation.navigate("AddShippingAddress");
        }}
      />
      <Text>
        Aqui é necessário adicionar os modais para escolher o metodo de
        pagamento e modal para adicionar carta ode credito caso seja o escolhido
      </Text>
      <Button
        title="submit order"
        onPress={() => {
          navigation.navigate("SuccessContinue", paymentMethod);
        }}
      />
    </View>
  );
}
