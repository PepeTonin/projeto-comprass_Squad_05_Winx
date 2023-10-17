import { StyleSheet } from "react-native";
import { colors, fontFamilies, fontSizes } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  profileTexts: {
    alignItems: "flex-start",
  },
  name: {
    fontSize: fontSizes.l,
    fontFamily: fontFamilies.semiBoldOpenSans,
  },
  email: {
    fontFamily: fontFamilies.semiBoldOpenSans,
    color: colors.gray_100,
  },
  textTitle: {
    left: 6,
    marginTop: 35,
    fontFamily: fontFamilies.extraBoldOpenSans,
  },
  boxes: {
    alignItems: "center",
    marginTop: 10,
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
    height: 170,
    backgroundColor: "white",
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
  },
  modalTitle: {
    fontSize: fontSizes.m,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonLanguage: {
    height: 48,
    justifyContent: "center",
  },
  modalLanguage: {
    color: colors.black,
    fontSize: fontSizes.s,
    fontFamily: fontFamilies.semiBoldOpenSans,
    left: 16,
    justifyContent: "center",
  },
});
