import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import {colors, icons} from '../../constants';

import styles from './styles';
import {ScreenScale} from "../../utils/CommonHelper";
import Icon from "../../components/Icon";

const PhoneVerificationScreen = ({ navigation, route }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.icon}>
        <View style={styles.iconBG}>
            <Icon name={'tick_icon'} size={ScreenScale(40)} color={colors.WHITE} />
        </View>
        <Text style={styles.headtext}>
          You have successfully verified the phone number
        </Text>
        <CustomButton
          buttonContainerStyle={styles.nextbtn}
          buttonTextStyle={styles.nextText}
          title="Next"
          onPress={() => {
            navigation.navigate('Address', {userInfo : route.params.userInfo})
          }}
        />
      </View>
    </View>
  );
};
export default PhoneVerificationScreen;
