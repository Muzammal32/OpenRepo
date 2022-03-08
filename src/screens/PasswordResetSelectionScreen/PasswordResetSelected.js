import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView, StatusBar, Text, TextInput, View} from 'react-native';
import {colors} from '../../constants';

import styles from './styles';
import Loading from '../../components/Loader';
import {Formik} from 'formik';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import {connect} from 'react-redux';
import {validateEmail, validateMobileNumber} from '../../utils/CommonHelper';
import {requestForgetEmail, requestForgetPhone} from '../../store/user/user-actions';

const initialValues = {
    email: '',
    phone: ''
};

const PasswordResetSelectedScreen = (props) => {
    const {navigation} = props;
    const { navigate } = navigation;
    let [type ,setType] = useState(props.route.params.type);

    const handleReset = async ({email,phone}, actions) => {
        if (type === 'email'){
             if (!validateEmail(email)){
                 actions.setFieldError('email', "Please enter a valid email!");
             } else {
                 props.requestForgetEmail(email, (res)=>{
                     if (!res.success){
                         actions.setFieldError('email', res.message);
                     } else {
                         navigate('PhoneReset', {userInfo : {email:email}, otp: res.data.code, type: 'Email'});
                     }
                 });
             }
        } else if (type === 'phone'){
            if (!validateMobileNumber(phone)){
                actions.setFieldError('phone', "Please enter a valid phone number!");
            } else {
                props.requestForgetPhone(phone, (res)=>{
                    if (!res.success){
                        actions.setFieldError('phone', res.message);
                    } else {
                        navigate('PhoneReset', {userInfo : {phone: phone}, otp: res.data.code, type: 'Phone'});
                    }
                });
            }
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={'height'}
            keyboardVerticalOffset={5}>
            <Loading loading={props.processing}/>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.BON_JOUR}/>
            <Text style={styles.headText}>Reset Password</Text>
            <Text style={styles.subText}>
                Please enter your {type} to reset your password
            </Text>
            <Formik
                initialValues={initialValues}
                onSubmit={handleReset}>
                {({
                      handleChange,
                      handleBlur,
                      values,
                      errors,
                      handleSubmit,
                      touched,
                  }) => (
                    <>
                        <ScrollView showsVerticalScrollIndicator={false}  keyboardShouldPersistTaps='handled'>
                            <View style={styles.allInputContainer}>
                                {type === "email" && (
                                    <>
                                        <Text style={styles.textInput}>Email Address</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="nvt.isst.nute@gmail.com"
                                            placeholderTextColor={'lightgrey'}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                            textContentType={'emailAddress'}
                                            autoCapitalize={'none'}
                                            autoCorrect={false}
                                            returnKeyType={'next'}
                                            blurOnSubmit={false}
                                            selectTextOnFocus={true}
                                        />
                                        <Text style={styles.errorText}>
                                            {errors.email && touched.email ? errors.email : ''}
                                        </Text>
                                    </>
                                )}

                                {type === "phone" && (
                                    <>
                                        <Text style={styles.textInput}>Phone Number</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder={'088-01719059846'}
                                            keyboardType={'phone-pad'}
                                            returnKeyType={'done'}
                                            placeholderTextColor={'lightgrey'}
                                            value={values.phone}
                                            onChangeText={handleChange('phone')}
                                            onBlur={handleBlur('phone')}
                                        />
                                        <Text style={styles.errorText}>
                                            {errors.phone && touched.phone ? errors.phone : ''}
                                        </Text>
                                    </>
                                )}
                            </View>
                            <CustomButton
                                buttonContainerStyle={styles.nextBtn}
                                buttonTextStyle={styles.titleStyle}
                                title="Next"
                                onPress={handleSubmit}
                            />
                        </ScrollView>
                    </>
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
export default connect(mapStateToProps, {requestForgetPhone, requestForgetEmail})(PasswordResetSelectedScreen);

