import { FlatList, Pressable, Text, View, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import { TokenContext } from "../../contexts/authJWTContext";
import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BackButton from "../../components/shared/BackButton/BackButton";
import Tittle from "../../components/shared/Tittle/Tittle";
import Button from "../../components/shared/Button/Button";

type LoggedCheckoutStackParamList = {
  LoggedCheckout: any;
  AddShippingAddress: any;
  SuccessContinue: any;
  SuccessEnd: any;
};

type LoggedCheckoutScreenNavigationProp =
  NativeStackScreenProps<LoggedCheckoutStackParamList>;

enum typeofPayment {
  card,
  pix,
  bankslip,
}
let paymentMethod: typeofPayment;
paymentMethod = typeofPayment.bankslip;
export default function LoggedCheckout({
  navigation,
  route,
}: LoggedCheckoutScreenNavigationProp) {
  const address = route.params;

  const urlImagesShipping: string[] = [
    "https://www.logotipo.pt/wp-content/uploads/2009/10/Artigo-Fedex.jpg",
    "https://t.ctcdn.com.br/OO4DFvvWLOL2Et-eslajieTnr9g=/1200x675/smart/i535351.jpeg",
    "https://fastcashenvios.com.br/assets/images/versions-1.png",
    "https://www.nopcommerce.com/images/thumbs/0014297_shipping-plugin-for-usps.jpeg",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={navigation.goBack} color="black" />
      </View>
      <View style={styles.header}>
        <Tittle style={styles.textTitle}>Checkout</Tittle>
      </View>

      <Text style={styles.textTitleButton}>Shipping address</Text>
      <View style={styles.buttonBoxes}>
        <Pressable
          onPress={() => {
            navigation.navigate("AddShippingAddress");
          }}
          style={styles.box}
        >
          <View>
            <Text style={styles.textButton}>Change</Text>
          </View>
          <View>
            <Text style={styles.textMiddleButton}>Click to add an address</Text>
          </View>
        </Pressable>
      </View>

      <Text style={styles.textTitleButton}>Payment Method</Text>

      <Text style={styles.textTitleButton}>Delivery method</Text>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={true}
          horizontal
          data={urlImagesShipping}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />
      </View>

      <Button
        title="SUBMIT ORDER"
        onPress={() => {
          navigation.navigate("SuccessContinue", paymentMethod);
        }}
      />
    </View>
  );
}
