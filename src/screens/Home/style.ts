import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stickyHeader: {
    flexDirection: "row",
    backgroundColor: colors.black_000,
    height: 40,
  },

  searchButtonContainer: {
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
});
