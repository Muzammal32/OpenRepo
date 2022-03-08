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
import Icon from "../../components/Icon";

const NewGoalScreen = (props) => {

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
        <Divider vertical={12} />
        <View>
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
        </View>
        <Divider vertical={ScreenScale(10)} />
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} activeOpacity={0.7} onPress={()=> props.navigation.navigate('Add Weekly Goal')}>
          <View style={{borderWidth : 1, padding: 2, marginRight: 5, borderRadius: 50}}>
            <Icon name={'add_icon'}/>
          </View>
          <Text>Add New Goal</Text>
        </TouchableOpacity>
        <Divider vertical={ScreenScale(20)} />
      </View>
    </>
  );
};

const Goal = ({ item, props, date }) => {
  return (
    <>
      <View style={[styles.goal, {borderWidth: 1, borderRadius: 10, borderColor: colors.NOBEL, paddingHorizontal: ScreenScale(15), paddingVertical: ScreenScale(10)}]}>
        <Text style={{fontSize: ScreenScale(16), flex: 0.9}}>{item.goal}</Text>
        <Icon name={"delete_icon"} size={ScreenScale(25)} color={colors.PRIMARY}/>
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
export default connect(mapStateToProps, {getGoals,createGoals, getGoalsStatus})(NewGoalScreen);

