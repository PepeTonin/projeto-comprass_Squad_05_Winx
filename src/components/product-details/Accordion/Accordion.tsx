import {
  Text,
  View,
  Pressable,
  Platform,
  UIManager,
  LayoutAnimation,
  Animated,
} from "react-native";
import { useState, useRef } from "react";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "../../../styles/globalStyles";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionProps {
  label: string;
  text: string;
}

export default function Accordion(props: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  function toggleItem() {
    const config = {
      duration: 300,
      toValue: expanded ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  }

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  const body = (
    <View style={styles.bodyContainer}>
      <Text style={styles.body}>{props.text}</Text>
    </View>
  );

  return (
    <Pressable style={styles.container} onPress={toggleItem}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
          <Entypo name="chevron-right" size={16} color={colors.black} />
        </Animated.View>
      </View>
      {expanded && body}
    </Pressable>
  );
}
