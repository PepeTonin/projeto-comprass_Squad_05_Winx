import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";

import { styles } from "./style";
import { colors } from "../../styles/globalStyles";

export default function Splash() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/app-images/compass.png")}
        style={styles.imgBackground}
        resizeMode="contain"
      >
        <Image source={require("../../assets/app-images/logo.png")} />
        <ActivityIndicator size={"large"} color={colors.red_500} />
      </ImageBackground>
    </View>
  );
}
