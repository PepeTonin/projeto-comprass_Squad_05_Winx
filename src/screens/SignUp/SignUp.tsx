import { Text, View, Image, ActivityIndicator } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import AuthInput from "../../components/shared/Input/Input";
import { useEffect, useState } from "react";
import Button from "../../components/shared/Button/Button";
import Tittle from "../../components/shared/Tittle/Tittle";
import { signUp } from "../../util/apiUsers";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackButton from "../../components/shared/BackButton/BackButton";

const schema = yup.object({
  name: yup
    .string()
    .required("Your name is not valid, use only letters and numbers"),
  email: yup.string().required("").email("Your email is not valid"),
  password: yup
    .string()
    .min(6, "Your password must be longer than 6 digits.")
    .required("Please complete all fields"),
  confirmPassword: yup
    .string()
    .min(6, "Your password must be longer than 6 digits.")
    .oneOf(
      [yup.ref("password")],
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

export default function SignUp({ navigation }: NavigationProp) {
  const [loading, setLoading] = useState(false);

  const [validPassword, setValidPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleConfirmPassword = (data: any) => {
    if (!(data.password === data.confirmPassword)) {
      <Text style={styles.errorMessage}>
        {errors.confirmPassword?.message}
      </Text>;
    } else {
      return setValidPassword(true);
    }
  };

  const handleSignUp = async (data: any) => {
    setLoading(true);
    try {
      await signUp(data);
      navigation.navigate("Login");
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  const fullSignUp = async () => {
    if (
      !(
        errors.name ||
        errors.email ||
        errors.password ||
        errors.confirmPassword
      )
    ) {
      await handleSubmit(handleConfirmPassword)();
    }
  };

  useEffect(() => {
    if (validPassword) {
      handleSubmit(handleSignUp)();
    }
  }, [validPassword]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageCompass}
        source={require("../../assets/app-images/compass.png")}
      />

      <View style={styles.back}>
        <BackButton onPress={navigation.goBack} color="white" />
      </View>

      <View style={styles.texts}>
        <Tittle style={styles.textTitle} weight="700">
          Sign Up
        </Tittle>
        <Text style={styles.text}>
          Choose a really cool name that only contains {"\n"}spaces as special
          characters. Oh, and your {"\n"}password must have more than 4 digits!
          :)
        </Text>
      </View>

      <View style={styles.forms}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <AuthInput
              label="Name"
              value={value}
              onChangeText={onChange}
              keyboardType="default"
              editable={true}
              error={errors.name ? true : false}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <AuthInput
              label="Email"
              value={value}
              autoCapitalize="none"
              onChangeText={onChange}
              keyboardType="email-address"
              editable={true}
              error={errors.email ? true : false}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <AuthInput
              label="Password"
              value={value}
              autoCapitalize="none"
              onChangeText={onChange}
              secureTextEntry={true}
              editable={true}
              error={errors.password ? true : false}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <AuthInput
              label="Confirm Password"
              value={value}
              autoCapitalize="none"
              onChangeText={onChange}
              secureTextEntry={true}
              editable={true}
              error={errors.confirmPassword ? true : false}
            />
          )}
        />

        {(errors.name ||
          errors.email ||
          errors.password ||
          errors.confirmPassword) && (
          <Text style={styles.errorMessage}>
            {errors.name?.message ||
              errors.email?.message ||
              errors.password?.message ||
              errors.confirmPassword?.message}
          </Text>
        )}

        <View style={styles.buttons}>
          {loading ? (
            <Button
              content={
                loading ? (
                  <ActivityIndicator size="large" color="#ffffff" />
                ) : null
              }
            />
          ) : (
            <>
              <Button title="SIGN UP" onPress={fullSignUp} />
            </>
          )}
        </View>
      </View>
    </View>
  );
}
