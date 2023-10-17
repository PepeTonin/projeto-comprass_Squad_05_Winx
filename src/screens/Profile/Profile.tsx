import { Text, View, Image, Switch, Modal, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import Button from "../../components/shared/Button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenContext } from "../../contexts/authJWTContext";
import { useContext, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Tittle from "../../components/shared/Tittle/Tittle";
import { colors } from "../../styles/globalStyles";

type NonAuthStackParamList = {
  NotLoggedCheckout: any;
  Login: any;
  SignUp: any;
  ForgotPassword: any;
  AuthCheckoutRoutes: any;
  BottomTabRoutes: any;
  HomeRoutes: any;
  CartRoutes: any;
};

type NavigationProp = NativeStackScreenProps<NonAuthStackParamList>;

export default function Profile({ navigation }: NavigationProp) {
  const { deleteToken } = useContext(TokenContext);
  const [isModalVisible, setModalVisible] = useState(false);

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token");
      console.log("Token removido com sucesso.");
    } catch (e) {
      console.log("Erro ao remover o token: ", e);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Tittle style={styles.textTitle}>My profile</Tittle>

      <View style={styles.header}>
        {/* <Image /> */}
        <Text style={styles.name}>Nome</Text>
        <Text style={styles.email}>Email</Text>
      </View>

      <View style={styles.boxes}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Edit Informations</Text>
          <Switch />
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Language</Text>
          <Pressable onPress={toggleModal}>
            <Ionicons name="chevron-up" size={25} color={colors.gray_200} />
          </Pressable>
        </View>

        <Modal visible={isModalVisible} transparent>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Tittle children="Languages" style={styles.modalTitle} />
              <Pressable onPress={toggleModal}>
                <Text>English</Text>
              </Pressable>
              <Pressable onPress={toggleModal}>
                <Text>Portuguese - Brazil</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.box}>
          <Text style={styles.boxText}>Log out</Text>
          <Pressable
            onPress={() => {
              removeToken();
              deleteToken();
              navigation.navigate("CartRoutes");
            }}
          >
            <Ionicons
              name="log-out-outline"
              size={25}
              color={colors.gray_200}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
