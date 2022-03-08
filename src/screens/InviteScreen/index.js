import React from 'react';
import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CustomButton from '../../components/CustomButton';

import styles from './styles';

const InviteScreen = (props) => {
    const {navigation} = props;
    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            <View style={styles.header}>
                <Text style={styles.headText}>
                    You can Invite Partner using email or copy link Below
                </Text>
            </View>
            <View style={styles.emailContainer}>
                <Text style={styles.textInput}>Email Address</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Example@gmail.com"
                        placeholderTextColor={'#B4B4B4'}
                    />
                </View>
                <CustomButton
                    buttonContainerStyle={styles.inviteBtn}
                    buttonTextStyle={styles.sendTitleStyle}
                    title="Send Invite"
                />
            </View>

            <View style={styles.seperator}/>
            <View style={styles.linkInput}>
                <Text style={styles.link}>By coping this link you can share</Text>
                <TextInput
                    style={styles.input}
                    placeholder="http://www.toughzap.com"
                    placeholderTextColor={'#B4B4B4'}
                />
                <View style={styles.inviteBtns}>
                    <CustomButton
                        buttonContainerStyle={styles.copyBtn}
                        buttonTextStyle={styles.copyTitleStyle}
                        title={'Copy'}
                    />
                    <CustomButton
                        buttonContainerStyle={styles.shareBtn}
                        buttonTextStyle={styles.titleStyle}
                        title={'Share'}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.skipBtnContainer}
                onPress={() => navigation.navigate('Avatar', {userInfo : props.route.params.userInfo})}>
                <Text style={styles.skipBtn}>Skip Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default InviteScreen;
