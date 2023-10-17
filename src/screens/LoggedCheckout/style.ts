import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 30,
  },
  backButton: {
    top: 4,
    left: 7,
  },
  header: {
    alignSelf: "center",
    flexDirection: "row",
    bottom: 25,
  },
  textTitle: {
    fontFamily: fontFamilies.extraBoldOpenSans,
    fontSize: fontSizes.m,
  },
  textTitleButton: {
    fontFamily: fontFamilies.boldOpenSans,
    fontSize: fontSizes.s,
    left: 16,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  button: {
    width: 100,
  },
  buttonBoxes: {
    alignItems: "center",
    alignContent: "center",
  },
  box: {
    width: 343,
    height: 108,
    borderRadius: 8,

    shadowColor: colors.black_800,
    elevation: 0.5,
  },
  textButton: {
    position: "absolute",
    fontSize: 14,
    marginVertical: 10,
    top: 10,
    right: 20,
    color: colors.red_500,
    fontFamily: fontFamilies.semiBoldOpenSans,
  },
  textMiddleButton: {
    position: "absolute",
    color: colors.gray_500,
    top: 40,
    left: 20,
  },
  image: {
    width: 100,
    height: 53,
    marginHorizontal: 10,
  },
  footerSumary: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  footerTextRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  text1: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.gray_500,
    fontSize: fontSizes.xs,
  },
  text2: {
    fontFamily: fontFamilies.regularOpenSans,
    color: colors.black,
    fontSize: fontSizes.s,
  },
  text3: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    color: colors.gray_500,
    fontSize: fontSizes.s,
  },
  text4: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    color: colors.black,
    fontSize: fontSizes.l,
  },
});
