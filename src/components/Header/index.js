import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '../../constants';

import styles from './styles';

/**
 * Global header component
 * @prop {string} title - header title
 * @prop {func} rightIconPress - Press function for right icon
 * @returns JSX
 */
const Header = ({ title, rightIconPress }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.startEndContainer}
        onPress={rightIconPress}>
        <Image source={icons.CROSS} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.middleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* <View style={styles.startEndContainer}>
        <Text>Save</Text>
      </View> */}
    </View>
  );
};

export default Header;
