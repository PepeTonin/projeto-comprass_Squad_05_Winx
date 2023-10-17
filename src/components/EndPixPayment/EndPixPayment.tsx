import { Image, Text, View } from "react-native";

import { styles } from "./style";
import Tittle from "../shared/Tittle/Tittle";

interface Props {
  style?: {};
}

export default function EndPixPayment({ style }: Props) {
  return (
    <View testID={"EndPixPayment"} style={[styles.container, style]}>
      <Image source={require("../../assets/app-images/qrcode.png")} />
      <Tittle style={styles.title}>Success!</Tittle>
      <Text style={styles.message}>
        Pay your pix using the QR code above and {`\n`} then follow the steps
        sent by email.
      </Text>
    </View>
  );
}
