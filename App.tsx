import { useCallback } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import InitialRoutes from "./src/routes/InitialRoutes";

// SplashScreen.preventAutoHideAsync();

export default function App() {

  // const [fontsLoaded] = useFonts({
  //   "Light-300": require("./src/assets/fonts/OpenSans-Light.ttf"),
  //   "Regular-400": require("./src/assets/fonts/OpenSans-Regular.ttf"),
  //   "Medium-500": require("./src/assets/fonts/OpenSans-Medium.ttf"),
  //   "SemiBold-600": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
  //   "Bold-700": require("./src/assets/fonts/OpenSans-Bold.ttf"),
  //   "ExtraBold-800": require("./src/assets/fonts/OpenSans-ExtraBold.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <InitialRoutes />
    </NavigationContainer>
  );
}