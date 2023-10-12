import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    width: 343,
    height: 48,
    borderRadius: 25,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red_500,
    shadowColor: colors.red_500,
    elevation: 10,
  },
  buttonDisable: {
    backgroundColor: colors.gray_900,
    shadowColor: colors.gray_900,
  },
  buttonText: {
    color: colors.white,
    fontFamily: fontFamilies.extraBoldOpenSans,
    fontSize: fontSizes.s,
  },
});
