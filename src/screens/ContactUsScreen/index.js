import React, {useState} from 'react';
import {Alert, Image, Modal, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from 'react-native';
import { theme} from '../../constants';
import { Formik } from 'formik';

import styles from './style';
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import {connect} from "react-redux";
import {contactUS} from "../../store/general/general-actions";
import Loading from "../../components/Loader";
import {ScreenScale} from "../../utils/CommonHelper";

const initialValues = {
    title: '',
    details: '',
    globalErr: '',
};

const ContactUsScreen = (props) => {

    const handleReport = (values, actions) => {
        if (!values.title){
            actions.setFieldError('title', 'Title Required!');
        } else if (!values.details){
            actions.setFieldError('details', 'Message Required!');
        } else {
            const data = {
                subject: values.title,
                message: values.details
            };
            props.contactUS(data, (result) =>{
                if (!result.success) {
                    Alert.alert("Contact Us", result.message)
                } else {
                    Alert.alert("Contact Us", result.message)
                    props.navigation.goBack(null)
                }
            });
        }
    };

    const [radioSelected, setRadioSelected] = useState(1);

    return (
        <ScrollView style={styles.screen} keyboardShouldPersistTaps='handled'>
            <Loading loading={props.processing}/>
            <Formik initialValues={initialValues} onSubmit={handleReport}>
                {({ handleChange, touched,handleBlur, values, errors, handleSubmit }) => (
                    <>
                        <Text style={styles.happenedText}>Subject</Text>
                        <Input
                            label=""
                            inputstyle={{ height: ScreenScale(40)}}
                            onChangeText={handleChange('title')}
                            value={values.title}
                            autoCapitalize={'none'}
                            returnKeyType='done'
                            blurOnSubmit={false}
                            onBlur={handleBlur('title')}
                            selectTextOnFocus={true}
                        />
                        <Text style={styles.errorText}>
                            {errors.title && touched.title ? errors.title : ''}
                        </Text>
                        <Text style={styles.happenedText}>Your Message</Text>
                        <Input
                            label=""
                            inputstyle={{ height: hp('15%')}}
                            multiline={true}
                            onChangeText={handleChange('details')}
                            value={values.title}
                            autoCapitalize={'none'}
                            returnKeyType='done'
                            blurOnSubmit={false}
                            onBlur={handleBlur('details')}
                            selectTextOnFocus={true}
                        />
                        <Text style={styles.errorText}>
                            {errors.details && touched.details ? errors.details : ''}
                        </Text>
                        <CustomButton onPress={handleSubmit}/>
                    </>
                )}
            </Formik>
        </ScrollView>
    );
};

const CustomButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={theme.TOUCH_OPACITY}
            onPress={onPress}>
            <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
    );
};


const Input = ({
                   label,
                   placeholder,
                   inputstyle,
                   multiline,
                   maxLength,
                   onChangeText,

               }) => {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer, inputstyle]}>
                <TextInput
                    style={styles.textContainer}
                    placeholder={placeholder}
                    multiline={multiline}
                    numberOfLines={8}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                    autoCorrect={false}
                    placeholderTextColor={'#B4B4B4'}
                />
            </View>
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        processing: state.general.processing,
    };
};
export default connect(mapStateToProps, {contactUS})(ContactUsScreen);
