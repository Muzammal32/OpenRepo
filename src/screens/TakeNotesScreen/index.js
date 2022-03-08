import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, StatusBar, Keyboard, ScrollView} from 'react-native';
import styles from './styles';
import { Formik } from 'formik';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {colors, theme} from '../../constants';
import Divider from '../../components/Divider';
import style from './styles';
import {connect} from 'react-redux';
import {createNotes, getNotes} from '../../store/journal/journal-actions';
import {dateFormat, dayFormat} from "../../utils/CommonHelper";


const initialValues = {
  title_notes: '',
  notes_description: '',
  globalErr: '',
};

const TakeNotesScreen = (props) => {
  const { navigation } = props
  const handleNote = (values, actions) => {
    if (!values.title_notes){
      actions.setFieldError('title_notes', 'Title Required!');
    } else if (!values.notes_description){
      actions.setFieldError('notes_description', 'Please add some description!');
    } else {
      const model = {
        title_notes: values.title_notes,
        notes_description: values.notes_description,
      };
      props.createNotes(model, (response)=>{
        if (response.success){
          navigation.navigate('My Notes');
          getNoteList();
        }
      });
    }
  };

  const getNoteList = () => {
    props.getNotes((res) => {});
  };

  return (
    <ScrollView style={style.container} keyboardShouldPersistTaps='handled'>
      <StatusBar backgroundColor={colors.WHITE}/>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{dayFormat(Date.now())+', '+dateFormat(Date.now())}</Text>
      </View>
      <TouchableOpacity onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
        <Formik initialValues={initialValues} onSubmit={handleNote}>
          {({ handleChange, touched,handleBlur, values, errors, handleSubmit }) => (
              <>
                <Input
                    label="Title of your Note"
                    placeholder="I have account problem"
                    multiline={false}
                    maxLength={33}
                    onChangeText={handleChange('title_notes')}
                    value={values.title_notes}
                    autoCapitalize={'none'}
                    returnKeyType={'next'}
                    blurOnSubmit={false}
                    onBlur={handleBlur('title_notes')}
                    selectTextOnFocus={true}
                />
                <Text style={styles.errorText}>
                  {errors.title_notes && touched.title_notes ? errors.title_notes : ''}
                </Text>
                <Divider vertical={15} />
                <Input
                    label="Note"
                    inputstyle={{ height: hp('28%')}}
                    multiline={true}
                    onChangeText={handleChange('notes_description')}
                    value={values.notes_description}
                    autoCapitalize={'none'}
                    returnKeyType='done'
                    blurOnSubmit={false}
                    onBlur={handleBlur('notes_description')}
                    selectTextOnFocus={true}
                />
                <Text style={styles.errorText}>
                  {errors.notes_description && touched.notes_description ? errors.notes_description : ''}
                </Text>
                <CustomButton onPress={handleSubmit} />
              </>
          )}
        </Formik>
      </TouchableOpacity>
    </ScrollView>
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

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={theme.TOUCH_OPACITY}
      onPress={onPress}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => {
  return {
    processing: state.journal.processing
  };
};
export default connect(mapStateToProps, {createNotes, getNotes})(TakeNotesScreen);
