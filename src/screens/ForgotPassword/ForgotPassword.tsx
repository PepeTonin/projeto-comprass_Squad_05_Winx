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

export default function ForgotPassword({ navigation }: NavigationProp) {
  return (
    <View style={styles.container}>
      <Text>forgot password screen</Text>
      <Button
        title="confirm"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
}
