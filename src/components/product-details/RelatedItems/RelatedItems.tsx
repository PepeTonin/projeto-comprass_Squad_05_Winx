import { FlatList, Text, View, Image, Pressable } from "react-native";
import { useState, useEffect } from "react";

import { styles } from "./style";
import { fetchLimitedAmountOfProductsFilteredByCategory } from "../../../util/apiRequests";
import ProductDetails from "../../../screens/ProductDetails/ProductDetails";

interface RelatedItemsProps {
  categoryId: number | undefined;
  onRelatedItemCardPress: (id: number) => void;
}

interface ItemData {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
  };
}

export default function RelatedItems(props: RelatedItemsProps) {
  const [data, setData] = useState<ItemData[]>([]);

  const AMOUNT_OF_RELATED_PRODUCTS_LISTED = 12;

  async function getLimitedAmountOfProductsFilteredByCategory(
    categoryId: number
  ) {
    try {
      const response = await fetchLimitedAmountOfProductsFilteredByCategory(
        categoryId,
        AMOUNT_OF_RELATED_PRODUCTS_LISTED
      );
      setData(response);
    } catch (error) {
      // TO DO: HANDLE THIS ERROR
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    if (typeof props.categoryId === "number") {
      getLimitedAmountOfProductsFilteredByCategory(props.categoryId);
    }
  }, []);

  function decimalToTwoDecimalPlacesString(number: number) {
    return number.toFixed(2).toString().replace(".", ",");
  }

  interface RenderItemProps {
    imageUrl: string;
    categoryName: string;
    productName: string;
    price: number;
    productId: number;
  }

  function RenderItem({
    imageUrl,
    categoryName,
    productName,
    price,
    productId,
  }: RenderItemProps) {
    return (
      <Pressable
        style={styles.relatedProductContainer}
        onPress={() => props.onRelatedItemCardPress(productId)}
      >
        <Image style={styles.relatedItemsImage} source={{ uri: imageUrl }} />
        <Text style={styles.relatedItemsCategoryName}>{categoryName}</Text>
        <Text style={styles.relatedItemsProductName}>{productName}</Text>
        <Text style={styles.relatedItemsPrice}>
          {decimalToTwoDecimalPlacesString(price)} R$
        </Text>
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>You can also like this</Text>
        <Text style={styles.amountItems}>
          {AMOUNT_OF_RELATED_PRODUCTS_LISTED} items
        </Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RenderItem
            imageUrl={item.images[0]}
            categoryName={item.category.name}
            productName={item.title}
            price={item.price}
            productId={item.id}
          />
        )}
      />
    </View>
  );
}
