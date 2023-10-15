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
  back: {
    position: "absolute",
    top: 48,
    left: 10,
  },
  texts: {
    top: 117,
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
    lineHeight: 24,
    fontSize: fontSizes.s,
  },
  forms: {
    top: 147,
  },
  buttons: {
    top: 30,
  },
  errorMessage: {
    textAlign: "left",
    bottom: 10,
    left: 18,
    fontSize: fontSizes.xs,
    color: colors.red_200,
  },
});
