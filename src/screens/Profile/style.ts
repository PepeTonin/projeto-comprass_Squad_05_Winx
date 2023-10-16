import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
  },
  name: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    textAlign: "left",
  },
  email: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    color: colors.gray_100,
    textAlign: "left",
  },
  textTitle: {
    marginTop: 50,
    fontFamily: fontFamilies.extraBoldOpenSans,
  },
  boxes: {
    alignItems: "center",
    marginTop: 100,
  },
  box: {
    height: 72,
    width: 379,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_100,
  },
  boxText: {
    fontFamily: fontFamilies.boldOpenSans,
    fontSize: fontSizes.s,
  },
  modal: {
    justifyContent: "flex-end",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo do modal (aqui definido como um fundo escuro com 50% de transparência)
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  modalContent: {
    height: 200,
    backgroundColor: "white",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  modalTitle: {
    fontSize: fontSizes.m,
    alignItems: "center",
    marginVertical: 10,
  },
});
