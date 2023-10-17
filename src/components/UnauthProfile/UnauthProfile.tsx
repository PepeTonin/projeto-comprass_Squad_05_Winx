import { Text, View, Modal, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import Button from "../shared/Button/Button";
import { useState } from "react";
import Tittle from "../shared/Tittle/Tittle";
import { colors } from "../../styles/globalStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function UnAuthProfile(props: any) {
  const [button1Background, setButton1Background] = useState("red");
  const [button2Background, setButton2Background] = useState("white");
  const [color1TextButton, setColor1TextButton] = useState("white");
  const [color2TextButton, setColor2TextButton] = useState("black");
  const [isModalVisible, setModalVisible] = useState(false);

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

  return (
    <View testID="UnauthProfile">
      <Tittle style={styles.textTitle}>My profile</Tittle>

      <View style={styles.header}>
        <Text style={styles.textLogin}>
          You need to log in to see your details
        </Text>
        <Button
          style={styles.button}
          onPress={props.onLoginPress}
          title="LOGIN"
        />
      </View>

      <View style={styles.boxes}>
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
      </View>
    </View>
  );
}
