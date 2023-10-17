import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";

interface BackButtonProps {
  color: "black" | "white";
  onPress?: () => void;
}

export default function (props: BackButtonProps) {
  return (
    <Pressable
      testID="BackButton"
      hitSlop={10}
      onPress={props.onPress}
      style={styles.container}
    >
      <Feather
        name="chevron-left"
        size={32}
        color={props.color === "black" ? colors.black : colors.white}
      />
    </Pressable>
  );
}
