import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    marginTop: 36,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.black,
    fontSize: fontSizes.m,
  },
  amountItems: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.gray_500,
    fontSize: fontSizes.xxs,
  },
  relatedProductContainer: {
    marginLeft: 16,
    maxWidth: 148,
  },
  relatedItemsImage: {
    width: 148,
    height: 184,
    borderRadius: 8,
  },
  relatedItemsCategoryName: {
    marginTop: 8,
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.gray_500,
    fontSize: fontSizes.xxs,
  },
  relatedItemsProductName: {
    marginTop: 2,
    fontFamily: fontFamilies.boldOpenSans,
    color: colors.black,
    fontSize: fontSizes.s,
  },
  relatedItemsPrice: {
    marginTop: 2,
    fontFamily: fontFamilies.semiBoldOpenSans,
    color: colors.black,
    fontSize: fontSizes.xs,
  },
});
