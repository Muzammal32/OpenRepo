import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert, Image, StatusBar,
} from 'react-native';
import styles from './styles';
import Divider from '../../components/Divider';
import {colors, icons} from '../../constants';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';
import {createGoals, getGoals, getGoalsStatus} from '../../store/journal/journal-actions';
import {dateFormat, dateFormatApi, dayFormat, ScreenScale} from "../../utils/CommonHelper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton from "../../components/CustomButton";

const SetWeeklyGoalScreen = (props) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(props.weeklyGoals.length > 0 ? props.weeklyGoals[0].date : rmDays(new Date(), 6));
  const [selectedEndDate, setSelectedEndDate] = useState(props.weeklyGoals.length > 0 ? props.weeklyGoals[props.weeklyGoals.length - 1].date : Date.now());
  let arr = [];

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

  props.weeklyGoals.map((item, index) => {
    item.goals.map((items, index)=> {
      if (items){
        arr.push(items)
      }
    });
  });

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
        <View style={styles.cardContainer}>
          <View style={styles.titlesView}>
            <Text>MY GOALS THIS WEEK</Text>
            <Text>Status</Text>
          </View>
          <Divider vertical={12} />
          <FlatList
              data={arr}
              refreshing={false}
              onRefresh={onRefresh}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <Divider vertical={12} />}
              keyExtractor={(_, index) => String(index)}
              renderItem={({ item }) => {
                return <Goal item={item} props={props} date={selectedDate} />;
              }}
          />
          <Divider vertical={ScreenScale(15)} />
        </View>

        <Divider vertical={ScreenScale(15)} />
        <CustomButton
            buttonContainerStyle={styles.btn}
            buttonTextStyle={styles.btnText}
            title={'Add New Goal'}
            onPress={()=> {props.navigation.navigate('New Weekly Goal')}}
        />
        <Divider vertical={ScreenScale(40)} />
      </View>
    </>
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
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{color : colors.NOBEL, fontSize: ScreenScale(18), marginHorizontal: ScreenScale(10)}}>●</Text>
          <Text style={[{fontSize: ScreenScale(16)},item.status !== 'Not Accomplished' && { textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>{item.goal}</Text>
        </View>
        <CheckBox
            style={styles.checkBox}
            disabled={item.status !== 'Not Accomplished'}
            value={item.status !== 'Not Accomplished'}
            onCheckColor="white"
            onTintColor="#000"
            onFillColor={'#000'}
            boxType="square"
            onAnimationType={'bounce'}
            offAnimationType={'stroke'}
            tintColors={{ true: '#B4B4B4', false: '#B4B4B4' }}
            onValueChange={newValue => setGoalStatus(newValue, item)}
        />
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
export default connect(mapStateToProps, {getGoals,createGoals, getGoalsStatus})(SetWeeklyGoalScreen);

