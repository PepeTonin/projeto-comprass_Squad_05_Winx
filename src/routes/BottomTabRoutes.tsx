import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

import Home from "../screens/Home/Home";
import Cart from "../screens/Cart/Cart";
import Profile from "../screens/Profile/Profile";
import { colors, fontFamilies, fontSizes } from "../styles/globalStyles";

const Tab = createBottomTabNavigator();

const iconsSize = 32;

export default function BottomTabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarActiveTintColor: colors.red_500,
          tabBarInactiveTintColor: colors.gray_500,
          tabBarLabelStyle: {
            fontFamily: fontFamilies.regularOpenSans,
            fontSize: fontSizes.xxxs,
          },
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <MaterialCommunityIcons
                name="home"
                size={iconsSize}
                color={colors.red_500}
              />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={iconsSize}
                color={colors.gray_500}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarActiveTintColor: colors.red_500,
          tabBarInactiveTintColor: colors.gray_500,
          tabBarLabelStyle: {
            fontFamily: fontFamilies.regularOpenSans,
            fontSize: fontSizes.xxxs,
          },
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons name="cart" size={iconsSize} color={colors.red_500} />
            ) : (
              <Ionicons name="cart-outline" size={iconsSize} color={colors.gray_500} />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarActiveTintColor: colors.red_500,
          tabBarInactiveTintColor: colors.gray_500,
          tabBarLabelStyle: {
            fontFamily: fontFamilies.regularOpenSans,
            fontSize: fontSizes.xxxs,
          },
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesome5 name="user-alt" size={iconsSize-5} color={colors.red_500} />
            ) : (
              <FontAwesome5 name="user" size={iconsSize-5} color={colors.gray_500} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
