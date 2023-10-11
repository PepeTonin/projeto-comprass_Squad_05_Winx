import { Text, ImageBackground, SafeAreaView, View } from "react-native";
import Button from "../../components/shared/Button/Button";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./style";
import Tittle from "../../components/shared/Tittle/Tittle";
import { useRoute } from "@react-navigation/native";

type LoggedCheckoutStackParamList = {
  LoggedCheckout: any;
  AddShippingAddress: any;
  SuccessContinue: any;
  SuccessEnd: any;
};

type LoggedCheckoutScreenNavigationProp =
  NativeStackScreenProps<LoggedCheckoutStackParamList>;

type PaymentMethodChoiceList = {
  card: 1;
  pix: 2;
  bankslip: 3;
};

export default function SuccessContinue({
  navigation,
}: LoggedCheckoutScreenNavigationProp) {
  const route = useRoute();

  const paymentMethod = route.params;
  console.log("paymentMethod");
  return (
    <ImageBackground
      source={require("../../assets/img/succesContinueBackground.png")}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Tittle>Success!</Tittle>
        <Text style={styles.message}>
          Your order will be delivered soon. Thank you for choosing our app!
        </Text>
        <Button
          title="Continue"
          onPress={() => {
            navigation.navigate("SuccessEnd");
          }}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
}
