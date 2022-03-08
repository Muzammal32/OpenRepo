import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import { icons } from '../../constants';

import styles from './styles';

const EmailPasswordResetScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.iconBG}>
        <Image source={icons.MESSAGE_OPEN} />
      </View>
      <Text style={styles.text}>
        Please log in to an email to verify your email address
      </Text>
      <Text style={styles.subText}>example@gmail.com</Text>
      <Text style={styles.resendText}>
        Did not get the code?
        <TouchableOpacity
          style={styles.resendContainer}
          onPress={() => {}}>
          <Text>Resend</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default EmailPasswordResetScreen;
