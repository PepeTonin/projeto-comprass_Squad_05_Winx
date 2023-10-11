import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  firstContainerWhenThereAreJustTwoProducts: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_200,
  },
  middleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_200,
    borderTopWidth: 1,
    borderTopColor: colors.gray_200,
  },
  image: {
    width: 30,
    height: 40,
    borderRadius: 4,
  },
  textContainer: {
    width: width * 0.5,
  },
  name: {
    fontFamily: fontFamilies.boldOpenSans,
    fontSize: fontSizes.xs,
    color: colors.black_800,
  },
  description: {
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xxs,
    color: colors.black,
  },
  price: {
    fontFamily: fontFamilies.extraBoldOpenSans,
    fontSize: fontSizes.s,
    color: colors.red_500,
  },
});
