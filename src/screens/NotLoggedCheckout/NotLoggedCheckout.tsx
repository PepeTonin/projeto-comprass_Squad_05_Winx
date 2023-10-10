import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

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
      <Text>Not logged checkout screen</Text>
      <Button
        title="login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}
