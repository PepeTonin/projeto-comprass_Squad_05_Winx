import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import { Image } from "react-native";
import Tittle from "../shared/Tittle/Tittle";

interface Props {
  style?: {};
}

export default function EndBankSlipPayment({ style }: Props) {
  return (
    <View testID="EndBankSlipPayment" style={[styles.container, style]}>
      <Image source={require("../../assets/app-images/bags.png")} />
      <Tittle style={styles.title}>Success!</Tittle>
      <Text style={styles.message}>
        Pay the invoice by 02/10/2023 and {`\n`} then follow the steps sent by
        email.
      </Text>
    </View>
  );
}
