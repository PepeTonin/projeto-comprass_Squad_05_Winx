import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabRoutes from "./BottomTabRoutes";
import HomeRoutes from "./HomeRoutes";
import CartRoutes from "./CartRoutes";

const Stack = createNativeStackNavigator();

export default function InitialRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabRoutes" component={BottomTabRoutes} />
      <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
      <Stack.Screen name="CartRoutes" component={CartRoutes} />
    </Stack.Navigator>
  );
}
