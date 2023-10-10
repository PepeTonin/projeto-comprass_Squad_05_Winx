import { Button, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";

type LoggedCheckoutStackParamList = {
  LoggedCheckout: any;
  AddShippingAddress: any;
  SuccessContinue: any;
  SuccessEnd: any;
};

type LoggedCheckoutScreenNavigationProp =
  NativeStackScreenProps<LoggedCheckoutStackParamList>;

export default function AddShippingAddress({
  navigation,
}: LoggedCheckoutScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Text>Add Shipping Address screen</Text>
      <Button
        title="save address"
        onPress={() => {
          navigation.navigate("LoggedCheckout");
        }}
      />
    </View>
  );
}
