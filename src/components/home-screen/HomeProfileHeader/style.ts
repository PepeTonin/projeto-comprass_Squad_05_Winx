import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    left: 16,
    zIndex: 100,
    flexDirection: "row",
    paddingRight: 13,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 28 / 2,
    borderWidth: 1,
    borderColor: colors.black,
  },
  imageContainer: {
    padding: 2,
    marginRight: 4,
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
  },
  text: {
    color: colors.black,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xs,
  },
});
