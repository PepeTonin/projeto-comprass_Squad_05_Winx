import { useContext, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";
import { CartContext } from "../../../contexts/cartContext";

interface AmountControlerProps {
  productId: number;
  productName: string | undefined;
  productPrice: number | undefined;
  images: string[] | undefined;
}

export default function AmountControler(props: AmountControlerProps) {
  const [amount, setAmount] = useState(0);

  const cartContext = useContext(CartContext);

  useEffect(() => {
    setAmount(cartContext.getItemAmount(props.productId));
  }, []);

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
    if (
      amount === 0 &&
      props.productName !== undefined &&
      props.productPrice !== undefined &&
      props.images !== undefined
    ) {
      cartContext.addNewItem({
        id: props.productId,
        productName: props.productName,
        productUnitPrice: props.productPrice,
        images: props.images,
      });
    } else {
      cartContext.addOneToExistingItem(props.productId);
    }
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
