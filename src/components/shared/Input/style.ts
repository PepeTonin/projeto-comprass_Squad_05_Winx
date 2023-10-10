import { StyleSheet } from "react-native";
import { colors } from "../../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  boxInput: {
    width: 343,
    height: 64,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  inputDisable: {
    backgroundColor: colors.gray_500,
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
    borderColor: "red",
    borderWidth: 1,
    marginHorizontal: 0,
  },
  icon: {
    top: 20,
    right: 20,
  },
});
