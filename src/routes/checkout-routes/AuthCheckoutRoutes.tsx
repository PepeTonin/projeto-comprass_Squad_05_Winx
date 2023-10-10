import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoggedCheckout from "../../screens/LoggedCheckout/LoggedCheckout";
import AddShippingAddress from "../../screens/AddShippingAddress/AddShippingAddress";
import SuccessContinue from "../../screens/SuccessContinue/SuccessContinue";
import SuccessEnd from "../../screens/SuccessEnd/SuccessEnd";

const Stack = createNativeStackNavigator();

export default function AuthCheckoutRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoggedCheckout" component={LoggedCheckout} />
      <Stack.Screen name="AddShippingAddress" component={AddShippingAddress} />
      <Stack.Screen name="SuccessContinue" component={SuccessContinue} />
      <Stack.Screen name="SuccessEnd" component={SuccessEnd} />
    </Stack.Navigator>
  );
}
