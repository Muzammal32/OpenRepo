import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert, Image, StatusBar, ScrollView,
} from 'react-native';
import styles from './styles';
import Divider from '../../components/Divider';
import {colors, icons, theme} from '../../constants';
import { Formik } from 'formik';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';
import {createGoals, getGoals, getGoalsStatus} from '../../store/journal/journal-actions';
import {dateFormat, dateFormatApi, dayFormat} from "../../utils/CommonHelper";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const initialValues = {
    goal: '',
    day: '',
    globalErr: '',
};

const AddWeeklyGoalScreen = (props) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(props.weeklyGoals.length > 0 ? props.weeklyGoals[0].date : rmDays(new Date(), 6));
    const [selectedEndDate, setSelectedEndDate] = useState(props.weeklyGoals.length > 0 ? props.weeklyGoals[props.weeklyGoals.length - 1].date : Date.now());

    function rmDays(date, days) {
        let result = new Date(date);
        result.setDate(date.getDate() - days);
        return result;
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        let datePicked = dateFormat(date);
        let datePickedLast = addDays(date, 6);
        setSelectedEndDate(datePickedLast);
        setSelectedDate(datePicked);
        getGoalsList(dateFormatApi(datePicked));
    };

    function addDays(date, days) {
        let result = new Date(date);
        result.setDate(date.getDate() + days);
        return result;
    }

    useEffect(() => {
        getGoalsList(dateFormatApi(selectedDate));
    }, []);


    const getGoalsList = (date) => {
        props.getGoals(date,(data)=>{});
    };

    const onRefresh = () =>{
        getGoalsList(dateFormatApi(selectedDate))
    };

    return (
        <>
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
                <Text>Goals this Week</Text>
                <Divider vertical={6} />
                <View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.dateContainer} onPress={()=>showDatePicker()}>
                        <Text style={styles.dateText}>{dayFormat(selectedDate)+', '+dateFormat(selectedDate)}</Text>
                        <Text style={styles.dateText}> - </Text>
                        <Text style={styles.dateText}>{dayFormat(selectedEndDate)+', '+dateFormat(selectedEndDate)}</Text>
                        <Image source={icons.DROP_DOWN} style={{marginLeft: 10, marginBottom: 2, width: 15, height:10, alignSelf:"center" }}/>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        maximumDate={new Date()}
                        date={new Date(selectedDate)}
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />


                </View>
                <Divider vertical={6} />
                <FlatList
                    data={props.weeklyGoals}
                    refreshing={false}
                    onRefresh={onRefresh}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <Divider vertical={12} />}
                    keyExtractor={(_, index) => String(index)}
                    renderItem={({ item }) => {
                        return <AddGoal weeklyGoals={item} props={props} date={selectedDate} />;
                    }}
                />
            </View>
        </>
    );
};

const AddGoal = ({ weeklyGoals, props, date}) => {
    const handleGoals = (values, actions) => {
        if (!values.goal){
            actions.setFieldError('goal', 'Please enter your goals');
        } else {
            const model = {
                goal: values.goal,
                day: weeklyGoals.date,
            };
            props.createGoals( date,model, (res)=>{
                if (res.success){
                    props.navigation.navigate('Tabs');
                    props.getGoals(dateFormatApi(date),(data)=>{});
                }
            });
        }
    };

    return (
        <ScrollView keyboardShouldPersistTaps='handled'>
            <View style={styles.inputMainContainer}>
                <Text style={styles.daysContainer}>{weeklyGoals.day}</Text>
                <Formik initialValues={initialValues} onSubmit={handleGoals}>
                    {({ handleChange,touched, handleBlur, values, errors, handleSubmit }) => (
                        <>
                            <View style={[styles.inputContainer]}>
                                <TextInput
                                    style={styles.textContainer}
                                    placeholder={`Whats your goal for ${weeklyGoals.day}`}
                                    multiline={false}
                                    maxLength={33}
                                    autoCorrect={false}
                                    placeholderTextColor={'#B4B4B4'}
                                    onChangeText={handleChange('goal')}
                                    value={values.goal}
                                    autoCapitalize={'none'}
                                    onBlur={handleBlur('goal')}

                                />
                            </View>
                            <Text style={styles.errorText}>
                                {errors.goal && touched.goal ? errors.goal : ''}
                            </Text>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={theme.TOUCH_OPACITY}
                                onPress={handleSubmit}>
                                <Text style={styles.buttonText}>Add Goal</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
        </ScrollView>
    );
};

const Goal = ({ item, props, date }) => {

    const getGoalsList = () => {
        props.getGoals(dateFormatApi(date),(data)=>{});
    };

    const setGoalStatus = (status, data) =>{
        props.getGoalsStatus(data.id, (res)=>{
            if (res.success){
                getGoalsList();
                Alert.alert("Be Fulfilled", res.message)
            }
        })
    };

    return (
        <>
            <View style={styles.goal}>
                <CheckBox
                    style={styles.checkBox}
                    disabled={item.status !== 'Not Accomplished'}
                    value={item.status !== 'Not Accomplished'}
                    onCheckColor="grey"
                    onTintColor="#B4B4B4"
                    boxType="circle"
                    onAnimationType={'bounce'}
                    offAnimationType={'stroke'}
                    tintColors={{ true: '#B4B4B4', false: '#B4B4B4' }}
                    onValueChange={newValue => setGoalStatus(newValue, item)}
                />
                <Text style={item.status !== 'Not Accomplished' && { textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{item.goal}</Text>
            </View>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.journal.processing,
        weeklyGoals: state.journal.weeklyGoals
    };
};
export default connect(mapStateToProps, {getGoals,createGoals, getGoalsStatus})(AddWeeklyGoalScreen);

