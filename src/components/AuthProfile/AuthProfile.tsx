import {
  Text,
  View,
  Image,
  Switch,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenContext } from "../../contexts/authJWTContext";
import { useContext, useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Tittle from "../shared/Tittle/Tittle";
import { colors } from "../../styles/globalStyles";
import { getSingleUser } from "../../util/apiUsers";

export default function AuthProfile() {
  const { deleteToken } = useContext(TokenContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [button1Background, setButton1Background] = useState("red");
  const [button2Background, setButton2Background] = useState("white");
  const [color1TextButton, setColor1TextButton] = useState("white");
  const [color2TextButton, setColor2TextButton] = useState("black");
  const { id } = useContext(TokenContext);

  const removeToken = async () => {
    await AsyncStorage.removeItem("token");
    console.log("Token removido com sucesso.");
  };

  const handleButton1Press = () => {
    setButton1Background("red");
    setButton2Background("white");
    setColor1TextButton("white");
    setColor2TextButton("black");
  };

  const handleButton2Press = () => {
    setButton1Background("white");
    setButton2Background("red");
    setColor1TextButton("black");
    setColor2TextButton("white");
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleUser = async (id: any) => {
    try {
      const data = await getSingleUser(id);
      setName(data?.name);
      setEmail(data?.email);
      setAvatar(data?.avatar);
    } catch (e) {
      alert("Erro handle" + e);
    }
  };

  useEffect(() => {
    handleUser({ id });
  }, [id]);

  return (
    <View>
      <Tittle style={styles.textTitle}>My profile</Tittle>

      <View style={styles.header}>
        <Image source={{ uri: avatar }} style={styles.image} />
        <View style={styles.profileTexts}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
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
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.modalBackground}
          >
            <View style={styles.modalContent}>
              <Tittle children="Languages" style={styles.modalTitle} />
              <Pressable
                onPress={() => {
                  handleButton1Press();
                }}
                style={[
                  styles.buttonLanguage,
                  { backgroundColor: button1Background },
                ]}
              >
                <Text
                  style={[styles.modalLanguage, { color: color1TextButton }]}
                >
                  English
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  handleButton2Press();
                }}
                style={[
                  styles.buttonLanguage,
                  { backgroundColor: button2Background },
                ]}
              >
                <Text
                  style={[styles.modalLanguage, { color: color2TextButton }]}
                >
                  Portuguese - Brazil
                </Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        </Modal>
        <View style={styles.box}>
          <Text style={styles.boxText}>Log out</Text>
          <Pressable
            onPress={() => {
              removeToken();
              deleteToken();
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
