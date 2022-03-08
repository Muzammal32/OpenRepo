import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import OptionsContainer from '../../components/OptionsContainer';
import {colors, icons} from '../../constants';

import styles from './styles';

const PasswordResetSelectionScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.BON_JOUR}/>
            <Text style={styles.headText}>Reset Password</Text>
            <Text style={styles.subText}>
                Select which contact details should be used to reset your Password.
            </Text>
            <View style={styles.cardComponent}>
                <OptionsContainer
                    title="Via Email Address"
                    mail="example...@g.....com"
                    icon={'email_open_icon'}
                    onPress={() => navigation.navigate('ResetSelected', {type: "email"})}
                />
                <OptionsContainer
                    title="Via Phone Number"
                    mail="(***) ****-0***"
                    icon={'phone_icon'}
                    onPress={() => navigation.navigate('ResetSelected', {type: "phone"})}
                />
            </View>
        </View>
    );
};

export default PasswordResetSelectionScreen;
