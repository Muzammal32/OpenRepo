import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Formik} from 'formik';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import CustomButton from '../../components/CustomButton';
import {connect} from 'react-redux';
import {requestForget} from '../../store/user/user-actions';

const initialValues = {
    password: '',
    confirmed_password: '',
    globalErr: '',
};

const ResetPasswordScreen = (props) => {

    const {navigation,route} = props

    const [isSecure, setIsSecure] = useState(true);

    const passwordInput = useRef(null);

    const handleReset = (values, actions) => {
        if (!values.password) {
            actions.setFieldError('password', 'Enter Your New Password');
        } else if (values.password !== values.confirmed_password) {
            actions.setFieldError('confirmed_password', 'Password Mismatch!');
        } else {
            if (route.params.userInfo.hasOwnProperty('phone')){
                let data = {
                    password : values.password,
                    user: route.params.userInfo.phone
                }
                props.requestForget(data, (res)=>{
                    if (res.success){
                        navigation.navigate('ResetVerification')
                    } else {
                        actions.setFieldError('password', data.message);
                    }
                });
            } else  if (route.params.userInfo.hasOwnProperty('email')){
                let data = {
                    password : values.password,
                    user: route.params.userInfo.email
                }
                props.requestForget(data, (res)=>{
                    if (res.success){
                        navigation.navigate('ResetVerification')
                    } else {
                        actions.setFieldError('password', data.message);
                    }
                });
            }
        }
    };

    return (
        <KeyboardAvoidingView style={styles.screen} behavior="height">
            <Text style={styles.headText}>Reset Password</Text>
            <Formik
                initialValues={initialValues}
                onSubmit={handleReset}>
                {({handleChange, handleBlur, values, touched, errors, handleSubmit}) => (
                    <ScrollView keyboardShouldPersistTaps='handled'>
                        <View style={styles.inputContainer}>
                            <Input
                                ref={passwordInput}
                                placeholder="New Password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry={isSecure}
                                autoCapitalize={'none'}
                                rightIcon={
                                    <Icon
                                        style={styles.imageStyle}
                                        name={isSecure ? 'eye' : 'eye-off-outline'}
                                        size={20}
                                        color="#C8C7C7"
                                        onPress={() => setIsSecure(!isSecure)}
                                    />
                                }
                            />
                            <Text style={styles.errorText}>
                                {errors.password && touched.password ? errors.password : ''}
                            </Text>

                            <Input
                                ref={passwordInput}
                                placeholder="Confirmed Password"
                                value={values.confirmed_password}
                                onChangeText={handleChange('confirmed_password')}
                                onBlur={handleBlur('confirmed_password')}
                                secureTextEntry={isSecure}
                                autoCapitalize={'none'}
                                rightIcon={
                                    <Icon
                                        style={styles.imageStyle}
                                        name={isSecure ? 'eye' : 'eye-off-outline'}
                                        size={20}
                                        color="#C8C7C7"
                                        onPress={() => setIsSecure(!isSecure)}
                                    />
                                }
                            />
                        </View>
                        <Text style={styles.errorText}>
                            {errors.confirmed_password && touched.confirmed_password ? errors.confirmed_password : ''}
                        </Text>

                        <CustomButton
                            buttonContainerStyle={styles.loginbtn}
                            buttonTextStyle={styles.loginText}
                            title="Save New Password"
                            onPress={handleSubmit}
                        />
                    </ScrollView>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.auth.processing,
    };
};
export default connect(mapStateToProps, {requestForget})(ResetPasswordScreen);

