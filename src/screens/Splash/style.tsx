import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

const { width } = Dimensions.get("screen");

const imgSize = width;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_800,
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    height: imgSize,
    width: imgSize,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
