import { Text, View } from "react-native";

import { styles } from "./style";

interface Props {
  children: string;
  style?: {};
}

export default function Tittle({ children, style }: Props) {
  return (
    <View style={[style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
