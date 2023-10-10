import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import ProductDetails from "../screens/ProductDetails/ProductDetails";

const Stack = createNativeStackNavigator();

export default function HomeRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}
