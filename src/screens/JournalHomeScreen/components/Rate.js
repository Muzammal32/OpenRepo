import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

const Rate = ({ item, pressEvent, selected }) => {
  return (
    <TouchableOpacity
      style={selected == item.rating ? styles.focusedRate : styles.focusRate}
      onPress={() => pressEvent(item.rating)}>
      <Text>{item.rating}</Text>
    </TouchableOpacity>
  );
};

export default Rate;
