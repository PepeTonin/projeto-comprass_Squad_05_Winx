import { Image, Text, View } from "react-native";

import { styles } from "./style";

interface HomeProfileHeaderProps {
  userImageUrl: string;
  userName: string;
}

export default function HomeProfileHeader(props: HomeProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.userImageUrl }} />
      </View>
      <View>
        <Text style={styles.text}>Hello, {props.userName}</Text>
      </View>
    </View>
  );
}
