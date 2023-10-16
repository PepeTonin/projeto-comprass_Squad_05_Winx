import { useState, useEffect } from "react";
import {
  Pressable,
  View,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";
import { fetchProductsFilteredByTitle } from "../../../util/apiRequests";
import SearchButtonProductCard from "../SearchButtonProductCard/SearchButtonProductCard";

interface SearchButtonProps {
  onCardPress: (id: number) => void;
}

interface ItemData {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function SearchButton(props: SearchButtonProps) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [callGetProducts, setCallGetProducts] = useState<boolean>(false);
  const [data, setData] = useState<ItemData[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  async function getProductsByTitle() {
    try {
      const response = await fetchProductsFilteredByTitle(text);
      setData(response);
      setIsFetching(false);
    } catch (error) {
      setIsFetching;
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    if (text.length >= 3) {
      setIsFetching(true);
      setCallGetProducts(true);
    } else {
      setCallGetProducts(false);
      setData([]);
    }
  }, [text]);

  useEffect(() => {
    if (callGetProducts) {
      getProductsByTitle();
    }
  }, [text]);

  function handlePress() {
    setIsClicked((cur) => !cur);
    setText("");
  }

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Ionicons name="search" size={22} color={colors.white} />
      {isClicked && (
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Enter the product name"
          />
          <View></View>
        </View>
      )}
      {callGetProducts && data.length > 0 && isFetching && (
        <View style={styles.listContainer}>
          <ActivityIndicator size={"large"} color={colors.red_500} />
        </View>
      )}
      {callGetProducts && data.length > 0 && !isFetching && (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <SearchButtonProductCard
                onCardPress={props.onCardPress}
                imageUrl={item.images}
                productName={item.title}
                productDescription={item.description}
                productPrice={item.price}
                dataLength={data.length}
                index={index}
                productId={item.id}
              />
            )}
          />
        </View>
      )}
      {callGetProducts && data.length === 0 && !isFetching && (
        <View style={[styles.listContainer, styles.emptyListContainer]}>
          <Text style={styles.emptyListText}>No products found</Text>
        </View>
      )}
    </Pressable>
  );
}
