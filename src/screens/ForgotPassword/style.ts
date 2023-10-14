import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_800,
  },
  imageCompass: {
    position: "absolute",
    width: 375,
    height: 375,
    top: 218,
  },
  texts: {
    top: 120,
    left: 18,
  },
  textTitle: {
    color: colors.white,
    bottom: 10,
    marginBottom: 0,
  },
  text: {
    color: colors.white,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.s,
    lineHeight: 24,
  },
  forms: {
    top: 149,
  },
  buttons: {
    top: 29,
  },
  errorMessage: {
    textAlign: "left",
    bottom: 10,
    left: 18,
    fontSize: fontSizes.xs,
    color: colors.red_200,
  },
});
