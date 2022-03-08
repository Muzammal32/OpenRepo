import CustomButton from '../../components/CustomButton';
import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Text,
    TextInput,
    View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import Validation from './validation';
import {checkEmailExist} from '../../store/user/user-actions';
import Loading from '../../components/Loader';
import TextInputAvoidingView from "../../components/TextInputAvoidingView";

const initialValues = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    globalErr: '',
};

const CreateAccountScreen = (props) => {
    const {navigation} = props;
    const {navigate} = navigation;
    const passwordInput = useRef(null);
    const passwordInput1 = useRef(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(
        true,
    );

    const handleRegister = async ({
                                      name,
                                      email,
                                      password,
                                      password_confirmation,
                                  }, actions) => {
        const model = {
            name,
            email,
            password,
            password_confirmation,
        };
        props.checkEmailExist(email, (data) => {
            if (data.success) {
                actions.setFieldError('email', data.message);
            } else {
                navigate('Agreement', {userInfo: model});
            }
        });
    };

    return (
        <View
            style={styles.screen}>
            <Loading loading={props.processing}/>
            <View style={styles.header}>
                <Text style={styles.stepText}>STEP 01/04</Text>
                <Text style={styles.headText}>Create a New Account</Text>
                <Text style={styles.subText}>Account Information</Text>
            </View>

            <Formik
                initialValues={initialValues}
                onSubmit={handleRegister}
                validationSchema={Validation}>
                {({
                      handleChange,
                      handleBlur,
                      values,
                      errors,
                      handleSubmit,
                      touched,
                  }) => (
                    <>
                        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
                            <TextInputAvoidingView
                                style={styles.screen}>
                                <View style={styles.allInputContainer}>
                                    <Text style={styles.textInput}>User Name</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder={'Ralph Edwards'}
                                        placeholderTextColor={'lightgrey'}
                                        autoCapitalize={'none'}
                                        autoCorrect={false}
                                        keyboardType="default"
                                        maxLength={33}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                    />
                                    <Text style={styles.errorText}>
                                        {errors.name && touched.name ? errors.name : ''}
                                    </Text>

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
                                        onSubmitEditing={() => passwordInput.current.focus()}
                                    />
                                    <Text style={styles.errorText}>
                                        {errors.email && touched.email ? errors.email : ''}
                                    </Text>

                                    <View>
                                        <Text style={styles.textInput}>Create Password</Text>
                                        <View style={styles.passwordInputContainer}>
                                            <TextInput
                                                style={styles.passwordInput}
                                                placeholder="********"
                                                placeholderTextColor={'lightgrey'}
                                                ref={passwordInput}
                                                value={values.password}
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                secureTextEntry={isPasswordVisible}
                                                autoCapitalize={'none'}
                                                onSubmitEditing={() => passwordInput1.current.focus()}
                                            />
                                            <Icon
                                                style={styles.imageStyle}
                                                name={isPasswordVisible ? 'eye' : 'eye-off'}
                                                size={20}
                                                color="#C8C7C7"
                                                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                            />
                                        </View>
                                    </View>
                                    <Text style={styles.errorText}>
                                        {errors.password && touched.password ? errors.password : ''}
                                    </Text>

                                    <View>
                                        <Text style={styles.textInput}>Confirm Password</Text>
                                        <View style={styles.passwordInputContainer}>
                                            <TextInput
                                                style={styles.passwordInput}
                                                placeholder="********"
                                                placeholderTextColor={'lightgrey'}
                                                ref={passwordInput1}
                                                value={values.password_confirmation}
                                                onChangeText={handleChange('password_confirmation')}
                                                onBlur={handleBlur('password_confirmation')}
                                                secureTextEntry={isConfirmPasswordVisible}
                                                autoCapitalize={'none'}
                                            />
                                            <Icon
                                                style={styles.imageStyle}
                                                name={
                                                    isConfirmPasswordVisible ? 'eye' : 'eye-off'
                                                }
                                                size={20}
                                                color="#C8C7C7"
                                                onPress={() =>
                                                    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                                                }
                                            />
                                        </View>
                                    </View>
                                    <Text style={styles.errorText}>
                                        {errors.password_confirmation && touched.password_confirmation
                                            ? errors.password_confirmation
                                            : ''}
                                    </Text>
                                </View>
                                <CustomButton
                                    buttonContainerStyle={styles.nextBtn}
                                    buttonTextStyle={styles.titleStyle}
                                    title="Next"
                                    onPress={handleSubmit}
                                />
                            </TextInputAvoidingView>
                        </ScrollView>
                    </>
                )}
            </Formik>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.auth.processing,
    };
};
export default connect(mapStateToProps, {checkEmailExist})(CreateAccountScreen);
