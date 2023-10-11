import { Text, ImageBackground, SafeAreaView, View } from "react-native";
import Button from "../../components/shared/Button/Button";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { styles } from "./style";
import Tittle from "../../components/shared/Tittle/Tittle";

type LoggedCheckoutStackParamList = {
  LoggedCheckout: any;
  AddShippingAddress: any;
  SuccessContinue: any;
  SuccessEnd: any;
  SuccessEndCardPayment: any;
};

type LoggedCheckoutScreenNavigationProp =
  NativeStackScreenProps<LoggedCheckoutStackParamList>;

export default function SuccessContinue({
  navigation,
  route,
}: LoggedCheckoutScreenNavigationProp) {
  const paymentMethod = route.params;

  return (
    <ImageBackground
      source={require("../../assets/app-images/succesContinueBackground.png")}
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
            navigation.navigate("SuccessEnd", paymentMethod);
          }}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
}
