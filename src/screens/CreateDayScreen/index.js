import React, {useEffect, useState} from 'react';
import {
    Alert,
    FlatList,
    Image,
    Keyboard,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import styles from './styles';
import Divider from '../../components/Divider';
import {colors, icons, theme} from '../../constants';
import {Formik} from 'formik';
import {connect} from 'react-redux';
import {createDay, getDaysQuestions} from '../../store/journal/journal-actions';
import {dateFormat, dateFormatApi, dayFormat} from "../../utils/CommonHelper";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const initialValues = {
    answer: '',
    daily_question_id: '',
    globalErr: '',
};

const CreateDayScreen = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(dateFormat(Date.now()));

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        let datePicked = dateFormat(date);
        setSelectedDate(datePicked)
        props.getDaysQuestions(datePicked,(res) => {
            if (!res.success) {
                Alert.alert('Error', res.message);
            }
        });
    };

    useEffect(() => {
        props.getDaysQuestions(selectedDate,(res) => {
            if (!res.success) {
                Alert.alert('Error', res.message);
            }
        });
    }, []);

    const onRefresh = () => {
        props.getDaysQuestions(selectedDate,(res) => {
            if (!res.success) {
                Alert.alert('Error', res.message);
            }
        });
    };


    return (
        <>
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
                <TouchableOpacity style={styles.dateContainer} activeOpacity={0.8} onPress={()=>showDatePicker()}>
                    <Text style={styles.dateText}>{dayFormat(selectedDate)+', '+dateFormat(selectedDate)}</Text>
                    <Image source={icons.DROP_DOWN} style={{marginLeft: 10, width: 15, height:10, alignSelf:"center" }}/>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    minimumDate={new Date()}
                    date={new Date(selectedDate)}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <FlatList
                    data={props.questionList}
                    refreshing={false}
                    onRefresh={onRefresh}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <Divider vertical={12}/>}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({item}) => {
                        return <AddGoal item={item} props={props} date={selectedDate}/>;
                    }}
                />
            </View>
        </>
    );
};

const AddGoal = ({item, props, date}) => {
    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <Divider vertical={6}/>
            <View style={styles.inputMainContainer}>
                <Text style={styles.daysContainer}>{item.question}</Text>
                <Input
                    placeholder={item.question}
                    multiline={true}
                    title="save"
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textUsed}
                    props={props}
                    item={item}
                    date={date}
                />
            </View>
            <Divider vertical={6}/>
        </ScrollView>
    );
};

const Input = ({
                   placeholder, multiline, maxLength, textStyle, buttonStyle,
                   title, props, item, date
               }) => {

    const handleDay = values => {
        const model = {
            answer: values.answer,
            daily_question_id: item.id,
            day : dateFormatApi(date)
        };
        props.createDay(model, (res) => {
          if (!res.success) {
            Alert.alert('Error', res.message);
          }
          else {
            Alert.alert('Success', res.message);
            props.navigation.navigate('Your Record');
          }
        });
    };

    return (
        <TouchableOpacity onPress={() => Keyboard.dismiss()} activeOpacity={1}>
            <Formik initialValues={initialValues} onSubmit={handleDay}>
                {({handleChange, handleBlur, values, errors, handleSubmit}) => (
                    <ScrollView keyboardShouldPersistTaps='handled'>
                        <View style={[styles.inputContainer]}>
                            <TextInput
                                style={styles.textContainer}
                                placeholder={placeholder}
                                multiline={multiline}
                                numberOfLines={8}
                                maxLength={maxLength}
                                placeholderTextColor={'#B4B4B4'}
                                autoCorrect={false}
                                onChangeText={handleChange('answer')}
                                value={values.answer}
                                autoCapitalize={'none'}
                                returnKeyType={'next'}
                                blurOnSubmit={false}
                                onBlur={handleBlur('answer')}
                                selectTextOnFocus={true}
                                clearButtonMode="always"
                            />
                        </View>
                        <TouchableOpacity
                            style={[styles.button, buttonStyle]}
                            activeOpacity={theme.TOUCH_OPACITY}
                            onPress={handleSubmit}>
                            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
            </Formik>
        </TouchableOpacity>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.journal.processing,
        questionList: state.journal.questionList,
    };
};
export default connect(mapStateToProps, {createDay, getDaysQuestions})(CreateDayScreen);

