import React from 'react';
import { Text, View, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';

import { icons } from '../../constants';

import styles from './styles';

const ResetPasswordVerificationScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.icon}>
        <View style={styles.iconBG}>
          <Image source={icons.CHECKMARK} />
        </View>
        <Text style={styles.headtext}>
          You have successfully reset your password. Please use your new
          password to log in.
        </Text>

        <CustomButton
          buttonContainerStyle={styles.gotoHomebtn}
          buttonTextStyle={styles.gotoHomeText}
          title="Go to Home"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default ResetPasswordVerificationScreen;
