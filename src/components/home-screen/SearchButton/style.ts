import { StyleSheet, Dimensions } from "react-native";

import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    width: 41,
    height: 41,
    borderRadius: 41 / 2,
    backgroundColor: colors.red_500,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 60,
    right: 16,
    zIndex: 10,
  },
  searchInputContainer: {
    width: width * 0.92,
    backgroundColor: colors.white,
    borderWidth: 4,
    borderColor: colors.red_500,
    position: "absolute",
    top: 50,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
    justifyContent: "center",
  },
  input: {
    backgroundColor: colors.white,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xs,
    color: colors.black,
  },
  listContainer: {
    width: width * 0.9,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray_200,
    position: "absolute",
    top: 100,
    right: 5,
    borderRadius: 12,
  },
  emptyListContainer: {
    padding: 10,
  },
  emptyListText: {
    color: colors.black,
    fontFamily: fontFamilies.regularOpenSans,
    fontSize: fontSizes.xs,
    textAlign: "center",
  },
});
