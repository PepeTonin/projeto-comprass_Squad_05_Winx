import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart/Cart";
import NonAuthCheckoutRoutes from "./NonAuthCheckoutRoutes";
import AuthCheckoutRoutes from "./AuthCheckoutRoutes";

const Stack = createNativeStackNavigator();

export default function CartRoutes() {
  let isAuthenticated = false;
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      {isAuthenticated ? (
        <Stack.Screen
          name="AuthCheckoutRoutes"
          component={AuthCheckoutRoutes}
        />
      ) : (
        <Stack.Screen
          name="NonAuthCheckoutRoutes"
          component={NonAuthCheckoutRoutes}
        />
      )}
    </Stack.Navigator>
  );
}
