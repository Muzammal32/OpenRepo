import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { icons } from '../../constants';

import styles from './styles';
import Icon from "../Icon";
import {ScreenScale} from "../../utils/CommonHelper";

const OptionsContainer = ({ onPress, title, mail, source, icon, style }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.cardContainer}>
        <View style={styles.iconBG}>
          <Icon name={icon} size={ScreenScale(50)} color={'#2B2E34'}/>
        </View>
        <View>
          <Text style={[styles.text, style]}>{title}</Text>
          <Text style={styles.cardSubTextNumber}>{mail}</Text>
        </View>
        <Image source={icons.FORWARD_ARROW} style={styles.arrowStyle} />
      </View>
    </TouchableOpacity>
  );
};

export default OptionsContainer;
