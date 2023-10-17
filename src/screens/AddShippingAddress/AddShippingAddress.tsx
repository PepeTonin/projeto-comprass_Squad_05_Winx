import { View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { styles } from "./style";
import Button from "../../components/shared/Button/Button";
import AuthInput from "../../components/shared/Input/Input";
import { useEffect, useRef, useState } from "react";
import { getPostalCode } from "../../util/apiPostalCode";

interface address {
  postalCode: string;
  address: string;
  city: string;
  state: string;
  fullName: string;
}
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
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [fullName, setFullName] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [shippingAddress, setIsShippingAddress] = useState<address>();
  const [isLoading, setIsLoading] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState<boolean | undefined>(
    undefined
  );
  const [errorHandler, setErrorHandler] = useState(false);
  const resetRef = useRef(false);

  async function onChangePostalCode() {
    if (zipCode.length === 8) {
      setIsLoading(true);
      const response: address | undefined = await getPostalCode(zipCode);
      setIsLoading(false);
      setErrorHandler(true);
      if (response != undefined) {
        resetRef.current = true;
        setIsIncorrect(false);
        setAddress(response.address);
        setCity(response.city);
        setState(response.state);
        setFullName(response.fullName);
        setIsEditable(true);
      } else {
        setIsIncorrect(true);
      }
    } else {
      if (zipCode.length != 0) {
        if (resetRef.current) {
          setAddress("");
          setCity("");
          setState("");
          setFullName("");
          setIsEditable(false);
          resetRef.current = false;
        }
        setErrorHandler(false);
        setIsIncorrect(undefined);
      }
    }
  }
  useEffect(() => {
    onChangePostalCode();
  }, [zipCode]);

  useEffect(() => {
    setIsShippingAddress({
      postalCode: zipCode,
      address: address,
      city: city,
      state: state,
      fullName: fullName,
    });
  }, [address, city, state, fullName]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <AuthInput
            label="Zip Code (Postal Code)"
            value={zipCode}
            autoCapitalize="none"
            onChangeText={(text) => {
              if (text.length <= 8) {
                setZipCode(text);
              }
            }}
            errorEmail={errorHandler}
            loading={isLoading}
            notError={false}
            error={isIncorrect}
            keyboardType="numeric"
            editable={true}
            style={[
              styles.input,
              !isIncorrect && errorHandler && styles.validInput,
            ]}
          />
        </View>

        <AuthInput
          label="Address"
          value={address}
          autoCapitalize="none"
          onChangeText={(text) => setAddress(text)}
          editable={isEditable}
          style={styles.input}
          zipCode={true}
        />
        <AuthInput
          label="City"
          value={city}
          autoCapitalize="none"
          onChangeText={(text) => setCity(text)}
          editable={isEditable}
          style={styles.input}
          zipCode={true}
        />
        <AuthInput
          label="State/Province/Region"
          value={state}
          autoCapitalize="none"
          onChangeText={(text) => setState(text)}
          editable={isEditable}
          style={styles.input}
          zipCode={true}
        />
        <AuthInput
          label="Full Name"
          value={fullName}
          autoCapitalize="none"
          onChangeText={(text) => setFullName(text)}
          editable={isEditable}
          style={styles.input}
          zipCode={true}
        />
      </View>

      <Button
        title="SAVE ADDRESS"
        onPress={() => {
          navigation.navigate("LoggedCheckout", shippingAddress);
        }}
        style={styles.button}
        disable={isIncorrect || isIncorrect === undefined}
      />
    </View>
  );
}
