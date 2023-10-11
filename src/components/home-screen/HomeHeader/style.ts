import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  backgroundImage: {
    height: 390,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    marginBottom: 105,
  },
  bottomContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 16,
    marginBottom: 16,
  },
  bottomText: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    color: colors.white,
    fontSize: fontSizes.s,
    marginRight: 16,
  },
});
