import { FlatList, Pressable, Text, View, Image } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

import BackButton from "../../components/shared/BackButton/BackButton";
import Tittle from "../../components/shared/Tittle/Tittle";
import Button from "../../components/shared/Button/Button";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";

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
export default function LoggedCheckout({
  navigation,
  route,
}: LoggedCheckoutScreenNavigationProp) {
  const address = route.params;
  const [paymentMethod, setPaymentMethod] = useState<typeofPayment>(
    typeofPayment.bankslip
  );

  const cartContext = useContext(CartContext);

  const urlImagesShipping: string[] = [
    "https://www.logotipo.pt/wp-content/uploads/2009/10/Artigo-Fedex.jpg",
    "https://t.ctcdn.com.br/OO4DFvvWLOL2Et-eslajieTnr9g=/1200x675/smart/i535351.jpeg",
    "https://fastcashenvios.com.br/assets/images/versions-1.png",
    "https://www.nopcommerce.com/images/thumbs/0014297_shipping-plugin-for-usps.jpeg",
  ];

  function numberToTwoDecimalPlacesString(price: number) {
    return price.toFixed(2).toString().replace(".", ",");
  }

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
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="BankSlip"
          onPress={() => {
            setPaymentMethod(typeofPayment.bankslip);
          }}
        />
        <Button
          style={styles.button}
          title="Card"
          onPress={() => {
            setPaymentMethod(typeofPayment.card);
          }}
        />
        <Button
          style={styles.button}
          title="Pix"
          onPress={() => {
            setPaymentMethod(typeofPayment.pix);
          }}
        />
      </View>

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

      <View style={styles.footerSumary}>
        <View style={styles.footerTextRow}>
          <Text style={styles.text1}>Order: </Text>
          <Text style={styles.text2}>
            {numberToTwoDecimalPlacesString(cartContext.getTotalPrice()) +
              " R$"}
          </Text>
        </View>
        <View style={styles.footerTextRow}>
          <Text style={styles.text1}>Delivery: </Text>
          <Text style={styles.text2}>0 R$</Text>
        </View>
        <View style={styles.footerTextRow}>
          <Text style={styles.text3}>Summary:: </Text>
          <Text style={styles.text4}>
            {numberToTwoDecimalPlacesString(cartContext.getTotalPrice()) +
              " R$"}
          </Text>
        </View>
        <Button
          title="SUBMIT ORDER"
          onPress={() => {
            navigation.navigate("SuccessContinue", paymentMethod);
          }}
        />
      </View>
    </View>
  );
}
