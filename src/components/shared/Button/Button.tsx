import { Pressable, Text, TouchableOpacityProps, View } from "react-native";

import { styles } from "./style";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  style?: any;
  disable?: boolean;
  onPress?: () => void;
  content?: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          props.style,
          props.disable && styles.buttonDisable,
        ]}
        disabled={props.disable}
        onPress={props.onPress}
      >
        {props.content || <Text style={styles.buttonText}>{props.title}</Text>}
      </Pressable>
    </View>
  );
}
