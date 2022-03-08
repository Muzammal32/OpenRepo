import React, {useRef, useState} from 'react';
import {Alert, Image, ScrollView, Text, TouchableOpacity, View, Platform} from 'react-native';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';

import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import {colors, icons} from '../../constants';
import CustomButton from '../../components/CustomButton';
import {connect} from 'react-redux';
import {getUser, login, socialMediaLogin} from '../../store/user/user-actions';
import Loading from '../../components/Loader';
import {ScreenScale, validateEmail} from '../../utils/CommonHelper';
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {
  AccessToken,
  AuthenticationToken,
  LoginManager,
    Profile
} from 'react-native-fbsdk-next';
import TextInputAvoidingView from "../../components/TextInputAvoidingView";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const initialValues = {
  email: '',
  password: '',
  globalErr: '',
};

const LoginScreen = (props) => {
  let {navigation} = props;
  const passwordInput = useRef(null);

  const [isSecure, setIsSecure] = useState(true);

  const handleLogin = (values, actions) => {
    if (!validateEmail(values.email)) {
      actions.setFieldError(
          'email',
          "Please enter a proper email address",
      );
    } else if (!values.password) {
      actions.setFieldError(
          'password',
          "Please enter your password",
      );
    } else {
      props.login(values.email, values.password, (data) => {
        if (!data.success) {
          if (data.message === 'User not found') {
            actions.setFieldError(
                'email',
                "User not found. Create an account.",
            );
          } else if (data.message === 'Password mismatch') {
            actions.setErrors({
              password: data.message,
            });
          } else {
            actions.setFieldError(
                'globarErr',
                'Something went wrong. Contact Support',
            );
          }
        } else if (data.success) {
          props.getUser(() => {
          });
        }
      });
    }
  };

  const GoogleLogin = async () => {
    GoogleSignin.configure({
      offlineAccess: true,
      androidClientId: '842677161221-0v9s4rahatilr3lhn468ba9eot0bj2ec.apps.googleusercontent.com',
      webClientId: '842677161221-0v9s4rahatilr3lhn468ba9eot0bj2ec.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      let userData = {
        social_account_id: userInfo.user.id,
        social_account_type: 'gmail',
        social_account_profile_image_url: userInfo.user.photo,
        name: userInfo.user.name,
        social_account_email: userInfo.user.email,
        device_key: userInfo.user.id,
      };

      props.socialMediaLogin(userData, (data) => {
        if (!data.success) {
          Alert.alert('Be Fulfilled','Something went wrong. Contact Support');
        } else if (data.success) {
          props.getUser(() => {
          });
        }
      });
    } catch (error) {
      // console.log(error)
    }
  };

  const FacebookLogin = async () => {
    try {
      await LoginManager.logInWithPermissions(
          ['public_profile', 'email']
      );

      Profile.getCurrentProfile().then((currentProfile) => {
        if (currentProfile) {
          let userData = {
            social_account_id: currentProfile.userID,
            social_account_type: 'facebook',
            social_account_profile_image_url: currentProfile.imageURL,
            name: currentProfile.name,
            social_account_email: currentProfile.email,
            device_key: currentProfile.userID
          };

          props.socialMediaLogin(userData, (data) => {
            if (!data.success) {
              Alert.alert('Be Fulfilled','Something went wrong. Contact Support');
            } else if (data.success) {
              props.getUser(() => {
              });
            }
          });
        }
      });
    } catch (error) {
      // console.log(error);
    }
  };

  return (
      <ScrollView contentContainerStyle={styles.screen} keyboardShouldPersistTaps='handled'>
        <Loading loading={props.processing}/>
        <View style={styles.header}>
          <Text style={styles.headText}>Login</Text>
          <Text style={styles.subText}>
            Please enter your credentials to login
          </Text>
        </View>

        <Formik initialValues={initialValues} onSubmit={handleLogin}>
          {({handleChange, handleBlur, values, errors, handleSubmit}) => (
              <TextInputAvoidingView>
                <View style={styles.inputs}>
                  <Input
                      placeholder={'Email Address'}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      textContentType={'emailAddress'}
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      returnKeyType={'next'}
                      blurOnSubmit={false}
                      selectTextOnFocus={true}
                      onSubmitEditing={() => passwordInput.current.focus()}
                      errorMessage={errors.email}
                  />
                  <Input
                      ref={passwordInput}
                      placeholder="Password"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      secureTextEntry={isSecure}
                      autoCapitalize={'none'}
                      errorMessage={errors.password}
                      rightIcon={
                        <Icon
                            style={{paddingRight: 15}}
                            name={isSecure ? 'eye-off' : 'eye'}
                            size={20}
                            color="#C8C7C7"
                            onPress={() => setIsSecure(!isSecure)}
                        />
                      }
                  />
                </View>
                <TouchableOpacity
                    style={styles.forgotButton}
                    onPress={() => navigation.navigate('ResetSelection')}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>

                <Text
                    style={{
                      alignSelf: 'center',
                      marginVertical: '2%',
                      fontWeight: 'bold',
                      color: 'red',
                    }}>
                  {errors.globalErr ? errors.globalErr : ''}
                </Text>

                <View>
                  <CustomButton
                      buttonContainerStyle={styles.loginbtn}
                      buttonTextStyle={styles.loginBtn}
                      title={'Login'}
                      onPress={handleSubmit}
                  />

                  <CustomButton
                      buttonContainerStyle={styles.createAccountBtn}
                      buttonTextStyle={styles.createBtn}
                      title={'Create Account'}
                      onPress={() => navigation.navigate('CreateAccount')}
                  />
                </View>
              </TextInputAvoidingView>
          )}
        </Formik>
        <View style={styles.signup}>
          <Text>Or Sign up with social media</Text>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => GoogleLogin()} style={[styles.imageStyle, {backgroundColor: '#CD201F'}]}>
            <FontAwesome
                name={'google'}
                size={ScreenScale(24)}
                color={colors.WHITE}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => FacebookLogin()} style={[styles.imageStyle, {backgroundColor: '#3B5999'}]}>
            <FontAwesome
                name={'facebook'}
                size={ScreenScale(24)}
                color={colors.WHITE}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    processing: state.auth.processing,
  };
};
export default connect(mapStateToProps, {login, getUser, socialMediaLogin})(LoginScreen);
