import React, {useRef, useState} from 'react';
import {
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert, ScrollView,
} from 'react-native';
import { Formik } from 'formik';

import styles from './styles';
import {colors, icons, theme} from '../../constants';
import ImagePicker from 'react-native-image-crop-picker';
import CustomButton from '../../components/CustomButton';
import {connect, useDispatch} from 'react-redux';
import RNImgToBase64 from 'react-native-image-base64';
import {checkPhoneExist, requestRegisterOTP} from '../../store/user/user-actions';
import TextInputAvoidingView from "../../components/TextInputAvoidingView";
import PhoneInput from "react-native-phone-number-input";
import {ScreenScale} from "../../utils/CommonHelper";
import Icon from "../../components/Icon";
import Loading from "../../components/Loader";

const options = {
  width: 300,
  height: 300,
  cropping: true,
};

const AvatarAndPhoneScreen = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const [imageUri, setImageUri] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const [base64Image, setBase64Image] = useState(null);
  const phoneInput = useRef(null);

  const initialValues = {
    phone: '',
    globalErr: '',
  };

  const handleImage = image => {
    RNImgToBase64.getBase64String(image.path).then(base64String => {
      setBase64Image('data:image/jpeg;base64,'+base64String);
      setImageUri(image.path);
      setImageModal(false);
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

  // +923086529243
  const handleVerification = async ({ phone }, actions) => {

    if (!imageUri || !base64Image) {
      Alert.alert(
        'Profile Picture Missing',
        'Kindly, pick a profile picture before proceeding,',
      );
      return;
    } else if (!phone) {
      actions.setFieldError('phone', 'Please Enter Your Phone Number');
      return;
    }
    else if (!phoneInput.current?.isValidNumber(phone)) {
      actions.setFieldError('phone', 'Please Enter Valid Phone Number');
      return;
    }

    props.checkPhoneExist(phone, (data)=>{
      if (data.success){
        actions.setFieldError('phone', data.message);
      } else {
        props.requestRegisterOTP(phone, (data)=>{
          navigate('OTP', {userInfo : {...props.route.params.userInfo, ...{profile: base64Image, phone: '+'+phoneInput.current?.getCallingCode()+phone}}, otp: "1234"});
          // if (data.success){
          //
          // }
        });
      }
    });
  };

  let defaultImage;
  if (imageUri) {
    defaultImage = { uri: imageUri };
  } else {
    defaultImage = '';
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
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
                source={'image_icon'}
                title="Phone Storage"
                onPress={takePhotoFromLibrary}
              />
              <ModalIcons
                source={'camera_icon'}
                title="Open Camera"
                onPress={takePhotoFromCamera}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <TextInputAvoidingView style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.stepText}>STEP 03/04</Text>
          <Text style={styles.headText}>Create a New Account</Text>
          <Text style={styles.subText}>Profile and Phone Number</Text>
        </View>
        <TouchableOpacity
          style={styles.camera}
          onPress={() => setImageModal(true)}>
          {defaultImage ?
              <Image
                  style={[
                    styles.icon,
                    {
                      height: imageUri ? '100%' : '50%',
                      width: imageUri ? '100%' : '50%',
                    },
                  ]}
                  source={defaultImage}
              />:
              <Icon name={'add_icon'} size={ScreenScale(44)} color={colors.BLACK} />
          }
          <View style={styles.iconCameraContainer}>
            <Icon name={'camera_icon-1'} size={ScreenScale(26)} color={colors.WHITE} />
          </View>
        </TouchableOpacity>
        <Text style={styles.chooseText}>Choose Your Profile Picture</Text>
        <View style={styles.seperator} />
        <Formik initialValues={initialValues} onSubmit={handleVerification}>
          {({
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            handleSubmit,
          }) => (
            <>
              <View style={styles.textInputContainer}>
                <Text style={styles.textInput}>Phone Number</Text>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={values.phone}
                    containerStyle={styles.input}
                    textInputStyle={{height: ScreenScale(70)}}
                    defaultCode="US"
                    onChangeText={handleChange('phone')}
                    layout={'first'}
                    withShadow
                    autoFocus
                />
                <Text style={styles.errorText}>
                  {errors.phone && touched.phone ? errors.phone : ''}
                </Text>
                <CustomButton
                  buttonContainerStyle={styles.nextBtn}
                  buttonTextStyle={styles.titleStyle}
                  title={'Request Verification'}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </TextInputAvoidingView>
    </ScrollView>
  );
};

const ModalIcons = ({ source, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modalIcon}>
        <Icon name={source} size={ScreenScale(80)} color={colors.PRIMARY}/>
      </View>
      <Text style={styles.iconText}>{title}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => {
  return {
    processing: state.auth.processing,
  };
};
export default connect(mapStateToProps, {checkPhoneExist, requestRegisterOTP})(AvatarAndPhoneScreen);
