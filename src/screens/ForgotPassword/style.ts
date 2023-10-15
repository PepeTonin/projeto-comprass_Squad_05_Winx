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
    alignItems: "center",
  },
  buttons: {
    top: 177.6,
    alignItems: "center",
  },
  errorMessage: {
    alignSelf: "flex-start",
    bottom: 10,
    left: 18,
    fontSize: fontSizes.xs,
    color: colors.red_200,
  },
  validInput: {
    height: 68,
    width: 347,
    marginBottom: 14,
    borderColor: colors.green_900,
    borderWidth: 2,
    borderRadius: 14,
  },
  footerForms: {
    position: "absolute",
    top: 243,
    right: 80,
    alignSelf: "flex-start",
  },
});
