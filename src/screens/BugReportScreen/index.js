import React, {useState} from 'react';
import {Alert, Image, Modal, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Text, View } from 'react-native';
import {icons, theme} from '../../constants';
import { Formik } from 'formik';

import styles from './style';
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import RNImgToBase64 from "react-native-image-base64";
import ImagePicker from "react-native-image-crop-picker";
import {connect} from "react-redux";
import {BugReport} from "../../store/general/general-actions";
import Loading from "../../components/Loader";

const initialValues = {
    bug_report: '',
    globalErr: '',
};

const options = {
    width: 300,
    height: 300,
    cropping: true,
};

const BugReportScreen = (props) => {
    const [imageUri, setImageUri] = useState(null);
    const [imageModal, setImageModal] = useState(false);
    const [base64Image, setBase64Image] = useState(null);

    const handleImage = image => {
        RNImgToBase64.getBase64String(image.path).then(base64String => {
            setBase64Image('data:image/jpeg;base64,'+base64String);
            setImageUri(image.path);
            setImageModal(false);
        });
    };

    const takePhotoFromLibrary = () => {
        ImagePicker.openPicker(options).then(image => {
            handleImage(image);
        });
    };

    const handleReport = (values, actions) => {
        if (!imageUri || !base64Image) {
            Alert.alert(
                'Bug Picture Missing',
                'Kindly, pick a picture or a screenshot before proceeding, thanks!',
            );
        } else if (!values.bug_report){
            actions.setFieldError('bug_report', 'Report Details Required!');
        }  else {
            const data = {
                description: values.bug_report,
                link: base64Image
            };
            props.BugReport(data, (result) =>{
                if (!result.success) {
                    Alert.alert("Bug Report", result.message)
                } else {
                    Alert.alert("Bug Report", result.message)
                    props.navigation.goBack(null)
                }
            });
        }
    };

    return (
        <ScrollView style={styles.screen} keyboardShouldPersistTaps='handled'>
            <Loading loading={props.processing}/>
            <Modal transparent={true} visible={imageModal} animationType="slide">
                <TouchableOpacity
                    style={styles.headModalContainer}
                    onPress={() => setImageModal(false)}
                    activeOpacity={theme.TOUCH_OPACITY}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalHeadText}>Choose Picture From</Text>
                        <View style={styles.modalIconContainer}>
                            <ModalIcons
                                source={icons.STORAGE_MODAL}
                                title="Phone Storage"
                                onPress={takePhotoFromLibrary}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Text style={styles.happenedText}>What is happened?</Text>
            <Formik initialValues={initialValues} onSubmit={handleReport}>
                {({ handleChange, touched,handleBlur, values, errors, handleSubmit }) => (
                   <>
                       <Input
                           label=""
                           inputstyle={{ height: hp('15%')}}
                           multiline={true}
                           onChangeText={handleChange('bug_report')}
                           value={values.bug_report}
                           autoCapitalize={'none'}
                           returnKeyType='done'
                           blurOnSubmit={false}
                           onBlur={handleBlur('bug_report')}
                           selectTextOnFocus={true}
                       />
                       <Text style={styles.errorText}>
                           {errors.bug_report && touched.bug_report ? errors.bug_report : ''}
                       </Text>

                       <Text style={styles.uploadText}>You can Upload Image file.</Text>

                       <CustomButton onPress={()=>setImageModal(!imageModal)} />

                       <CustomButtonUpload onPress={handleSubmit}/>
                   </>
                )}
            </Formik>
        </ScrollView>
    );
};

const ModalIcons = ({ source, title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.modalIcon}>
                <Image source={source} />
            </View>
            <Text style={styles.iconText}>{title}</Text>
        </TouchableOpacity>
    );
};


const CustomButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button1}
            activeOpacity={theme.TOUCH_OPACITY}
            onPress={onPress}>
            <Image source={icons.UPLOAD}/>
            <Text style={styles.buttonText1}>Upload File</Text>
        </TouchableOpacity>
    );
};

const CustomButtonUpload = ({ onPress }) => {
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
export default connect(mapStateToProps, {BugReport})(BugReportScreen);
