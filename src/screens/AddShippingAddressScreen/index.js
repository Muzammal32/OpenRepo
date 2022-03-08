import { Formik } from 'formik';
import React, { useRef, useState } from 'react';
import {
    Alert,
    Image,
    Keyboard,
    KeyboardAvoidingView, ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './style';
import {connect} from 'react-redux';
import {addAddress} from "../../store/products/products-actions";
/**
 * Address Screen Component
 * @returns JSX
 */
const AddShippingAddressScreen = (props) => {
    const { navigation, route } = props
    const addressInput = useRef(null);

    const [locationSelector, setLocationSelector] = useState(false);

    const handleRegistration = (values, actions) => {
        const data = {
            city: values.city,
            zip_code: values.zipCode,
            street_address : values.address
        };

        props.addAddress(data, (result) =>{
            if (!result.success) {
                Alert.alert("Address", result.message)
            } else {
                navigation.goBack(null)
            }
        });
    };

    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <KeyboardAvoidingView
                style={styles.keyboardScrollContainer}
                behavior={'height'}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.subText}>Shipping Address</Text>
                </View>

                <Formik
                    initialValues={{
                        zipCode: '',
                        address: '',
                        city: '',
                    }}
                    onSubmit={handleRegistration}>
                    {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
                        <View style={styles.textInputContainer}>
                            {/* City Selection */}
                            <View>
                                <Text style={styles.textInput}>Your City</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                    textContentType={'city'}
                                    autoCorrect={false}
                                    returnKeyType={'next'}
                                    blurOnSubmit={false}
                                    selectTextOnFocus={true}
                                    onSubmitEditing={() => addressInput.current.focus()}
                                />
                                <Text style={styles.errorStyle}>{errors && errors.city}</Text>
                            </View>

                            {/* Zip Code */}
                            <View>
                                <Text style={styles.textInput}>Zip Code</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('zipCode')}
                                    onBlur={handleBlur('zipCode')}
                                    value={values.zipCode}
                                    textContentType={'postalCode'}
                                    autoCorrect={false}
                                    returnKeyType={'next'}
                                    blurOnSubmit={false}
                                    selectTextOnFocus={true}
                                    onSubmitEditing={() => addressInput.current.focus()}
                                />
                                <Text style={styles.errorStyle}>
                                    {errors && errors.zipCode}
                                </Text>
                            </View>

                            {/* Street Address */}
                            <View>
                                <Text style={styles.textInput}>Street Address</Text>
                                <TextInput
                                    ref={addressInput}
                                    style={styles.multiline}
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}
                                    textContentType={'fullStreetAddress'}
                                    autoCapitalize={'words'}
                                    autoCorrect={false}
                                    returnKeyType={'done'}
                                    onSubmitEditing={() => Keyboard.dismiss()}
                                    numberOfLine={3}
                                    blurOnSubmit={false}
                                    selectTextOnFocus={true}
                                    multiline
                                />
                                <Text style={styles.errorStyle}>
                                    {errors && errors.address}
                                </Text>
                            </View>

                            {/* Complete Sign Up Button */}

                            <CustomButton
                                buttonContainerStyle={styles.signUpBtn}
                                buttonTextStyle={styles.signUpBtnText}
                                title={'Add New Address'}
                                onPress={handleSubmit}
                            />
                        </View>
                    )}
                </Formik>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.auth.processing,
    };
};
export default connect(mapStateToProps, {addAddress})(AddShippingAddressScreen);

