import { useState } from "react";
import { Text, View, Pressable, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../styles/globalStyles";

interface ProductCardProps {
  imageUrl: string;
  onCardPress: () => void;
  productName: string;
  productDescription: string;
  productPrice: number;
}

export default function ProductCard(props: ProductCardProps) {
  const [amount, setAmount] = useState<number>(0);

  function onMinusPress() {
    if (amount === 0) {
      return;
    }
    setAmount((cur) => cur - 1);
  }

  function onPlusPress() {
    setAmount((cur) => cur + 1);
  }

  function numberToTwoDecimalPlacesString(number: number) {
    return number.toFixed(2).toString().replace(".", ",");
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.topButtonsContainer}>
        <Pressable style={styles.minusContainer} onPress={onMinusPress}>
          <Entypo name="minus" size={24} color={colors.white} />
        </Pressable>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
        <Pressable style={styles.plusContainer} onPress={onPlusPress}>
          <Entypo name="plus" size={24} color={colors.white} />
        </Pressable>
      </View>
      <Pressable style={styles.imageContainer} onPress={props.onCardPress}>
        <Image style={styles.image} source={{ uri: props.imageUrl }} />
      </Pressable>
      <View style={styles.bottomContainer}>
        <Text style={styles.productName}>{props.productName}</Text>
        <Text style={styles.productDescription} numberOfLines={1}>
          {props.productDescription}
        </Text>
        <Text style={styles.productPrice}>
          {numberToTwoDecimalPlacesString(props.productPrice)} R$
        </Text>
      </View>
    </View>
  );
}
