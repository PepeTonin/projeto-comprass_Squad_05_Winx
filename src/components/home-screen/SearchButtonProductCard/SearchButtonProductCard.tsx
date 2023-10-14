import { Text, View, Image, Pressable } from "react-native";

import { styles } from "./style";

interface SearchButtonProductCardProps {
  productId: number;
  imageUrl: string[];
  productName: string;
  productDescription: string;
  productPrice: number;
  dataLength: number;
  index: number;
  onCardPress: (id: number) => void;
}

export default function SearchButtonProductCard(
  props: SearchButtonProductCardProps
) {
  function numberToTwoDecimalPlacesString(number: number) {
    return number.toFixed(2).toString().replace(".", ",");
  }

  return (
    <Pressable
      onPress={() => props.onCardPress(props.productId)}
      style={[
        styles.container,
        props.dataLength === 3 && props.index === 1 && styles.middleContainer,
        props.dataLength === 2 &&
          props.index === 0 &&
          styles.firstContainerWhenThereAreJustTwoProducts,
      ]}
    >
      <View>
        <Image style={styles.image} source={{ uri: props.imageUrl[0] }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{props.productName}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {props.productDescription}
        </Text>
      </View>
      <View>
        <Text style={styles.price}>
          {numberToTwoDecimalPlacesString(props.productPrice)} R$
        </Text>
      </View>
    </Pressable>
  );
}
