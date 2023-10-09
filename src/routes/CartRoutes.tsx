import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import ProductDetails from '../screens/ProductDetails/ProductDetails';

const Stack = createNativeStackNavigator();

export default function CartRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={} />

    </Stack.Navigator>
  );
}