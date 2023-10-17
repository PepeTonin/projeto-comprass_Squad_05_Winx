import { Text, View, Image } from "react-native";

import { styles } from "./style";

export default function EmptyCartAlert() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/app-images/empty-cart.png")}
        />
        <Text style={styles.text}>Your cart is so empty and abandoned...</Text>
      </View>
    </View>
  );
}
