import { View } from "react-native";
import { TokenContext } from "../../contexts/authJWTContext";
import { useContext, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AuthProfile from "../../components/AuthProfile/AuthProfile";
import UnAuthProfile from "../../components/UnauthProfile/UnauthProfile";
import Login from "../Login/Login";
import VerifyAuthForCheckout from "../../routes/checkout-routes/VerifyAuthForCheckout";

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

export default function Profile({ navigation }: NavigationProp) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const authContext = useContext(TokenContext);

  useEffect(() => {
    if (authContext.tokenReceived) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [authContext.tokenReceived]);

  const onLoginPress = () => {
    navigation.navigate("CartRoutes", { screen: "VerifyAuthForCheckout" });
  };

  return (
    <View>
      {isLoggedIn ? (
        <AuthProfile />
      ) : (
        <UnAuthProfile onLoginPress={onLoginPress} />
      )}
    </View>
  );
}
