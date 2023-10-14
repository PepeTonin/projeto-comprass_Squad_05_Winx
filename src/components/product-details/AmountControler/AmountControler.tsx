import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";

export default function AmountControler() {
  const [amount, setAmount] = useState(0);

  function onMinusPress() {
    if (amount === 0) {
      return;
    }
    setAmount((cur) => cur - 1);
  }

  function onPlusPress() {
    setAmount((cur) => cur + 1);
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity onPress={onMinusPress} style={styles.minusContainer}>
          <Entypo name="minus" size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
        <TouchableOpacity onPress={onPlusPress} style={styles.plusContainer}>
          <Entypo name="plus" size={32} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
