import { useState, useEffect } from "react";
import { Pressable, View, TextInput, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";
import { fetchProductsFilteredByTitle } from "../../../util/apiRequests";
import SearchButtonProductCard from "../SearchButtonProductCard/SearchButtonProductCard";

interface ItemData {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

export default function SearchButton() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [callGetProducts, setCallGetProducts] = useState<boolean>(false);
  const [data, setData] = useState<ItemData[]>([]);

  async function getProductsByTitle() {
    try {
      const response = await fetchProductsFilteredByTitle(text);
      setData(response);
    } catch (error) {
      // TO DO: HANDLE THIS ERROR
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    if (text.length >= 3) {
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

  const handlePress = () => {
    setIsClicked((cur) => !cur);
    setText("");
  };

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
      {callGetProducts && data.length > 0 && (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <SearchButtonProductCard
                imageUrl={item.images}
                productName={item.title}
                productDescription={item.description}
                productPrice={item.price}
                dataLength={data.length}
                index={index}
              />
            )}
          />
        </View>
      )}
    </Pressable>
  );
}
