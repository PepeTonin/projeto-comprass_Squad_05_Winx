import { Dimensions, StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../../styles/globalStyles";

const { width } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 8,
    height: 104,
    marginHorizontal: width * 0.042,
    marginVertical: 8,
    overflow: "hidden",
    elevation: 2,
  },
  img: {
    width: 104,
    height: 104,
  },
  containerInformation: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  innerContainerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    marginTop: 10,
    marginLeft: 4,
    color: colors.black_000,
    fontSize: fontSizes.s,
    fontFamily: fontFamilies.boldOpenSans,
  },
  iconContainer: {
    height: 29,
    width: 28,
    borderBottomLeftRadius: 8,
    backgroundColor: colors.red_500,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainerDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
    marginRight: 10,
  },
  amounContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  amountIcon: {
    backgroundColor: colors.red_500,
    borderRadius: 18,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  amountText: {
    color: colors.black_000,
    fontSize: fontSizes.xs,
    fontFamily: fontFamilies.semiBoldOpenSans,
    marginHorizontal: 14,
  },
  price: {
    color: colors.black_000,
    fontSize: fontSizes.xs,
    fontFamily: fontFamilies.semiBoldOpenSans,
  },
});
