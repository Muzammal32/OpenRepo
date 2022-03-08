import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const CustomButton = ({
  onPress,
  title,
  buttonTextStyle,
  buttonContainerStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonContainerStyle]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
