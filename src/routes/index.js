import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {connect, useSelector} from 'react-redux';
import JournalNavigator from './journalNavigator';
import AuthNavigator from './AuthNavigator';
import {getToken, getUser, logout, onBoarding, setUserFromStorage} from '../store/user/user-actions';
import {checkForJournalStorage, checkLocalLogin, getStoreData} from '../utils/AsyncStorage';
import {FIRST_TIME, JOURNAL_LOCAL_STORAGE, USER_LOCAL_STORAGE} from '../utils/CommonConstants';
import {setJournalFromStorage} from '../store/journal/journal-actions';

const Routes = (props) => {

    const {token} = useSelector(state => state.auth);
    useEffect(()=>{
        checkLocalLogin(USER_LOCAL_STORAGE).then(res => {
            props.setUserFromStorage(res, err => {});
        });
        checkForJournalStorage(JOURNAL_LOCAL_STORAGE).then(res => {
            props.setJournalFromStorage(res, err => {})
        });

        getStoreData(FIRST_TIME).then(res => {
            props.onBoarding(res);
        });

        props.getUser(()=>{});
    },[]);

    useEffect(()=>{
        if (token) {
            props.getToken((data)=> {
                if (!data.status){
                    props.logout(()=>{});
                }
            });
        }
    },[token])


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
            <NavigationContainer>
                {SplashScreen.hide()}
                {token ? <JournalNavigator/> : <AuthNavigator/>}
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

const mapStateToProps = (state) => {
    return {};
};
export default connect(mapStateToProps, {setUserFromStorage,setJournalFromStorage,getUser, logout, onBoarding, getToken})(Routes);

