import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Alert, FlatList, TouchableOpacity, Image,
} from 'react-native';
import styles from './styles';
import Divider from '../../components/Divider';
import {connect} from 'react-redux';
import {getDay} from '../../store/journal/journal-actions';
import {dateFormat, dateFormatApi, dayFormat} from "../../utils/CommonHelper";
import {icons} from "../../constants";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const DayDataScreen = (props) => {

    const [answerNew, setAnswerNew] = useState([]);
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
        onRefresh(datePicked)
    };

    useEffect(() => {
       onRefresh(selectedDate)
    },[])

    const onRefresh = (date) =>{
        props.getDay( dateFormatApi(date),(res) => {
            if (!res.success){
                Alert.alert('Error', res.message)
            } else {
                let output = [];
                res.data.forEach(function(item) {
                    let existing = output.filter(function(v, i) {
                        return v.question.id == item.question.id;
                    });
                    if (existing.length) {
                        let existingIndex = output.indexOf(existing[0]);
                        output[existingIndex].answer = output[existingIndex].answer.concat(item.answer);
                    } else {
                        if (typeof item.answer == 'string')
                            item.answer = [item.answer];
                        output.push(item);
                    }
                });
                try {
                    setAnswerNew(output)
                } catch (e) {
                }
            }
        });
    }
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.dateContainer} activeOpacity={0.8} onPress={()=>showDatePicker()}>
                    <Text style={styles.dateText}>{dayFormat(selectedDate)+', '+dateFormat(selectedDate)}</Text>
                    <Image source={icons.DROP_DOWN} style={{marginLeft: 10, width: 15, height:10, alignSelf:"center" }}/>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    maximumDate={new Date()}
                    date={new Date(selectedDate)}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                {answerNew.length > 0 ?
                    <FlatList
                        data={answerNew}
                        refreshing={props.processing}
                        onRefresh={onRefresh}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <Divider vertical={12} />}
                        keyExtractor={(_, index) => String(index)}
                        renderItem={({ item }) => {
                            return <AddGoal item={item} props={props}/>
                        }}
                    /> :
                    <View>
                        <Divider vertical={6} />
                        <View style={styles.inputMainContainer}>
                            <Text style={styles.daysContainer}> No Answers Found!</Text>
                        </View>
                        <Divider vertical={6} />
                    </View>
                }
            </View>
        </>
    );
};

const AddGoal = ({ item, props }) => {
    return (
        <>
            <Divider vertical={6} />
            <View style={styles.inputMainContainer}>
                <Text style={styles.daysContainer}>{item.question.question}</Text>
                {item.answer.map((data)=>{
                    return  <Text style={styles.answerContainer}>{data}</Text>
                })
                }
            </View>
            <Divider vertical={6} />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.journal.processing,
        questionList: state.journal.questionList,
        dayAnswers: state.journal.dayAnswers
    };
};
export default connect(mapStateToProps, {getDay})(DayDataScreen);

