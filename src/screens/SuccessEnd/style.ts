import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

const paddingToppaddingComponentContainer =
  height * 0.257 < 200 ? height * 0.257 : 200;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonContinueShopping: {
    marginBottom: 30,
  },
  paddingComponentContainer: {
    paddingTop: paddingToppaddingComponentContainer,
  },
});
