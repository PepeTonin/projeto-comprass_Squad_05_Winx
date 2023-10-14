import { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

import { styles } from "./style";

const deviceWidth = Dimensions.get("window").width;

type OnScrollEventHandler = (
  event: NativeSyntheticEvent<NativeScrollEvent>
) => void;

interface ProductInfosProps {
  images: string[] | undefined;
  productName: string | undefined;
  description: string | undefined;
  price: number | undefined;
  categoryName: string | undefined;
}

export default function ProductInfos(props: ProductInfosProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const imagesLength = props.images?.length;

  function carouselScrollEndHandler(
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / deviceWidth);
    setActiveIndex(slide);
  }

  function decimalToTwoDecimalPlacesString(number: number) {
    return number.toFixed(2).toString().replace(".", ",");
  }

  return (
    <View style={styles.container}>
      <View style={styles.carousel}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={carouselScrollEndHandler}
          pagingEnabled
          horizontal
          data={props.images}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />
        <View
          style={[
            styles.pagination,
            typeof imagesLength !== "undefined" && {
              position: "absolute",
              top: 410,
              width: deviceWidth / imagesLength,
              left: (activeIndex * deviceWidth) / imagesLength,
            },
          ]}
        ></View>
      </View>

      <View style={styles.infosContainer}>
        <View style={styles.titleAndCategoryContainer}>
          <Text style={styles.productName}>{props.productName}</Text>
          <Text style={styles.categoryName}>{props.categoryName}</Text>
        </View>
        <Text style={styles.price}>
          {typeof props.price === "number"
            ? decimalToTwoDecimalPlacesString(props.price) + " R$"
            : null}
        </Text>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}
