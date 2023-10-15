import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  boxInput: {
    width: 343,
    height: 64,
    marginBottom: 17,
    borderRadius: 12,
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  inputDisable: {
    backgroundColor: colors.gray_100,
  },
  label: {
    position: "absolute",
    left: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    height: 64,
    marginBottom: 12,
    borderRadius: 5,
  },
  errorInput: {
    borderColor: colors.red_200,
    borderWidth: 2,
    borderRadius: 10,
  },
  validInput: {
    borderColor: colors.green_900,
    borderWidth: 2,
    borderRadius: 10,
  },
  icon: {
    top: 21,
    right: 18,
  },
  loading: {
    top: 15,
    right: 10,
  },
});
