import React, {useState} from 'react';
import {Alert, Image, Modal, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from 'react-native';
import { theme} from '../../constants';
import { Formik } from 'formik';

import styles from './style';
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import {connect} from "react-redux";
import {feedBack} from "../../store/general/general-actions";
import Loading from "../../components/Loader";
import {ScreenScale} from "../../utils/CommonHelper";

const initialValues = {
    feedback: '',
    globalErr: '',
};

const radio_props = [
    {label: 'Very Satisfied', value: 'Very Satisfied'                                                                                                                                                            },
    {label: 'Neither Satisfied nor Dissatisfied?', value: 'Neither Satisfied nor Dissatisfied?' },
    {label: 'Dissatisfied', value: 'Dissatisfied' },
    {label: 'Very Dissatisfied', value: 'Very Dissatisfied' },
    {label: 'Cool!', value: 'Cool!' },

];

const GiveFeedbackScreen = (props) => {
    const [radioSelected, setRadioSelected] = useState('Neither Satisfied nor Dissatisfied?');
    const handleReport = (values, actions) => {
        if (!values.feedback){
            actions.setFieldError('feedback', 'Feedback Required!');
        }  else {
            const data = {
                service_status: radioSelected,
                what_wrong: values.feedback,
            };
            props.feedBack(data, (result) =>{
                if (!result.success) {
                    Alert.alert("Feedback", result.message)
                } else {
                    Alert.alert("Feedback", result.message)
                    props.navigation.goBack(null)
                }
            });
        }
    };



    return (
        <ScrollView style={styles.screen} contentContainerStyle={{paddingBottom: ScreenScale(55)}} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            <Loading loading={props.processing}/>
            <Text style={styles.choseText}>Overall, how did you feel about the service?</Text>

            <RadioForm
                initial={radioSelected}
                style={{marginTop:ScreenScale(20)}}>
                {
                    radio_props.map((obj, i,onPress) => (
                        <RadioButton labelHorizontal={true} key={i} style={{marginTop: ScreenScale(5), alignItems:'center'}}>
                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={radioSelected === obj.value}
                                onPress={(data)=>{setRadioSelected(data)}}
                                borderWidth={1}
                                buttonInnerColor={'#000'}
                                buttonOuterColor={ '#C8C7C7'}
                                buttonSize={10}
                                buttonOuterSize={20}
                                buttonStyle={{backgroundColor:'rgba(0, 16, 61, 0.06)'}}
                                buttonWrapStyle={{marginLeft: 10}}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={onPress}
                                labelStyle={{fontSize: 13, color: '#696969', marginBottom:5}}
                                labelWrapStyle={{}}
                            />
                        </RadioButton>
                    ))
                }
            </RadioForm>

            <Text style={styles.happenedText}>What's went wrong?</Text>
            <Formik initialValues={initialValues} onSubmit={handleReport}>
                {({ handleChange, touched,handleBlur, values, errors, handleSubmit }) => (
                    <>
                        <Input
                            label=""
                            inputstyle={{ height: hp('15%')}}
                            multiline={true}
                            onChangeText={handleChange('feedback')}
                            value={values.feedback}
                            autoCapitalize={'none'}
                            returnKeyType='done'
                            blurOnSubmit={false}
                            onBlur={handleBlur('feedback')}
                            selectTextOnFocus={true}
                        />
                        <Text style={styles.errorText}>
                            {errors.feedback && touched.feedback ? errors.feedback : ''}
                        </Text>

                        <Text style={styles.uploadText}>Please don't include any financial information for example your credit card number.</Text>


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
export default connect(mapStateToProps, {feedBack})(GiveFeedbackScreen);
