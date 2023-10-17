import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { PropsWithChildren, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";

interface PropsInput {
  style?: any;
  label: string;
  value: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
  error?: boolean;
  editable: boolean;
  errorEmail?: boolean;
  notError?: boolean;
  loading?: boolean;
  zipCode?: boolean;
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
  useEffect(() => {
    if (text.length != 0) {
      setIsFocused(true);
    }
  }, [text]);

  return (
    <View style={styles.container} testID="Input">
      <View
        style={[
          styles.boxInput,
          props.style,
          !props.editable && styles.inputDisable,
          props.error ? styles.errorInput : null,
        ]}
      >
        <Text
          style={[
            styles.label,
            props.zipCode
              ? {
                  top: isFocused || props.value !== "" || text !== "" ? 6 : 19,
                  fontSize:
                    isFocused || props.value !== "" || text !== "" ? 12 : 15,
                  color: colors.gray_500,
                }
              : {
                  top: isFocused || text !== "" ? 6 : 19,
                  fontSize: isFocused || text !== "" ? 12 : 15,
                  color: colors.gray_500,
                },
          ]}
        >
          {props.label}
        </Text>

        <TextInput
          style={styles.input}
          value={props.value}
          autoCapitalize={props.autoCapitalize}
          secureTextEntry={props.secureTextEntry && !isPasswordVisible}
          keyboardType={props.keyboardType}
          editable={props.editable}
          onChangeText={(newText) => {
            setText(newText);
            if (props.onChangeText) {
              props.onChangeText(newText);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {props.secureTextEntry && props.editable ? (
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
        <View>
          {props.loading ? (
            <ActivityIndicator
              size={"large"}
              color={colors.red_500}
              style={styles.loading}
            />
          ) : (
            props.errorEmail &&
            (props.error ? (
              <AntDesign
                name="close"
                size={20}
                color="red"
                style={styles.icon}
              />
            ) : (
              !props.notError && (
                <AntDesign
                  name="check"
                  size={20}
                  color="green"
                  style={styles.icon}
                />
              )
            ))
          )}
        </View>
      </View>
    </View>
  );
}
