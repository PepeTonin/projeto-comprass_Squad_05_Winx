import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  outerContainer: {
    alignItems: "center",
    backgroundColor: colors.white,
    paddingVertical: 28,
    elevation: 10,
    marginTop: 1,
  },
  innerContainer: {
    flexDirection: "row",
    paddingHorizontal: 36,
    height: 45,
  },
  minusContainer: {
    backgroundColor: colors.red_500,
    justifyContent: "center",
    alignItems: "center",
    width: 105,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  plusContainer: {
    backgroundColor: colors.red_500,
    justifyContent: "center",
    alignItems: "center",
    width: 105,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  amountContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_500,
    borderTopWidth: 1,
    borderTopColor: colors.gray_500,
  },
  amount: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    fontSize: fontSizes.l,
    color: colors.black,
    paddingHorizontal: 40,
  },
});
