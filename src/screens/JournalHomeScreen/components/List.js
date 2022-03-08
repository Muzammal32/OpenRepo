import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Divider from '../../../components/Divider';

import styles from '../styles';
import {connect} from 'react-redux';
import {getGoals, getGoalsStatus} from '../../../store/journal/journal-actions';
import CheckBox from '@react-native-community/checkbox';
import {dateFormat, dateFormatApi, dayFormat} from "../../../utils/CommonHelper";
import {icons} from "../../../constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";

function List(props){
    const [refresh, setRefresh] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(props.weeklyGoals.length > 0 ? props.weeklyGoals[0].date : rmDays(new Date(), 6));
    const [selectedEndDate, setSelectedEndDate] = useState(props.weeklyGoals.length > 0 ? props.weeklyGoals[props.weeklyGoals.length - 1].date : Date.now());

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
        onRefresh(dateFormatApi(datePicked));
    };

    function addDays(date, days) {
        let result = new Date(date);
        result.setDate(date.getDate() + days);
        return result;
    }

    function rmDays(date, days) {
        let result = new Date(date);
        result.setDate(date.getDate() - days);
        return result;
    }


    useEffect(() => {
        // props.navigation.addListener('focus', () => {
            props.getGoals(selectedDate,(data) => {
                setRefresh(!refresh)
            });
        // });
    }, []);

    const onRefresh = (date) => {
        props.getGoals(date,(data) => {
            setRefresh(!refresh)
        });
    };

    const setGoalStatus = (status, data) =>{
        props.getGoalsStatus(data.id, (res)=>{
          if (res.success){
              Alert.alert("Be Fulfilled", res.message)
              onRefresh();
          }
        })
    };



    return (
        <>
            <View style={styles.goalContainer}>
                <View style={styles.dateContainer}>
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
                {(
                    <FlatList
                        refreshing={false}
                        onRefresh={onRefresh}
                        data={props.weeklyGoals}
                        extraData={refresh}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <Divider vertical={7}/>}
                        keyExtractor={(_, index) => String(index)}
                        renderItem={({item}) => {
                            return (
                                <View style={styles.inputMainContainer}>
                                    <Text style={styles.daysContainer}>{item.day}</Text>
                                    <FlatList
                                        data={item.goals}
                                        keyExtractor={(_, index) => String(index)}
                                        renderItem={({ item }) => {
                                            return (
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
                                                    <Text style={[styles.goalText,item.status !== 'Not Accomplished' && {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>{item.goal}</Text>
                                                </View>
                                            )
                                        }}
                                    />
                                </View>
                            )
                        }}
                    />
                )}
            </View>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.journal.processing,
        weeklyGoals: state.journal.weeklyGoals,
    };
};
export default connect(mapStateToProps, {getGoals, getGoalsStatus})(List);
