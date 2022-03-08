import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';

import styles from './styles';

const NotificationSettingScreen = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.screen}>
            <View style={styles.settingView}>
                <View style={styles.headingView}>
                    <Text style={styles.textHeading}>Push Notifications</Text>
                    <Switch
                        trackColor={{ false: "#aaaaaa", true: "#2B2E34" }}
                        thumbColor={isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Text style={styles.notification_textSetting}>Allow Push Notification so you can get updates immediately.</Text>
            </View>
        </View>
    );
};

export default NotificationSettingScreen ;
