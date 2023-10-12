import { Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import Button from "../../components/shared/Button/Button";

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
  );
}
