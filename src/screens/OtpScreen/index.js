import OTPInputView from '@twotalltotems/react-native-otp-input';
import React, { useEffect, useState } from 'react';
import {KeyboardAvoidingView, ScrollView, StatusBar, Text, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import CustomButton from '../../components/CustomButton';
// import { sendSMS } from '../../store/auth/authSlice';
import styles from './styles';
import {colors} from '../../constants';

const OtpScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { params } = route;
  const [otp, setOTP] = useState(String(params.otp));
  const [OtpCode, setOtpCode] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [err, setErr] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setButtonDisabled(false);
    }, 126000);
  }, []);

  const handleVerification = code => {
    if (code === otp) {
      setErr(false);
      setConfirmed(true);
    } else {
      setErr(true);
    }
  };

  const handleResend = () => {
    const phone = params.userInfo.phone
    props.requestRegisterOTP(phone, (data)=>{
      // if (data.success){
      //
      // }
    });
  };

  return (
      <ScrollView keyboardShouldPersistTaps='handled'>
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>

          <Text style={styles.headText}>
            Enter the 4 digit code we sent to your number
          </Text>
          <OTPInputView
              style={styles.otpContainer}
              pinCount={4}
              code={OtpCode}
              keyboardType={'number-pad'}
              keyboardAppearance={'default'}
              autoFocusOnLoad={true}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeChanged={setOtpCode}
              onCodeFilled={handleVerification}
          />

          <Text style={styles.expireText}>
            Code Expires in: <TimerOTP />
          </Text>

          <Text style={styles.invalidCode}>{err ? 'INVALID CODE' : ''}</Text>

          <CustomButton
              buttonContainerStyle={styles.confirmBtn}
              buttonTextStyle={styles.titleStyle}
              title={!confirmed ? 'Waiting for Confirmation' : 'Confirmed'}
              disabled={!confirmed}
              onPress={() => navigation.navigate('PhoneVerification',{userInfo: params.userInfo})}
          />

          <Text style={styles.resendText}>
            Did not get the code?
            <TouchableOpacity
                onPress={handleResend}
                style={styles.resendContainer}
                disabled={buttonDisabled}>
              <Text style={buttonDisabled ? styles.textvalid : styles.textinvalid}>
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

export default OtpScreen;
