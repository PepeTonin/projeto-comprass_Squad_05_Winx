import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    paddingTop: 10,
  },
  message: {
    color: colors.black_000,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xs,
    width: 250,
    textAlign: "center",
    paddingTop: 12,
  },
});
