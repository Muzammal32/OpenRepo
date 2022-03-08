import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

const Goal = ({ item }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <View style={styles.goal}>
        <CheckBox
          style={styles.checkBox}
          disabled={false}
          value={toggleCheckBox}
          onCheckColor="grey"
          onTintColor="#B4B4B4"
          boxType="circle"
          onAnimationType={'bounce'}
          offAnimationType={'stroke'}
          tintColors={{ true: '#B4B4B4', false: '#B4B4B4' }}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={styles.goalText}>{item.goal}</Text>
      </View>
    </>
  );
};

export default Goal;
