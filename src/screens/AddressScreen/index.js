import { Formik } from 'formik';
import React, { useRef, useState } from 'react';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView, ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, icons} from '../../constants';
import CustomButton from '../../components/CustomButton';
import LocationSelector from '../../components/LocationSelector';
import styles from './styles';
import {connect} from 'react-redux';
import {setRegistrationInfo} from '../../store/user/user-actions';
import Icon from "../../components/Icon";
import {ScreenScale} from "../../utils/CommonHelper";
import Loading from "../../components/Loader";

/**
 * Address Screen Component
 * @returns JSX
 */
const AddressScreen = (props) => {
  const { navigation, route } = props
  const addressInput = useRef(null);

  const [city, setCity] = useState(null);
  const [locationSelector, setLocationSelector] = useState(false);

  const handleRegistration = (values, actions) => {
    const {params} = route;
    const {userInfo} = params;
    const data = {
      name: userInfo.name,
      email: userInfo.email,
      password : userInfo.password,
      password_confirmation: userInfo.password_confirmation,
      profile: userInfo.profile,
      phone_number : userInfo.phone,
      city: city,
      zipcode: values.zipCode,
      street_address : values.address
    };

    console.log(data)



    props.setRegistrationInfo(data, (result) =>{
      if (!result.success) {
        Alert.alert("Register", result.message)
      } else {
        navigation.reset({
          index:0,
          actions: [
            navigation.navigate("Login"),
          ],
        })
      }
    });
  };

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <Loading loading={props.processing}/>
      <KeyboardAvoidingView
        style={styles.keyboardScrollContainer}
        behavior={'height'}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.stepText}>STEP 04/04</Text>
          <Text style={styles.headText}>Create a New Account</Text>
          <Text style={styles.subText}>Profile and House Address</Text>
        </View>

        <Formik
          initialValues={{
            zipCode: '',
            address: '',
            city,
          }}
          onSubmit={handleRegistration}>
          {({ handleChange, handleBlur, values, errors, handleSubmit }) => (
            <View style={styles.textInputContainer}>
              {/* City Selection */}
              <View>
                <Text style={styles.textInput}>Select Your City</Text>
                <TouchableOpacity
                  onPress={() => setLocationSelector(true)}
                  activeOpacity={1}
                  style={styles.inputContainer}>
                  <Text
                    style={[
                      styles.singleFlex,
                      city ? styles.textInputText : styles.neutralTextInputText,
                    ]}>
                    {city ? city : 'New York'}
                  </Text>
                  <View style={styles.iconContainer}>
                    <Icon name={'arrow_down_icon'} color={colors.PRIMARY} size={ScreenScale(18)} />
                  </View>
                </TouchableOpacity>
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
                title={'Complete Sign Up'}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
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
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    processing: state.auth.processing,
  };
};
export default connect(mapStateToProps, {setRegistrationInfo})(AddressScreen);

