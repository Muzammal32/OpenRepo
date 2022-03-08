import React, {useEffect, useRef, useState} from 'react';
import {Alert, Image, Modal, ScrollView, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {icons} from '../../constants';
import {connect} from 'react-redux';
import {logout} from '../../store/user/user-actions';
import Loading from '../../components/Loader';
import AppIntroSlider from "react-native-app-intro-slider";
import {dateFormat, ScreenScale} from "../../utils/CommonHelper";
import {answerCheckList, getCheckList} from "../../store/general/general-actions";

const ModalText = ({ source, title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.borderTouchable2}>
            <View style={style}>
                <Text style={styles.textSetting}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const ModalIcons = ({ source, title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.borderTouchable,{style}]}>
            <View style={[styles.modalIcon]}>
                <Image source={source} />
            </View>
        </TouchableOpacity>
    );
};


const SliderView = ({date,question, total, current, onPressYes, onPressNo, index}) => {
    return (
        <View style={{alignItems:'center'}}>
            <Text style={styles.modalDateText}>{date}</Text>
            <Text style={styles.checkHeaderText}>
                Daily Check List
                <Text style={styles.checkHeaderNumber}> {current}/{total}</Text>
            </Text>
            <Text style={styles.modalbody}>
                {question.replace('\\"','').replace('\\"','')}
            </Text>

            <View style={styles.modalButtonGroup}>
                <TouchableOpacity style={styles.modalButton} activeOpacity={0.7} onPress={()=> onPressYes(current)}>
                    <Text style={styles.modalButtonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} activeOpacity={0.7} onPress={()=> onPressNo(current)}>
                    <Text style={styles.modalButtonText}>No</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const FilterScreen = (props) => {
    const { navigation } = props;

    const [modalVisible, setModalVisible] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const date = new Date();
    const appSlider = useRef();

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            props.getCheckList(()=>{});
        });
    }, []);

    const onPressYes = (id) =>{
        const data = {
            question_id: id,
            status: 1,
        };
        props.answerCheckList(data, (result) =>{
            if (result.success) {
                Alert.alert("Daily Check List", "Thankyou for answering!")
            } else {
                Alert.alert("Daily Check List", result.message)
            }
        });
    };

    const onPressNo = (id) =>{
        const data = {
            question_id: id,
            status: 0,
        };
        props.answerCheckList(data, (result) =>{
            if (result.success) {
                Alert.alert("Daily Check List", "Thankyou for answering!")
            } else {
                Alert.alert("Daily Check List", result.message)
            }
        });
    };


    return (
        <View style={[styles.screen, {paddingTop:0, paddingHorizontal:0}]}>
            <Loading loading={props.processing}/>
            {/*<Loading loading={props.processing_general}/>*/}
            <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'}/>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <AppIntroSlider
                            ref={appSlider}
                            data={props.checkList}
                            dotStyle={styles.inActiveDot}
                            activeDotStyle={styles.selectedBorder}
                            style={{flex:1, borderWidth:1, borderRadius: ScreenScale(20),borderColor: '#fff'}}
                            scrollEventThrottle={16}
                            updateCellsBatchingPeriod={1}
                            onSlideChange={index => setPageIndex(index)}
                            renderItem={({item, index}) => {
                                return (
                                    <SliderView
                                        date={dateFormat(date)}
                                        question={item.title}
                                        total={props.checkList.length}
                                        current={item.id}
                                        index={index}
                                        onPressYes={(data)=> {
                                            onPressYes(data);
                                            if (index !== props.checkList.length -1){
                                                appSlider.current?.goToSlide(index+1);
                                            } else {
                                                setModalVisible(!modalVisible)
                                            }
                                        }}
                                        onPressNo={(data)=> {
                                            onPressNo(data);
                                            if (index !== props.checkList.length -1){
                                                appSlider.current?.goToSlide(index+1);
                                            } else {
                                                setModalVisible(!modalVisible)
                                            }
                                        }}
                                    />
                                );
                            }}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.topBarFilter}>
                <TouchableOpacity
                    style={{marginLeft:20, marginRight:30, padding: 10, flexDirection:'row' }}
                    onPress={() => navigation.navigate("Tabs")}>
                    <Image source={icons.CROSS} style={{width: 15, height:15, margin: 5}}/>
                    <Text style={[styles.textSetting, {marginLeft: 20}]}>Menu</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Accountability Partner"
                    onPress={()=>props.navigation.navigate('Accountability Partner')}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Daily Check List"
                    onPress={() => setModalVisible(!modalVisible)}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Podcast"
                    onPress={()=>props.navigation.navigate('Podcast')}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="My Notes"
                    onPress={()=>props.navigation.navigate('My Notes')}
                />
                <View style={{borderWidth : 0.3, marginVertical: 30}}/>

                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Merchandise Store"
                    onPress={()=>props.navigation.navigate('Merchandise Store')}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="My Orders"
                    onPress={()=>props.navigation.navigate('My Orders')}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Transactions History"
                    onPress={()=>props.navigation.navigate('Transaction History')}
                />

                <View style={{borderWidth : 0.3, marginVertical: 30}}/>

                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="FAQ"
                    onPress={()=>props.navigation.navigate('Frequently Asked Questions')}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Terms of Use"
                    onPress={()=>props.navigation.navigate('Terms Of Use')}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Bug Reports"
                    onPress={()=>props.navigation.navigate('Bug Reports')}
                />

                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Give Feedback"
                    onPress={()=>props.navigation.navigate('Give Feedback')}
                />
                <View style={{borderWidth : 0.3, marginVertical: 30}}/>

                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Account Settings"
                    onPress={()=>props.navigation.navigate('Account Settings')}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Contact Us"
                    onPress={()=>props.navigation.navigate('Contact Us')}
                />
                <ModalText
                    style={{ paddingHorizontal: 15}}
                    title="Logout"
                    onPress={()=> props.logout()}
                />
            </ScrollView>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.auth.processing,
        processing_general : state.general.processing,
        checkList: state.general.checkList
    };
};
export default connect(mapStateToProps, {logout, getCheckList, answerCheckList})(FilterScreen);
