import { Image, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./style";
import React, { useState } from "react";
import { colors } from "../../styles/globalStyles";
import { Pressable } from "react-native";

interface Props {
  img: string;
  name: string;
  price: string;
  amount: number;
  style?: {};
}
export default function Card({ img, name, price, amount, style }: Props) {
  const [amountCard, setAmountCard] = useState(amount);

  function onPressMinus() {
    if (amountCard === 0) {
      return;
    }
    setAmountCard((cur) => cur - 1);
  }

  function onPressPlus() {
    setAmountCard((cur) => cur + 1);
  }
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: img }} style={styles.img} />
      <View style={styles.containerInformation}>
        <View style={styles.innerContainerTop}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.iconContainer}>
            <Image source={require("../../assets/app-images/TrashIcon.png")} />
          </View>
        </View>
        <View style={styles.innerContainerDown}>
          <View style={styles.amounContainer}>
            <Pressable onPress={onPressMinus} style={styles.amountIcon}>
              <Entypo name="minus" size={24} color={colors.white} />
            </Pressable>
            <Text style={styles.amountText}>{amountCard}</Text>
            <Pressable onPress={onPressPlus} style={styles.amountIcon}>
              <Entypo name="plus" size={24} color={colors.white} />
            </Pressable>
          </View>
          <Text style={styles.price}>{price} R$</Text>
        </View>
      </View>
      <Text></Text>
    </View>
  );
}
