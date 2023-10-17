import { Image, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./style";
import React from "react";
import { colors } from "../../styles/globalStyles";

interface Props {
  img: string;
  name: string;
  price: string;
  amount: number;
  style?: {};
}
export default function Card({ img, name, price, amount, style }: Props) {
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
            <View style={styles.amountIcon}>
              <Entypo name="minus" size={24} color={colors.white} />
            </View>
            <Text style={styles.amountText}>{amount}</Text>
            <View style={styles.amountIcon}>
              <Entypo name="plus" size={24} color={colors.white} />
            </View>
          </View>
          <Text style={styles.price}>{price} R$</Text>
        </View>
      </View>
      <Text></Text>
    </View>
  );
}
