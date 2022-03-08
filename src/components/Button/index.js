import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * Global custom button component
 * @param {string} text - text for the button
 * @param {object} style - extra styling for the button
 * @returns JSX
 */
const Button = ({ text, style }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text style={[styles.nextBtnText, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
