import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

type NonAuthStackParamList = {
  NotLoggedCheckout: any;
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthCheckoutRoutes: any;
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type NavigationProp = NativeStackScreenProps<NonAuthStackParamList>;

export default function SignUp({ navigation }: NavigationProp) {
  return (
    <View style={styles.container}>
      <Text>SignUp screen</Text>
      <Button title="SignUp" onPress={() => {navigation.navigate("BottomTabRoutes")}} />
    </View>
  );
}
