import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 100,
    padding: 16,
  },
  title: {
    textAlign: "left",
    fontFamily: fontFamilies.boldOpenSans,
    color: colors.black,
    fontSize: fontSizes.xl,
  },
});
