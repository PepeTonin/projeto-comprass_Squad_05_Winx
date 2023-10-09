import { Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from './style';

type CartStackParamList = {
  Home: any;
  ProductDetails: any;
};

type CartScreenNavigationProp = NativeStackScreenProps<CartStackParamList>;

export default function Checkout() {
  return (
    <View style={styles.container}>
      <Text>Checkou screen</Text>
      <Button title="shipping address" onPress={() => {}} />
    </View>
  );
}