import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, StatusBar, Text, TouchableOpacity} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import {colors} from '../../constants';

const PhonePasswordResetScreen = ({navigation, route}) => {
    const {params} = route;
    const [OtpCode, setOtpCode] = useState(String(params.otp));
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setButtonDisabled(false);
        }, 126000);
    }, []);
    return (
        <ScrollView  keyboardShouldPersistTaps='handled'>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
                <Text style={styles.headText}>
                    Enter the 4 digit code we sent to your {params.type}
                </Text>
                <OTPInputView
                    style={styles.otpContainer}
                    pinCount={4}
                    code={OtpCode}
                    keyboardType="number-pad"
                    keyboardAppearance="default"
                    autoFocusOnLoad={true}
                    codeInputFieldStyle={styles.borderStyleBase}
                    codeInputHighlightStyle={styles.borderStyleHighLighted}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeChanged={setOtpCode}
                    onCodeFilled={setOtpCode}
                />
                <Text style={styles.expireText}>
                    Code Expires in: <TimerOTP/>
                </Text>

                <CustomButton
                    buttonContainerStyle={styles.confirmBtn}
                    buttonTextStyle={styles.titleStyle}
                    title="Confirmed"
                    onPress={() => navigation.navigate('PhoneVerificationReset', {userInfo : params.userInfo})}
                />
                <Text style={styles.resendText}>
                    Did not get the code?
                    <TouchableOpacity
                        style={styles.resendContainer}
                        disabled={buttonDisabled}>
                        <Text
                            style={
                                buttonDisabled === true ? styles.textvalid : styles.textinvalid
                            }>
                            Resend
                        </Text>
                    </TouchableOpacity>
                </Text>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const TimerOTP = () => {
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });
    return (
        <Text>
            {minutes === 0 && seconds === 0 ? (
                '0s'
            ) : (
                <Text style={styles.time}>
                    {minutes}:{seconds < 10 ? `0${seconds}s` : `${seconds}s`}
                </Text>
            )}
        </Text>
    );
};

export default PhonePasswordResetScreen;
