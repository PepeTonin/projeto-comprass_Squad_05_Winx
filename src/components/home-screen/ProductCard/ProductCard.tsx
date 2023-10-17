import { useState, memo, useContext, useEffect } from "react";
import { Text, View, Pressable, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";
import { CartContext } from "../../../contexts/cartContext";

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
  const cartContext = useContext(CartContext);

  function onMinusPress() {
    if (amount === 0) {
      return;
    } else if (amount === 1) {
      cartContext.deleteItem(props.productId);
    } else {
      cartContext.removeOneFromExistingItem(props.productId);
    }
    setAmount((cur) => cur - 1);
  }

  function onPlusPress() {
    if (amount === 0) {
      cartContext.addNewItem({
        id: props.productId,
        productName: props.productName,
        productUnitPrice: props.productPrice,
        images: props.imageUrl,
      });
    } else {
      cartContext.addOneToExistingItem(props.productId);
    }
    setAmount((cur) => cur + 1);
  }

  function numberToTwoDecimalPlacesString(number: number) {
    return number.toFixed(2).toString().replace(".", ",");
  }

  useEffect(() => {
    setAmount(cartContext.getItemAmount(props.productId));
  }, [cartContext.items]);

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
