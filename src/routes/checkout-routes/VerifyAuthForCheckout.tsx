import React, { useContext, useEffect } from "react";
import NonAuthCheckoutRoutes from "./NonAuthCheckoutRoutes";
import AuthCheckoutRoutes from "./AuthCheckoutRoutes";
import { TokenContext } from "../../contexts/authJWTContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function VerifyAuthForCheckout() {
  const { tokenReceived } = useContext(TokenContext);

  const { receiveToken } = useContext(TokenContext);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        receiveToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);
  let isAuthenticated = tokenReceived;

  return (
    <>
      {isAuthenticated && <AuthCheckoutRoutes />}
      {!isAuthenticated && <NonAuthCheckoutRoutes />}
    </>
  );
}
