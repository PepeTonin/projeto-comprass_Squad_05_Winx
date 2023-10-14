import { StyleSheet } from "react-native";
import { fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 346,
    alignItems: "center",
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
