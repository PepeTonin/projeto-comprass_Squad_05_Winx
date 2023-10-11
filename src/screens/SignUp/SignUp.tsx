import { Text, View, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import AuthInput from "../../components/shared/Input/Input";
import { useState } from "react";
import Button from "../../components/shared/Button/Button";
import Tittle from "../../components/shared/Tittle/Tittle";

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
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageCompass}
        source={require("../../assets/app-images/compass.png")}
      />

      <View style={styles.texts}>
        <Tittle style={styles.textTitle} weight="700">Sign Up</Tittle>
        <Text style={styles.text}>
          Choose a really cool name that only contains {"\n"}spaces as special
          characters. Oh, and your {"\n"}password must have more than 4 digits!
          :)
        </Text>
      </View>

      <View style={styles.forms}>
        <AuthInput
          label="Name"
          value={name}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          editable={true}
        />
        <AuthInput
          label="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          editable={true}
        />
        <AuthInput
          label="Password"
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          editable={true}
        />
        <AuthInput
          label="Confirm Password"
          value={password}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          editable={true}
        />

        <View style={styles.buttons}>
          <Button
            title="SIGN UP"
            onPress={() => {
              navigation.navigate("BottomTabRoutes");
            }}
          />
        </View>
      </View>
    </View>
  );
}
