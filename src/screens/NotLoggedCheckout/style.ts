import { StyleSheet } from "react-native";
import { fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  backButton: {
    top: 4,
    left: 7,
  },
  header: {
    alignSelf: "center",
    flexDirection: "row",
    bottom: 25,
  },
  body: {
    top: 246,
    alignItems: "center",
  },
  textTitle: {
    fontFamily: fontFamilies.extraBoldOpenSans,
    fontSize: fontSizes.m,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: fontFamilies.semiBoldOpenSans,
    fontSize: fontSizes.s,
  },
  button: {
    width: 136,
  },
});
