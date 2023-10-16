import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { styles } from './style';
import { colors } from '../../../styles/globalStyles';

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Something went wrong</Text>
      <Entypo name="emoji-sad" size={24} color={colors.black} />
    </View>
  );
}