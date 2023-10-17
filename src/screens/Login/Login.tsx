import { ActivityIndicator, Image, Pressable, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import Button from "../../components/shared/Button/Button";
import AuthInput from "../../components/shared/Input/Input";
import React, { useContext, useState } from "react";
import { signIn } from "../../util/apiUsers";
import { TokenContext } from "../../contexts/authJWTContext";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

const schema = yup.object({
  email: yup.string().required("").email("Your email or password is incorrect"),
  password: yup
    .string()
    .min(6, "Your password must be longer than 6 digits.")
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

export default function Login({ navigation }: NavigationProp) {
  const [loading, setLoading] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const { receiveToken } = useContext(TokenContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (e) {}
  };

  const handleSignIn = async (data: any) => {
    setLoading(true);
    try {
      const token = await signIn(data);
      storeData(token);
      receiveToken(token);
      if (token) {
        setSignInSuccess(true);
      }
    } catch (error: any) {
      alert("Erro durante o registro" + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/app-images/logo.png")}
      />

      <Image
        style={styles.imageCompass}
        source={require("../../assets/app-images/compass.png")}
      />
      <View style={styles.forms}>
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
        {(errors.password || errors.email) && (
          <Text style={styles.errorMessage}>
            {errors.password?.message || errors.email?.message}
          </Text>
        )}

        <View style={styles.buttons}>
          {loading ? (
            <Button
              style={styles.button}
              content={
                loading ? (
                  <ActivityIndicator size="large" color="#ffffff" />
                ) : null
              }
            />
          ) : (
            <>
              <Button
                style={styles.button}
                title="LOGIN"
                onPress={() => {
                  if (errors.email || errors.password) {
                    alert("erro");
                  } else {
                    handleSubmit(handleSignIn)();
                    if (signInSuccess) {
                      navigation.navigate("BottomTabRoutes");
                    }
                  }
                }}
              />
              <Pressable
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text style={styles.textButton}>
                  Not have an account yet?{"\n"} Sign up
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("ForgotPassword");
                }}
              >
                <Text style={styles.textButton}>I forgot my password</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("BottomTabRoutes");
                }}
              >
                <Text style={styles.textButton}>I don't want to register</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
}