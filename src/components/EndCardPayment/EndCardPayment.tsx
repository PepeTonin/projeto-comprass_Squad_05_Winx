import { Button, Image, Text, View } from "react-native";

import Tittle from "../shared/Tittle/Tittle";
import { styles } from "./style";

interface Props {
  style?: {};
}
export default function EndCardPayment({ style }: Props) {
  return (
    <View testID={"EndCardPayment"} style={[styles.container, style]}>
      <Image source={require("../../assets/app-images/bags.png")} />
      <Tittle style={styles.title}>Success!</Tittle>
      <Text style={styles.message}>
        Your order will be delivered soon.{`\n`} Thank you for choosing our app!
      </Text>
    </View>
  );
}
