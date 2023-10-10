import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { styles } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  style?: any;
  onPress?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
