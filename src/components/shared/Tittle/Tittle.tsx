import { Text, View } from "react-native";

import { styles } from "./style";

interface Props {
  children: string;
  style?: {};
  weight?: string;
}

export default function Tittle({ children, style, weight }: Props) {
  return (
    <View style={[style]}>
      <Text style={[styles.text, style, weight == '700' ? (styles.weight) : (null)]}>{children}</Text>
    </View>
  );
}
