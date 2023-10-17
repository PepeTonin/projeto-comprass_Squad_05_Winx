import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    marginTop:16,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalAmountText: {
    color: colors.gray_500,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xs,
  },
  priceAmountText: {
    color: colors.black,
    fontFamily: fontFamilies.semiBoldOpenSans,
    fontSize: fontSizes.m,
  },
  button: {
    width: "100%",
  },
});
