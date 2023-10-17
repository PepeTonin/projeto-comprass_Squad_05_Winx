import { useState, memo, useEffect } from "react";
import { Text, View, Pressable, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";
import { useCartStore } from "../../../store/cart";

interface ProductCardProps {
  imageUrl: string[];
  onCardPress: (id: number) => void;
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
}

function ProductCard(props: ProductCardProps) {
  const [amount, setAmount] = useState<number>(0);

  const { updateTotalAmountOfAnItem } = useCartStore();

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

  useEffect(() => {
    updateTotalAmountOfAnItem(props.productId, amount);
  }, [amount]);

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
      <Pressable
        style={styles.imageContainer}
        onPress={() => props.onCardPress(props.productId)}
      >
        <Image style={styles.image} source={{ uri: props.imageUrl[0] }} />
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

export default memo(ProductCard);
