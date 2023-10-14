import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";

import { styles } from "./style";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProductsByCategoryId } from "../../../util/apiRequests";

interface HomeSectionProps {
  onCardPress: (id: number) => void;
  categoryId: number;
  categoryName: string;
}

interface ItemData {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function HomeSection(props: HomeSectionProps) {
  const [data, setData] = useState<ItemData[]>([]);

  async function getProductsFilteredByCategory(categoryId: number) {
    try {
      const response = await fetchProductsByCategoryId(categoryId.toString());
      setData(response);
    } catch (error) {
      // TO DO: HANDLE THIS ERROR
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    getProductsFilteredByCategory(props.categoryId);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryName}>{props.categoryName}</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            productId={item.id}
            productDescription={item.description}
            productName={item.title}
            productPrice={item.price}
            onCardPress={props.onCardPress}
            imageUrl={item.images}
          />
        )}
      />
    </View>
  );
}
