import { View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

import Button from "../../components/shared/Button/Button";
import EndCardPaymentScreen from "../../components/EndCardPayment/EndCardPayment";
import EndPixPaymentScreen from "../../components/EndPixPayment/EndPixPayment";
import EndBankSlipPaymentScreen from "../../components/EndBankSlipPayment/EndBankSlipPayment";

type StackParamList = {
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type HomeScreenNavigationProp = NativeStackScreenProps<StackParamList>;

export default function SuccessEnd({
  navigation,
  route,
}: HomeScreenNavigationProp) {
  const paymentMethod = route.params;

  return (
    <View style={styles.container}>
      {paymentMethod === 0 && (
        <EndCardPaymentScreen style={styles.paddingComponentContainer} />
      )}
      {paymentMethod === 1 && (
        <EndPixPaymentScreen style={styles.paddingComponentContainer} />
      )}
      {paymentMethod === 2 && (
        <>
          <EndBankSlipPaymentScreen style={styles.paddingComponentContainer} />
          <Button title="BAIXAR BOLETO" />
        </>
      )}
      <Button
        title="CONTINUE SHOPPING"
        onPress={() => {
          navigation.navigate("BottomTabRoutes", { screen: "HomeTab" });
        }}
        style={styles.buttonContinueShopping}
      />
    </View>
  );
}
