import { Text, View, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import AuthInput from "../../components/shared/Input/Input";
import Tittle from "../../components/shared/Tittle/Tittle";
import { useState } from "react";
import Button from "../../components/shared/Button/Button";
import { changePassword, checkEmail } from "../../util/apiUsers";

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
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setIsEmailValid(!!text);
  };

  const handleCheckEmailInside = async () => {
    try {
      let emailIsInApi = await checkEmail({ email });
      setIsEmailAvailable(emailIsInApi);
    } catch (error: any) {
      alert("Erro durante o registro" + error);
    }
  };

  const handleChangePassword = async () => {
    try {
      await changePassword({ email, newPassword });
    } catch (error: any) {
      alert("Erro durante o registro" + error);
    }
  };

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
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          editable={true}
        />
        <AuthInput
          label="New Password"
          value={newPassword}
          autoCapitalize="none"
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry={true}
          editable={isEmailAvailable == false ? true : false}
        />
        <AuthInput
          label="Confirm New Password"
          value={confirmNewPassword}
          autoCapitalize="none"
          onChangeText={(text) => setConfirmNewPassword(text)}
          secureTextEntry={true}
          editable={isEmailAvailable == false ? true : false}
        />

        <View style={styles.buttons}>
          <Button
            title="SEARCH"
            onPress={() => {
              handleCheckEmailInside();
            }}
            disable={isEmailValid == true ? false : true}
          />
          <Button
            title="CONFIRM"
            onPress={() => {
              handleChangePassword();
              navigation.navigate("Login");
            }}
            disable={isEmailAvailable == false ? false : true}
          />
        </View>
      </View>
    </View>
  );
}
