import { ImageBackground, Text, View } from "react-native";

import { styles } from "./style";

export default function HomeHeader() {
  return (
    <View style={styles.componentContainer}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >

      </ImageBackground>
    </View>
  );
}
