import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 50,
    elevation: 10,
    marginBottom: 1,
  },
  title: {
    fontFamily: fontFamilies.boldOpenSans,
    fontSize: fontSizes.m,
    color: colors.black,
  },
  placeholderContainer: {
    width: 32,
  },
});
