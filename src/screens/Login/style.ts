import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black_800,
    alignItems: "center",
  },
  image: {
    top: 100,
  },
  imageCompass: {
    position: "absolute",
    width: 375,
    height: 375,
    top: 218,
  },
  forms: {
    top: 135,
  },
  buttons: {
    top: 30,
  },
  button: {
    marginBottom: 15,
  },
  textButton: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
    color: colors.white,
    fontFamily: fontFamilies.semiBoldOpenSans,
  },
  signupText: {
    marginTop: 0,
  },
  errorMessage: {
    textAlign: "left",
    bottom: 10,
    fontSize: fontSizes.xs,
    color: colors.red_200,
  },
});
