import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {icons} from '../../constants';
import OptionsContainer from '../../components/OptionsContainer';


const ModalIcons = ({ source, title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.borderTouchable}>
            <View style={[styles.modalIcon, style]}>
                <Image source={source} />
            </View>
        </TouchableOpacity>
    );
};

const ChooseOptionScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#F9F9F9'}/>
            <View style={styles.sub_view}>
                <Text style={styles.homeText}>Home</Text>
                <View style={styles.icon_view}>
                    <ModalIcons
                        style={{ paddingVertical: 8}}
                        source={icons.NOTIFICATION}
                        onPress={()=>navigation.navigate('Notification Settings')}
                    />
                    <ModalIcons
                        style={{ paddingVertical: 11}}
                        source={icons.OPTION}
                        // title="Phone Storage"
                        onPress={()=>navigation.navigate('Filter')}
                    />
                </View>
            </View>

            <View style={styles.cardComponent}>
                <OptionsContainer
                    title="Only Partner Activity"
                    source={icons.FILTER}
                    style={styles.title}
                    onPress={() => navigation.navigate('Tabs')}
                />
                <OptionsContainer
                    title="I Want Full Features"
                    style={styles.title}
                    source={icons.CUP}
                    //   onPress={() => navigation.navigate('PhoneReset')}
                />
            </View>
        </View>
    );
};

export default ChooseOptionScreen;
