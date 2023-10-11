import { Text, View, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import AuthInput from "../../components/shared/Input/Input";
import Tittle from "../../components/shared/Tittle/Tittle";
import { useState } from "react";
import Button from "../../components/shared/Button/Button";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageCompass}
        source={require("../../assets/app-images/compass.png")}
      />

      <View style={styles.texts}>
        <Tittle style={styles.textTitle} weight="700">
          Forgot Password
        </Tittle>

        <Text style={styles.text}>
          Enter your email and let us see if it exists {"\n"}for you to change
          your password :)
        </Text>
      </View>

      <View style={styles.forms}>
        <AuthInput
          label="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          editable={true}
        />
        <AuthInput
          label="New Password"
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          editable={false}
        />
        <AuthInput
          label="Confirm New Password"
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          editable={false}
        />

        <View style={styles.buttons}>
          <Button
            title="SEARCH"
            onPress={() => {
              navigation.navigate("Login");
            }}
            disable={true}
          />
          <Button
            title="LOGIN"
            onPress={() => {
              navigation.navigate("Login");
            }}
            disable={true}
          />
        </View>
      </View>
    </View>
  );
}
