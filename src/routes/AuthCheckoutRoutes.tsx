import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import ProductDetails from "../screens/ProductDetails/ProductDetails";

const Stack = createNativeStackNavigator();

export default function AuthCheckoutRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoggedCheckout" component={} />
      <Stack.Screen name="AddShippingAddress" component={} />
      <Stack.Screen name="SuccessContinue" component={} />
      <Stack.Screen name="SuccessEnd" component={} />


    </Stack.Navigator>
  );
}
