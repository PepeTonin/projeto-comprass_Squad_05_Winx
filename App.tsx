import { useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import InitialRoutes from "./src/routes/InitialRoutes";
import TokenProvider from "./src/contexts/authJWTContext";
import CartContextProvider from "./src/contexts/cartContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Light-300": require("./src/assets/fonts/OpenSans-Light.ttf"),
    "Regular-400": require("./src/assets/fonts/OpenSans-Regular.ttf"),
    "Medium-500": require("./src/assets/fonts/OpenSans-Medium.ttf"),
    "SemiBold-600": require("./src/assets/fonts/OpenSans-SemiBold.ttf"),
    "Bold-700": require("./src/assets/fonts/OpenSans-Bold.ttf"),
    "ExtraBold-800": require("./src/assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.rootAppContainer}>
      <NavigationContainer>
        <TokenProvider>
          <CartContextProvider>
            <InitialRoutes />
          </CartContextProvider>
        </TokenProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootAppContainer: {
    flex: 1,
  },
});
