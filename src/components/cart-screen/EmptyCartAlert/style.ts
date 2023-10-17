import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  innerContainer: {
    marginTop: 64,
    alignItems: "center",
  },
  image: {
    width: 56,
    height: 62,
  },
  text: {
    padding: 16,
    fontSize: fontSizes.l,
    color: colors.black,
    fontFamily: fontFamilies.regularOpenSans,
    textAlign: "center",
  },
});
