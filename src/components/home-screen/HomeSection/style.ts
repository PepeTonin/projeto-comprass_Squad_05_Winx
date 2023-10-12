import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  outerContainer: {},
  titleContainer: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryName: {
    color: colors.black,
    fontFamily: fontFamilies.extraBoldOpenSans,
    fontSize: fontSizes.xl,
  },
  viewAll: {
    color: colors.black,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xxs,
  },
});
