import React from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import {colors} from '../../constants';
import Icon from "../../components/Icon";
import {ScreenScale} from "../../utils/CommonHelper";

const PhoneVerificationResetScreen = ({ navigation, route }) => {
  return (
    <View style={styles.screen2}>
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
            navigation.navigate('ResetPassword', {userInfo : route.params.userInfo})
          }}
        />
      </View>
    </View>
  );
};
export default PhoneVerificationResetScreen;
