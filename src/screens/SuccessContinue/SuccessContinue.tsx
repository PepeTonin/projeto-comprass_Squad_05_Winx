import { Text, View, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import Tittle from "../../components/shared/Tittle/Tittle";

type LoggedCheckoutStackParamList = {
  LoggedCheckout: any;
  AddShippingAddress: any;
  SuccessContinue: any;
  SuccessEnd: any;
};

type LoggedCheckoutScreenNavigationProp =
  NativeStackScreenProps<LoggedCheckoutStackParamList>;

export default function SuccessContinue({
  navigation,
}: LoggedCheckoutScreenNavigationProp) {
  return (
    <View style={styles.container}>
      <Tittle>Success!</Tittle>
      <Text>Success Continue Screen</Text>
      <Button
        title="continue"
        onPress={() => {
          navigation.navigate("SuccessEnd");
        }}
      />
    </View>
  );
}
