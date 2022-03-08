import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {icons} from '../../constants';
import OptionsContainer from '../../components/OptionsContainer';

import styles from './styles';

const ChooseJournalScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <StatusBar backgroundColor={'#F9F9F9'} />
            <Text style={styles.headText}>Choose Option</Text>
            <View style={styles.cardComponent}>
                <OptionsContainer
                    title="I WANT A PHYSICAL JOURNAL"
                    icon={'physical_icon'}
                    style={styles.title}
                    onPress={() => navigation.navigate('OrderJournal')}
                />
                <OptionsContainer
                    title="I’ll USE A DIGITAL JOURNAL"
                    style={styles.title}
                    icon={'notes_icon'}
                    onPress={() => navigation.navigate('Tabs')}
                />
            </View>
        </View>
    );
};

export default ChooseJournalScreen;
