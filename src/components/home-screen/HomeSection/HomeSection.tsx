import { useState, useEffect, memo } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";

import { styles } from "./style";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProductsByCategoryId } from "../../../util/apiRequests";
import ErrorMessage from "../../shared/ErrorMessage/ErrorMessage";
import { colors } from "../../../styles/globalStyles";

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

function HomeSection(props: HomeSectionProps) {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [initializedWithError, setInitializedWithError] =
    useState<boolean>(false);
  const [data, setData] = useState<ItemData[]>([]);

  async function getProductsFilteredByCategory(categoryId: number) {
    try {
      const response = await fetchProductsByCategoryId(categoryId.toString());
      setData(response);
      setInitializedWithError(false);
      setInitializing(false);
    } catch (error) {
      setInitializedWithError(true);
    }
  }

  useEffect(() => {
    setInitializing(true);
    getProductsFilteredByCategory(props.categoryId);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryName}>{props.categoryName}</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      {initializing && <ActivityIndicator color={colors.red_500} />}
      {!initializing && !initializedWithError && (
        <FlatList
          initialNumToRender={5}
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
      )}
      {!initializing && initializedWithError && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ErrorMessage />
        </View>
      )}
    </View>
  );
}

export default memo(HomeSection);
