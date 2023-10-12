import { ImageBackground, Text, View, Image } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";

export default function HomeHeader() {
  return (
    <ImageBackground
      source={require("../../../assets/app-images/background-image-header.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >

      <Image style={styles.logo} source={require("../../../assets/app-images/logo.png")} />

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Here you always wins!</Text>
        <FontAwesome5 name="shopping-cart" size={40} color={colors.orange_900} />
      </View>
      
    </ImageBackground>
  );
}
