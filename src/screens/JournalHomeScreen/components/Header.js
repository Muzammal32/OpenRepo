import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import Icon from "../../../components/Icon";
import {ScreenScale} from "../../../utils/CommonHelper";

const Header = ({ goTo, logo, title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.headContainer}
      onPress={() => navigation.navigate(goTo)}>
      <View style={styles.subContainer}>
        <Icon name={logo} size={ScreenScale(50)} color={'#2B2E34'} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Header;
