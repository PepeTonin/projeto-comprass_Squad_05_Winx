import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Cart from "../screens/Cart/Cart";
import Profile from "../screens/Profile/Profile";

const Tab = createBottomTabNavigator();

export default function BottomTabRoutes() {
  return (
    <Tab.Navigator initialRouteName="HomeTab" screenOptions={{ headerShown: false }} >
      <Tab.Screen name="HomeTab" component={Home}/>
      <Tab.Screen name="CartTab" component={Cart} />
      <Tab.Screen name="ProfileTab" component={Profile} />
    </Tab.Navigator>
  );
}
