import { Text, View } from "react-native";

import { styles } from "./style";
import Button from "../../components/shared/Button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenContext } from "../../contexts/authJWTContext";
import { useContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

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
  const { deleteToken } = useContext(TokenContext);

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
      console.log("Token removido com sucesso.");
    } catch (e) {
      console.log("Erro ao remover o token: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Logout"
        onPress={() => {
          removeToken();
          deleteToken();
          navigation.navigate("CartRoutes");
        }}
      />
    </View>
  );
}
