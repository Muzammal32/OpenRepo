import React, {useEffect, useState} from 'react';
import {FlatList, Modal, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {colors, fonts} from '../../constants';
import {BarChart, Grid, PieChart} from 'react-native-svg-charts';
import {connect} from "react-redux";
import {getDashboardStats, getGoals, getStats} from "../../store/journal/journal-actions";
import {dateFormat, dateFormatApi, ScreenScale} from "../../utils/CommonHelper";
import Loading from "../../components/Loader";
import ProgressCircle from 'react-native-progress-circle';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "../../components/Icon";
import Divider from "../../components/Divider";

const ModalIcons = ({name, title, onPress, style}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.borderTouchable}>
            <View style={[styles.modalIcon, style]}>
                <Icon name={name} size={ScreenScale(28)} color={'#696969'}/>
            </View>
        </TouchableOpacity>
    );
};


const useStateCallbackWrapper = (initialValue = '', callBack) => {
    const [state, setState] = useState(initialValue);
    useEffect(() => callBack(state), [state]);
    return [state, setState];
};


const HomeScreen = (props) => {

    const {navigation} = props;

    function rmDays(date, days) {
        let result = new Date(date);
        result.setDate(date.getDate() - days);
        return result;
    }

    const dateFormated = (date) => {
        let d = new Date(date);
        return ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear();
    }

    function addDays(date, days) {
        let result = new Date(date);
        result.setDate(date.getDate() + days);
        return result;
    }

    function callDashboard(){
            let data = {
                daily_activity_start: daily_activity_start,
                daily_activity_end: daily_activity_end,
                goals_start: goals_start,
                goals_end: goals_end
            };
            props.getDashboardStats(data, ()=>{});
            props.getGoals(dateFormatApi(goals_start),(data)=>{});
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisibleGoal, setDatePickerVisibilityGoal] = useState(false);
    const [daily_activity_start, set_daily_activity_start] = useState(dateFormated(rmDays(new Date(), 6)));
    const [daily_activity_end, set_daily_activity_end] = useStateCallbackWrapper(dateFormated(Date.now()), ()=>{callDashboard()});
    const [goals_start, set_goals_start] = useState(dateFormated(rmDays(new Date(), 6)));
    const [goals_end, set_goals_end] = useStateCallbackWrapper(dateFormated(Date.now()), ()=>{callDashboard()});

    const [selectedDate, setSelectedDate] = useState(rmDays(new Date(), 6));
    const [selectedDateGoal, setSelectedDateGoal] = useState(rmDays(new Date(), 6));



    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showDatePickerGoal = () => {
        setDatePickerVisibilityGoal(true);
    };

    const hideDatePickerGoal = () => {
        setDatePickerVisibilityGoal(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        let datePicked = dateFormated(date);
        let datePickedLast = dateFormated(addDays(date, 6));
        set_daily_activity_start(datePicked)
        set_daily_activity_end(datePickedLast)
        setSelectedDate(dateFormat(date));
    };


    const handleConfirmGoal = (date) => {
        hideDatePickerGoal();
        let datePicked = dateFormated(date);
        let datePickedLast = dateFormated(addDays(date, 6));
        set_goals_start(datePicked)
        set_goals_end(datePickedLast)
        setSelectedDateGoal(dateFormat(date));
    };


    const setDateRange = (range) => {
        if (range === 1) {
            set_daily_activity_start(dateFormated(rmDays(new Date(), 6)));
            set_daily_activity_end(dateFormated(Date.now()))
        } else if (range === 2) {
            set_daily_activity_start(dateFormated(rmDays(new Date(), 13)));
            set_daily_activity_end(dateFormated(rmDays(new Date(), 7)))
        } else if (range === 3) {
            showDatePicker()
        }
    };

    const setGoals = (range) => {
        if (range === 1) {
            set_goals_start(dateFormated(rmDays(new Date(), 6)));
            set_goals_end(dateFormated(Date.now()))
        } else if (range === 2) {
            set_goals_start(dateFormated(rmDays(new Date(), 13)));
            set_goals_end(dateFormated(rmDays(new Date(), 7)))
        } else if (range === 3) {
            showDatePickerGoal()
        }
    };

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            props.getStats(dateFormatApi(Date.now()));
            let data = {
                daily_activity_start: daily_activity_start,
                daily_activity_end: daily_activity_end,
                goals_start: goals_start,
                goals_end: goals_end
            };
            props.getDashboardStats(data, ()=>{});
            props.getGoals(dateFormatApi(Date.now()),(data)=>{});
        });
    }, []);



    console.log(props.dashboard)



    const data2 = [
        {
            key: 1,
            value: props.dashboard.hasOwnProperty('goals_accomplished') && props.dashboard.goals_accomplished['complete'],
            svg: {fill: '#9ED658'},
        },
        {
            key: 2,
            value: props.dashboard.hasOwnProperty('goals_accomplished') && props.dashboard.goals_accomplished['un-complete'],
            svg: {fill: '#ABB2FA'}
        },
        {
            key: 3,
            value: props.dashboard.hasOwnProperty('goals_accomplished') && props.dashboard.goals_accomplished['delayed'],
            svg: {fill: '#F8CFCF'}
        },
        {
            key: 4,
            value: props.dashboard.hasOwnProperty('goals_accomplished') &&
                (props.dashboard.goals_accomplished['complete'] === 0 || props.dashboard.goals_accomplished['un-complete'] === 0) && 100,
            svg: {fill: colors.BON_JOUR}
        },
    ];

    const data1 = [
        {
            value: (props.dashboard.hasOwnProperty('daily_activity') && props.dashboard.daily_activity.length > 0) ? props.dashboard.daily_activity[0].result : 0,
            svg: {
                fill: '#ABFAB7',
            },
        },
        {
            value: (props.dashboard.hasOwnProperty('daily_activity') && props.dashboard.daily_activity.length > 0) ? props.dashboard.daily_activity[1].result : 0,
            svg: {
                fill: '#E79EFD',
            },
        },
        {
            value: (props.dashboard.hasOwnProperty('daily_activity') && props.dashboard.daily_activity.length > 0) ? props.dashboard.daily_activity[2].result : 0,
            svg: {
                fill: '#F2637E',
            },
        },
        {
            value: (props.dashboard.hasOwnProperty('daily_activity') && props.dashboard.daily_activity.length > 0) ? props.dashboard.daily_activity[3].result : 0,
            svg: {
                fill: '#88CAFD',
            },
        },
        {
            value: (props.dashboard.hasOwnProperty('daily_activity') && props.dashboard.daily_activity.length > 0) ? props.dashboard.daily_activity[4].result : 0,
            svg: {
                fill: '#ABB3FA',
            },
        },
        {
            value: (props.dashboard.hasOwnProperty('daily_activity') && props.dashboard.daily_activity.length > 0) ? props.dashboard.daily_activity[5].result : 0,
            svg: {
                fill: '#FAABAB',
            },
        },
        {
            value: (props.dashboard.hasOwnProperty('daily_activity') && props.dashboard.daily_activity.length > 0) ? props.dashboard.daily_activity[6].result : 0,
            svg: {
                fill: '#ECE49C',
            },
        },
        {
            value: (props.dashboard.hasOwnProperty('daily_activity') && props.dashboard.daily_activity.length > 0) ? props.dashboard.daily_activity[7].result : 0,
            svg: {
                fill: '#C1EE88',
            },
        },
    ]

    let arr = [];
    props.weeklyGoals.map((item, index) => {
        item.goals.map((items, index)=> {
            if (items){
                arr.push(items)
            }
        });
    });

    const onRefresh = () =>{
        callDashboard()
    };

    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.BACKGROUND_CLR}/>
            <Loading loading={props.processing}/>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                maximumDate={new Date()}
                date={new Date(selectedDate)}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <DateTimePickerModal
                isVisible={isDatePickerVisibleGoal}
                mode="date"
                maximumDate={new Date()}
                date={new Date(selectedDateGoal)}
                onConfirm={handleConfirmGoal}
                onCancel={hideDatePickerGoal}
            />

            <View style={styles.sub_view}>
                <Text style={styles.homeText}>Home</Text>
                <View style={styles.icon_view}>
                    <ModalIcons
                        style={{paddingVertical: 11}}
                        name={'notification_icon'}
                        onPress={() => navigation.navigate('Notifications')}
                    />
                    <ModalIcons
                        style={{paddingVertical: 11}}
                        name={'left_icon'}
                        onPress={() => navigation.navigate('Filter')}
                    />
                </View>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView1}>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6}
                                          onPress={() => [setModalVisible(!modalVisible), setDateRange(1)]}>
                            <Text style={styles.choiceText}>This Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6}
                                          onPress={() => [setModalVisible(!modalVisible), setDateRange(2)]}>
                            <Text style={styles.choiceText}>Previous Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6}
                                          onPress={() => [setModalVisible(!modalVisible), setDateRange(3)]}>
                            <Text style={styles.choiceText}>Custom Range</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                    setModalVisible1(!modalVisible1);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView1}>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6}
                                          onPress={() => [setModalVisible1(!modalVisible1), setGoals(1)]}>
                            <Text style={styles.choiceText}>This Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6}
                                          onPress={() => [setModalVisible1(!modalVisible1), setGoals(2)]}>
                            <Text style={styles.choiceText}>Previous Week</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewChoice} activeOpacity={0.6}
                                          onPress={() => [setModalVisible1(!modalVisible1), setGoals(3)]}>
                            <Text style={styles.choiceText}>Custom Range</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.progressChartView} activeOpacity={1}>
                    <View style={{padding: 10}}>

                        <ProgressCircle
                            percent={parseInt(props.stats)}
                            radius={40}
                            borderWidth={12}
                            color="#696969"
                            shadowColor="#E9E6E6"
                            bgColor="#fff">
                            <Text style={{fontSize: 18, fontFamily: fonts.MEDIUM}}>{props.stats}%</Text>
                        </ProgressCircle>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.goodMornText}>Good Morning</Text>
                        <Text style={styles.dailyText}>Your daily average score card</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.barChartView}>
                    <View style={styles.topView}>
                        <Text style={styles.goodMornText}>Daily Activity</Text>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <Text style={styles.dailyText}>Week {" "}
                                <Icon name={'arrow_down_icon'} size={12} color={'#B4B4B4'}/>
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: "column", alignItems: "center", marginBottom: 20}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <View style={[styles.tokenColor, {backgroundColor: '#ABFAB7'}]}/>
                                <Text style={styles.tokenText}>FOCUS</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <View style={[styles.tokenColor, {backgroundColor: '#E79EFD'}]}/>
                                <Text style={styles.tokenText}>SLEEP</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <View style={[styles.tokenColor, {backgroundColor: '#F2637E'}]}/>
                                <Text style={styles.tokenText}>RELATIONSHIPS</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <View style={[styles.tokenColor, {backgroundColor: '#88CAFD'}]}/>
                                <Text style={styles.tokenText}>EXERCISE</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <View style={[styles.tokenColor, {backgroundColor: '#ABB3FA'}]}/>
                                <Text style={styles.tokenText}>NUTRITION</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <View style={[styles.tokenColor, {backgroundColor: '#FAABAB'}]}/>
                                <Text style={styles.tokenText}>ME TIME</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <View style={[styles.tokenColor, {backgroundColor: '#ECE49C'}]}/>
                                <Text style={styles.tokenText}>CREATIVITY</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginRight: 10}}>
                                <View style={[styles.tokenColor, {backgroundColor: "#C1EE88"}]}/>
                                <Text style={styles.tokenText}>GRATITUDE</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', height: ScreenScale(215), padding: 16}}>
                        <BarChart
                            style={{flex: 1, marginLeft: 8}}
                            data={data1}
                            // svg={}
                            spacingInner={0.75}
                            spacingOuter={1}
                            yAccessor={({item}) => item.value}
                            gridMin={0}>
                            <Grid/>
                        </BarChart>
                    </View>
                </View>
                <View style={styles.pieChartView}>
                    <View style={styles.topView}>
                        <Text style={styles.goodMornText}>Goal Accomplishment</Text>
                        <TouchableOpacity onPress={() => setModalVisible1(true)}>
                            <Text style={styles.dailyText}>Week {" "}
                                <Icon name={'arrow_down_icon'} size={12} color={'#B4B4B4'}/>
                            </Text>
                        </TouchableOpacity>
                    </View>

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
                    <Divider vertical={ScreenScale(20)}/>
                </View>
            </ScrollView>
        </View>
    );
};

const Goal = ({ item, date }) => {
    return (
        <View style={styles.goal}>
            <Text style={{fontSize: ScreenScale(16), flex: 0.9}}>{item.goal}</Text>
            <View style={{flexDirection:'row', marginTop: ScreenScale(20), alignItems:'center', justifyContent:'space-between', width: '100%'}}>
                <Text style={{fontSize: ScreenScale(10), flex: 0.6}}>{date.toString()}</Text>
                <Text style={{fontSize: ScreenScale(14), flex: 0.4, textAlign:'right',
                color: item.status === 'Accomplished'? 'green': 'red' }}>{item.status}</Text>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.journal.processing,
        stats: state.journal.stats,
        dashboard: state.journal.dashboard,
        weeklyGoals: state.journal.weeklyGoals
    };
};
export default connect(mapStateToProps, {getStats,getGoals, getDashboardStats})(HomeScreen);
