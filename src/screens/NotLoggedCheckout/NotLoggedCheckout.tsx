import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import Button from "../../components/shared/Button/Button";
import BackButton from "../../components/shared/BackButton/BackButton";
import Tittle from "../../components/shared/Tittle/Tittle";

type NonAuthStackParamList = {
  NotLoggedCheckout: any;
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthCheckoutRoutes: any;
};

type NavigationProp = NativeStackScreenProps<NonAuthStackParamList>;

export default function NotLoggedCheckout({ navigation }: NavigationProp) {
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={navigation.goBack} color="black" />
      </View>
      <View style={styles.header}>
        <Tittle style={styles.textTitle}>Checkout</Tittle>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>
          You need to connect to complete {"\n"}your purchase, come on?
        </Text>
        <Button
          style={styles.button}
          title="LOGIN"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
}
