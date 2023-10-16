import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  innerContainer: {
    paddingTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray_200,
  },
  button: {
    marginBottom: 30,
  },
  validInput: {
    height: 68,
    width: 347,
    marginBottom: 14,
    borderColor: colors.green_900,
    borderWidth: 2,
    borderRadius: 14,
  },
});
