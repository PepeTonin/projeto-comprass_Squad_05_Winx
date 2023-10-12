import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../styles/globalStyles";

const { height, width } = Dimensions.get("screen");

const paddingTopContentContainer = height * 0.141 < 120 ? height * 0.141 : 120;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: paddingTopContentContainer,
    alignItems: "center",
    justifyContent: "space-between",
  },
  message: {
    paddingTop: 16,
    paddingBottom: 16,
    width: 260,
    textAlign: "center",
    color: colors.black,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.s,
  },
  button: {
    width: width * 0.434,
    maxWidth: 250,
  },
});
