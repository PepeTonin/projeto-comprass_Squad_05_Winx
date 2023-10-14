import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

const deviceWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  carousel: {},
  image: {
    width: deviceWidth,
    height: 413,
  },
  pagination: {
    zIndex: 100,
    height: 3,
    backgroundColor: colors.red_500,
    borderRadius: 3,
  },
  infosContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 52,
    marginBottom: 40,
  },
  titleAndCategoryContainer: {
    maxWidth: 250,
  },
  productName: {
    fontFamily: fontFamilies.boldOpenSans,
    color: colors.black,
    fontSize: fontSizes.l,
    marginBottom: 4,
  },
  categoryName: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.gray_500,
    fontSize: fontSizes.xxs,
  },
  price: {
    fontFamily: fontFamilies.boldOpenSans,
    color: colors.black,
    fontSize: fontSizes.l,
  },
  descriptionContainer: {
    marginHorizontal: 16,
  },
  description: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.black,
    fontSize: fontSizes.xs,
    textAlign: "left",
  },
});
