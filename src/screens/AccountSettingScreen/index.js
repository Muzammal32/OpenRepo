import React, {useEffect, useState} from 'react';
import {Alert, Image, ScrollView, Switch, TouchableOpacity} from 'react-native';
import { Text, View } from 'react-native';
import {images} from '../../constants';

import styles from './style';
import {connect} from "react-redux";
import {getConfiguration, setConfiguration} from "../../store/user/user-actions";
import Loading from "../../components/Loader";
import Geolocation from "@react-native-community/geolocation";
import {ScreenScale} from "../../utils/CommonHelper";

const AccountSettingScreen = (props) => {

    const [general_notification, setGeneral_notification] = useState(true);
    const [partner_invitation, setPartner_invitation] = useState(false);
    const [location_access, setLocation_access] = useState(false);
    const [push_notification, setPush_notification] = useState(false);

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getConfiguration();
        });
    }, []);

    useEffect(() => {
        setGeneral_notification(props.configurationSettings.general_notification);
        setPartner_invitation(props.configurationSettings.partner_invitation);
        setLocation_access(props.configurationSettings.location_access);
        setPush_notification(props.configurationSettings.push_notification);
    }, [props.configurationSettings]);


    const getConfiguration = () => {
        props.getConfiguration((res) => {});
    };

    const pushNotificationSwitch = (bool) => {
        setPush_notification(bool);
        const data = {
            general_notification: props.configurationSettings.general_notification,
            partner_invitation: props.configurationSettings.partner_invitation,
            location_access: props.configurationSettings.location_access,
            push_notification: bool.toString(),
        };
        props.setConfiguration(data, (result) =>{
            if (result.success) {
            } else {
                Alert.alert("Settings", result.message)
            }
        });
    };

    const partnerInvitationSwitch = (bool) => {
        setPartner_invitation(bool)
        const data = {
            general_notification: props.configurationSettings.general_notification,
            partner_invitation: bool.toString(),
            location_access: props.configurationSettings.location_access,
            push_notification: props.configurationSettings.push_notification,
        };
        props.setConfiguration(data, (result) =>{
            if (result.success) {
            } else {
                Alert.alert("Settings", result.message)
            }
        });
    };

    const myCoord = () =>
        new Promise((resolve, reject) => {
            const geoSuccess = position => resolve(position);
            const geoFailure = error => reject(error);

            Geolocation.getCurrentPosition(
                geoSuccess,
                geoFailure
            );
        });

    const locationAccessSwitch = async (bool) => {
        setLocation_access(bool)
        let obj = {
            general_notification: props.configurationSettings.general_notification,
            partner_invitation: props.configurationSettings.partner_invitation,
            location_access: bool.toString(),
            push_notification: props.configurationSettings.push_notification,
        };

        if (bool){
            const response = await myCoord();
            Object.assign(obj,{
                latitude: response.coords.latitude,
                longitude: response.coords.longitude
            });
        }
        props.setConfiguration(obj, (result) =>{
            // console.log(result)
            if (result.success) {
            } else {
                Alert.alert("Settings", result.message)
            }
        });


    };

    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <Loading loading={props.processing}/>
            <View style={styles.profile_container}>
                <Image source={{uri: props.user.profile}} style={styles.profile_picture} />
                <View style={styles.profile_details}>
                    <Text style={styles.profile_name}>{props.user.name}</Text>
                    <Text style={styles.profile_company}>{props.user.city}</Text>
                    <TouchableOpacity style={styles.edit_button} activeOpacity={0.8} onPress={()=>props.navigation.navigate('My Profile Settings')}>
                        <Text style={styles.edit_buttonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.divider}/>
            <View>
                <Text style={styles.subscription}>Your Subscription</Text>
                <Text style={styles.subscription_status}>You are using our free tier subscription.</Text>
            </View>
            <View style={styles.divider}/>
            <View>
                <View style={styles.notification_headingView}>
                    <Text style={styles.notification_textHeading}>Push Notifications</Text>
                    <Switch
                        trackColor={{ false: "#aaaaaa", true: "#2B2E34" }}
                        thumbColor={push_notification ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(bool)=>pushNotificationSwitch(bool)}
                        value={push_notification}
                    />
                </View>
                <Text style={styles.notification_textSetting}>Allow Push Notification so you can get updates immediately.</Text>
            </View>
            <View style={styles.divider}/>
            <View style={styles.card_view}>
                <Text style={styles.subscription}>Billing Methods</Text>
                <View style={[styles.profile_container, {marginTop: ScreenScale(20)}]}>
                    <Image source={images.CARD} />
                    <View style={styles.profile_details}>
                        <Text style={styles.profile_name}>Visa Card</Text>
                        <Text style={styles.profile_company}>123456789*********</Text>
                        <TouchableOpacity style={styles.edit_button} activeOpacity={0.8} onPress={()=>props.navigation.navigate('Payment Methods')}>
                            <Text style={styles.edit_buttonText}>Add New</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.divider}/>
            <View>
                <View style={styles.notification_headingView}>
                    <Text style={styles.notification_textHeading}>Partner Invitations</Text>
                    <Switch
                        trackColor={{ false: "#aaaaaa", true: "#2B2E34" }}
                        thumbColor={partner_invitation ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(bool)=>partnerInvitationSwitch(bool)}
                        value={partner_invitation}
                    />
                </View>
                <Text style={styles.notification_textSetting}>Allow others to join through your invitation code.</Text>
            </View>
            <View style={styles.divider}/>
            <View>
                <View style={styles.notification_headingView}>
                    <Text style={styles.notification_textHeading}>Locations Access</Text>
                    <Switch
                        trackColor={{ false: "#aaaaaa", true: "#2B2E34" }}
                        thumbColor={location_access ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={(bool)=>locationAccessSwitch(bool)}
                        value={location_access}
                    />
                </View>
                <Text style={styles.notification_textSetting}>Pemission needed to get your current location for daily checklist and new questions and journals.</Text>
            </View>
            <View style={styles.divider}/>
        </ScrollView>
    );
};


const mapStateToProps = (state) => {
    return {
        processing: state.auth.processing,
        user: state.auth.user,
        configurationSettings: state.auth.configurationSettings
    };
};
export default connect(mapStateToProps, {getConfiguration, setConfiguration})(AccountSettingScreen);

