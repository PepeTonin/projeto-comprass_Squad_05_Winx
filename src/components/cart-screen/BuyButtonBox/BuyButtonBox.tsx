import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { styles } from "./style";
import Button from "../../shared/Button/Button";
import { CartContext } from "../../../contexts/cartContext";

interface BuyButtonProps {
  onBuyPress: () => void;
  isCartEmpty: boolean;
}

export default function BuyButtonBox(props: BuyButtonProps) {
  const [totaAmount, setTotalAmount] = useState<number>(0);

  const cartContext = useContext(CartContext);

  useEffect(() => {
    setTotalAmount(cartContext.getTotalPrice());
  }, [cartContext.items]);

  function numberToTwoDecimalPlacesString(price: number) {
    return price.toFixed(2).toString().replace(".", ",");
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.totalAmountText}>Total amount:</Text>
        <Text style={styles.priceAmountText}>
          {numberToTwoDecimalPlacesString(totaAmount) + " R$"}
        </Text>
      </View>
      <Button
        title="BUY"
        onPress={props.onBuyPress}
        disable={props.isCartEmpty}
        style={styles.button}
      />
    </View>
  );
}
