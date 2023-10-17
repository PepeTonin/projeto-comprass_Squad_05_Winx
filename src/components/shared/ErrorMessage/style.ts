import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    padding: 16,
  },
  errorMessage: {
    fontFamily: fontFamilies.boldOpenSans,
    fontSize: fontSizes.l,
    color: colors.black,
    marginRight: 8,
  },
});
