import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/Cart/Cart';

const Stack = createNativeStackNavigator();

export default function CheckoutRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={} />

    </Stack.Navigator>
  );
}