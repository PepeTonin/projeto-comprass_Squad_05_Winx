import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_200,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.black,
    fontSize: fontSizes.s,
  },
  bodyContainer: {
    marginTop: 14,
  },
  body: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.black,
    fontSize: fontSizes.xxs,
  },
});
