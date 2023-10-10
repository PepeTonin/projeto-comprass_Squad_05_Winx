import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotLoggedCheckout from "../../screens/NotLoggedCheckout/NotLoggedCheckout";
import Login from "../../screens/Login/Login";
import SignUp from "../../screens/SignUp/SignUp";
import ForgotPassword from "../../screens/ForgotPassword/ForgotPassword";
import AuthCheckoutRoutes from "./AuthCheckoutRoutes";

const Stack = createNativeStackNavigator();

export default function NonAuthCheckoutRoutes() {
  let isAuthenticated = false;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NotLoggedCheckout" component={NotLoggedCheckout} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      {isAuthenticated && (
        <Stack.Screen
          name="AuthCheckoutRoutes"
          component={AuthCheckoutRoutes}
        />
      )}
    </Stack.Navigator>
  );
}
