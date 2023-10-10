import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart/Cart";
import VerifyAuthForCheckout from "./checkout-routes/VerifyAuthForCheckout";

const Stack = createNativeStackNavigator();

export default function CartRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="VerifyAuthForCheckout" component={VerifyAuthForCheckout} />
    </Stack.Navigator>
  );
}
