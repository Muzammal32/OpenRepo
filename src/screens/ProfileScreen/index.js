import React, {useRef, useState} from 'react';
import {
    Alert,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Modal,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Text, View } from 'react-native';
import {colors, icons, images, theme} from '../../constants';

import styles from './style';
import RNImgToBase64 from "react-native-image-base64";
import ImagePicker from "react-native-image-crop-picker";
import {connect} from "react-redux";
import {Formik} from "formik";
import CustomButton from "../../components/CustomButton";
import {ScreenScale, validateEmail} from "../../utils/CommonHelper";
import LocationSelector from "../../components/LocationSelector";
import {editProfile, getUser} from "../../store/user/user-actions";

const options = {
    width: 300,
    height: 300,
    cropping: true,
};

const ProfileScreen = (props) => {
    const { navigation, route, user } = props;
    const [imageUri, setImageUri] = useState(user.profile);
    const [imageModal, setImageModal] = useState(false);
    const [base64Image, setBase64Image] = useState(null);
    const [city, setCity] = useState(user.city);
    const [locationSelector, setLocationSelector] = useState(false);

    const profileValues = {
        name: user.name,
        email: user.email,
        phone: user.phone_number,
        password: '',
        address: user.street_address,
        zipCode: user.zipcode,
        globalErr: '',
    };

    const email = useRef(null);
    const phone = useRef(null);
    const password = useRef(null);
    const address = useRef(null);
    const zipCode = useRef(null);


    const handleImage = image => {
        RNImgToBase64.getBase64String(image.path).then(base64String => {
            setBase64Image('data:image/jpeg;base64,'+base64String);
            setImageUri(image.path);
            setImageModal(false);
            const data = {
                profile: 'data:image/jpeg;base64,'+base64String,
            }
            // props.editProfile(data, (data)=>{
            //     if (data.success){
            //         // actions.setFieldError('Profile', data.message);
            //         props.getUser(()=>{});
            //     } else {
            //         // actions.setFieldError('Profile', data.message);
            //     }
            // });
        });
    };

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera(options).then(image => {
            handleImage(image);
        });
    };

    const takePhotoFromLibrary = () => {
        ImagePicker.openPicker(options).then(image => {
            handleImage(image);
        });
    };

    const handleEditProfile = (values, actions) =>{
        if (!values.name){
            actions.setFieldError(
                'name',
                "Please enter a proper name",
            );
        } else if (!validateEmail(values.email)){
            actions.setFieldError(
                'email',
                "Please enter a proper email address",
            );
        } else if (!values.phone) {
            actions.setFieldError(
                'phone',
                "Please enter your phone no.",
            );
        } else if (!values.address) {
            actions.setFieldError(
                'address',
                "Please enter your address",
            );
        } else if (!values.zipCode) {
            actions.setFieldError(
                'zipcode',
                "Please enter your zipcode",
            );
        } else if (!city) {
            actions.setFieldError(
                'city',
                "Please enter your city",
            );
        } else {
            const data = {
                name: values.name,
                email: values.email,
                profile: base64Image,
                phone_number: values.phone,
                city: city,
                zipcode: values.zipCode,
                street_address : values.address
            };
            if (values.password){
                data.password = values.password
            }
            props.editProfile(data, (data)=>{
                if (data.success){
                    actions.setFieldError('Profile', data.message);
                    props.getUser(()=>{});
                } else {
                    actions.setFieldError('Profile', data.message);
                }
            });

        }
    };

    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
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
                            <ModalIcons
                                source={icons.IMAGE_MODAL}
                                title="Open Camera"
                                onPress={takePhotoFromCamera}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            {locationSelector && (
                <LocationSelector
                    visible={locationSelector}
                    setLocationSelector={setLocationSelector}
                    onLocationSelect={location => {
                        setCity(location);
                        setLocationSelector(false);
                    }}
                />
            )}
            <View style={styles.profile_container}>
                <View>
                    <Image source={{uri: imageUri}} style={styles.profile_picture} />
                    <TouchableOpacity style={styles.upload_button} activeOpacity={0.7} onPress={()=>setImageModal(!imageModal)}>
                        <Image source={icons.CAMERA}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.profile_details}>
                    <Text style={styles.profile_name}>{user.name}</Text>
                    <Text style={styles.profile_company}>{user.city}</Text>
                </View>
            </View>
            <View style={styles.divider}/>

            <KeyboardAvoidingView style={styles.screen}>
                <Formik initialValues={profileValues} onSubmit={handleEditProfile}>
                    {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
                        <View>
                            {/* Username */}
                            <View style={styles.text_input_container}>
                                <Text style={styles.text_input_heading}>User Name</Text>
                                <View style={styles.text_input}>
                                    <TextInput
                                        style={styles.input_text}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        returnKeyType={'next'}
                                        blurOnSubmit={false}
                                        selectTextOnFocus={false}
                                        onSubmitEditing={() => email.current.focus()}
                                        errorMessage={errors.name}/>
                                    <Image source={icons.PENCIL}/>
                                </View>
                            </View>
                            <Text style={styles.errorStyle}>
                                {errors && errors.name}
                            </Text>
                            {/* Email Selection */}
                            <View style={styles.text_input_container}>
                                <Text style={styles.text_input_heading}>Email Address</Text>
                                <View style={styles.text_input}>
                                    <TextInput
                                        ref={email}
                                        style={styles.input_text}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        returnKeyType={'next'}
                                        blurOnSubmit={false}
                                        selectTextOnFocus={false}
                                        onSubmitEditing={() => phone.current.focus()}
                                        errorMessage={errors.email}/>
                                    <Image source={icons.PENCIL}/>
                                </View>
                            </View>
                            <Text style={styles.errorStyle}>
                                {errors && errors.email}
                            </Text>
                            {/* Mobile Selection */}
                            <View style={styles.text_input_container}>
                                <Text style={styles.text_input_heading}>Mobile Number</Text>
                                <View style={styles.text_input}>
                                    <TextInput
                                        ref={phone}
                                        style={styles.input_text}
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        value={values.phone}
                                        returnKeyType={'next'}
                                        blurOnSubmit={false}
                                        selectTextOnFocus={false}
                                        onSubmitEditing={() => password.current.focus()}
                                        errorMessage={errors.phone}/>
                                    <Image source={icons.PENCIL}/>
                                </View>
                            </View>
                            <Text style={styles.errorStyle}>
                                {errors && errors.phone}
                            </Text>
                            {/* Password Selection */}
                            <View style={styles.text_input_container}>
                                <Text style={styles.text_input_heading}>Passowrd</Text>
                                <View style={styles.text_input}>
                                    <TextInput
                                        ref={password}
                                        placeholder={'************'}
                                        style={styles.input_text}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        returnKeyType={'next'}
                                        secureTextEntry={true}
                                        blurOnSubmit={false}
                                        selectTextOnFocus={false}
                                        onSubmitEditing={() => address.current.focus()}
                                        errorMessage={errors.password}/>
                                    <Image source={icons.PENCIL}/>
                                </View>
                            </View>
                            {/* Street Address */}
                            <View style={styles.text_input_container}>
                                <Text style={styles.text_input_heading}>Address</Text>
                                <View style={styles.text_input}>
                                    <TextInput
                                        ref={address}
                                        style={styles.input_text}
                                        onChangeText={handleChange('address')}
                                        onBlur={handleBlur('address')}
                                        value={values.address}
                                        returnKeyType={'next'}
                                        blurOnSubmit={false}
                                        selectTextOnFocus={false}
                                        onSubmitEditing={() => zipCode.current.focus()}
                                        errorMessage={errors.address}/>
                                    <Image source={icons.PENCIL}/>
                                </View>
                            </View>
                            <Text style={styles.errorStyle}>
                                {errors && errors.address}
                            </Text>
                            {/* Zip Code */}
                            <View style={styles.text_input_container}>
                                <Text style={styles.text_input_heading}>Zip Code</Text>
                                <View style={styles.text_input}>
                                    <TextInput
                                        ref={zipCode}
                                        style={styles.input_text}
                                        onChangeText={handleChange('zipCode')}
                                        onBlur={handleBlur('zipCode')}
                                        value={values.zipCode}
                                        returnKeyType={'next'}
                                        blurOnSubmit={false}
                                        selectTextOnFocus={false}
                                        errorMessage={errors.zipCode}/>
                                    <Image source={icons.PENCIL}/>
                                </View>
                            </View>
                            <Text style={styles.errorStyle}>
                                {errors && errors.zipcode}
                            </Text>

                            {/* City Selection */}
                            <TouchableOpacity
                                onPress={() => setLocationSelector(true)}
                                activeOpacity={1} style={styles.text_input_container}>
                                <Text style={styles.text_input_heading}>City</Text>
                                <View style={styles.text_input}>
                                    <Text style={styles.input_text}>{city}</Text>
                                    <Image source={icons.PENCIL}/>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.errorStyle}>{errors && errors.city}</Text>

                            <View style={{marginBottom: ScreenScale(20)}}/>

                            <View>
                                <CustomButton
                                    buttonContainerStyle={styles.loginbtn}
                                    buttonTextStyle={styles.loginBtn}
                                    title={'Edit Profile'}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </KeyboardAvoidingView>
            <View style={[styles.divider,{borderColor: colors.BACKGROUND_CLR}]}/>

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

const mapStateToProps = (state) => {
    return {
        processing: state.auth.processing,
        user: state.auth.user,
    };
};
export default connect(mapStateToProps, {editProfile, getUser})(ProfileScreen);
