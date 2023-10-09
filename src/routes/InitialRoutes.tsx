import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Cart from '../screens/Cart/Cart';
import Profile from '../screens/Profile/Profile';
import HomeRoutes from './HomeRoutes';

const Tab = createBottomTabNavigator();

export default function InitialRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeRoutes" component={HomeRoutes} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}