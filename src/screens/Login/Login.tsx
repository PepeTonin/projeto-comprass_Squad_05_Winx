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

export default function Login({ navigation }: NavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Login screen</Text>
      <Button title="login" onPress={() => {navigation.navigate("BottomTabRoutes")}} />
      <Button title="sign up" onPress={() => {navigation.navigate("SignUp")}} />
      <Button title="forgot password" onPress={() => {navigation.navigate("ForgotPassword")}} />
      <Button title="dont want to register" onPress={() => {navigation.navigate("BottomTabRoutes")}} />
    </View>
  );
}
