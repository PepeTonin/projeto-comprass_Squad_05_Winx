import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  outerContainer: {
    marginLeft: 16,
    width: 150,
  },
  topButtonsContainer: {
    flexDirection: "row",
  },
  minusContainer: {
    backgroundColor: colors.red_500,
    borderTopLeftRadius: 12,
    width: 51,
    alignItems: "center",
  },
  amountContainer: {
    width: 48,
    borderTopColor: colors.gray_500,
    borderTopWidth: 1,
    borderBottomColor: colors.gray_500,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  amountText: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    fontSize: fontSizes.xxs,
  },
  plusContainer: {
    backgroundColor: colors.red_500,
    borderTopRightRadius: 12,
    width: 51,
    alignItems: "center",
  },
  imageContainer: {
    width: 150,
    height: 184,
  },
  image: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  bottomContainer: {
    width: "100%",
  },
  productName: {
    fontFamily: fontFamilies.boldOpenSans,
    color: colors.gray_500,
    fontSize: fontSizes.xs,
    marginTop: 8,
  },
  productDescription: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.black,
    fontSize: fontSizes.xxxs,
    marginTop: 4,
  },
  productPrice: {
    fontFamily: fontFamilies.extraBoldOpenSans,
    color: colors.red_500,
    fontSize: fontSizes.s,
    marginTop: 6,
  },
});
