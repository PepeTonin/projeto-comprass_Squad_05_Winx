import { Pressable, Text, TextInput, View } from "react-native";
import { PropsWithChildren, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";

interface PropsInput {
  style?: any;
  label: string;
  value: string;
  autoCapitalize: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  error?: string;
}

export default function AuthInput(props: PropsWithChildren<PropsInput>) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (text === "") {
      setIsFocused(false);
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      <Text
        style={[
          styles.label,
          {
            top: isFocused || text !== "" ? 5 : 20,
            fontSize: isFocused || text !== "" ? 12 : 15,
            color: colors.gray_500,
          },
        ]}
      >
        {props.label}
      </Text>
      {/* <View>
        {props.onChangeText &&
          (props.error ? (
            <AntDesign
              name="close"
              size={20}
              color={"red"}
              style={styles.icon}
            />
          ) : (
            <AntDesign
              name="check"
              size={20}
              color={"green"}
              style={styles.icon}
            />
          ))}
      </View> */}
      <TextInput
        style={[styles.input, props.error ? styles.errorInput : null]}
        value={props.value}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry && !isPasswordVisible}
        keyboardType={props.keyboardType}
        onChangeText={(newText) => {
          setText(newText);
          if (props.onChangeText) {
            props.onChangeText(newText);
          }
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {props.secureTextEntry ? (
        <Pressable onPress={onEyePress}>
          {isPasswordVisible ? (
            <Ionicons
              name="eye"
              size={20}
              color={"black"}
              style={styles.icon}
            />
          ) : (
            <Ionicons
              name="eye-off"
              size={20}
              color={"black"}
              style={styles.icon}
            />
          )}
        </Pressable>
      ) : null}
    </View>
  );
}