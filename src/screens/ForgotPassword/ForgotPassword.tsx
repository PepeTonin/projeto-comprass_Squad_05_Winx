import { Text, View, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import AuthInput from "../../components/shared/Input/Input";
import Tittle from "../../components/shared/Tittle/Tittle";
import { useEffect, useState } from "react";
import Button from "../../components/shared/Button/Button";
import { changePassword, checkEmail } from "../../util/apiUsers";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  newPassword: yup
    .string()
    .min(6, "Your password must be longer than 6 digits.")
    .required("Please complete all fields"),
  confirmNewPassword: yup
    .string()
    .min(6, "Your password must be longer than 6 digits.")
    .oneOf(
      [yup.ref("newPassword")],
      "Your password is not the same as your confirmation"
    )
    .required("Please complete all fields"),
});

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
  const [confirmNewpassword, setConfirmNewpassword] = useState("");
  const [hasEmail, setHasEmail] = useState(false);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [validPassword, setValidPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  let isEmailFieldNotEmpty = "";

  const handleEmailFiel = () => {
    isEmailFieldNotEmpty ? setHasEmail(true) : setHasEmail(false),
      setIsEmailAvailable(true);
  };

  const handleCheckEmailInside = async (email: string) => {
    try {
      let emailIsInApi = await checkEmail({ email });
      if (!emailIsInApi) {
        setIsEmailAvailable(emailIsInApi);
      } else {
        setIsEmailAvailable(emailIsInApi);
      }
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

  const handleConfirmPassword = () => {
    if (!(newPassword === confirmNewpassword)) {
      <Text style={styles.errorMessage}>
        {errors.confirmNewPassword?.message}
      </Text>;
    } else {
      return setValidPassword(true);
    }
  };

  const fullChangePassword = async () => {
    if (!(errors.newPassword || errors.confirmNewPassword)) {
      await handleSubmit(handleConfirmPassword)();
    }
  };

  useEffect(() => {
    if (validPassword) {
      handleSubmit(handleChangePassword)();
    }
  }, [validPassword]);

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
          onChangeText={(text) => {
            setEmail(text);
            isEmailFieldNotEmpty = text;
            handleEmailFiel();
          }}
          keyboardType="email-address"
          editable={true}
        />

        <Controller
          control={control}
          name="newPassword"
          render={({ field: { onChange, value } }) => (
            <AuthInput
              label="New Password"
              value={value}
              autoCapitalize="none"
              onChangeText={(text) => {
                onChange(text);
                setNewPassword(text);
              }}
              secureTextEntry={true}
              editable={!isEmailAvailable && hasEmail == true ? true : false}
              error={errors.newPassword ? true : false}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmNewPassword"
          render={({ field: { onChange, value } }) => (
            <AuthInput
              label="Confirm New Password"
              value={value}
              autoCapitalize="none"
              onChangeText={(text) => {
                onChange(text);
                setConfirmNewpassword(text);
              }}
              secureTextEntry={true}
              editable={!isEmailAvailable && hasEmail == true ? true : false}
              error={errors.confirmNewPassword ? true : false}
            />
          )}
        />
        {(errors.newPassword || errors.confirmNewPassword) && (
          <Text style={styles.errorMessage}>
            {errors.newPassword?.message || errors.confirmNewPassword?.message}
          </Text>
        )}
        <View style={styles.buttons}>
          <Button
            title="SEARCH"
            onPress={() => {
              handleCheckEmailInside(email);
            }}
            disable={hasEmail ? false : true}
          />
          <Button
            title="CONFIRM"
            onPress={fullChangePassword}
            disable={!!newPassword && !!confirmNewpassword ? false : true}
          />
        </View>
      </View>
    </View>
  );
}
