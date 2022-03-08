import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import {connect} from "react-redux";
import {getStats} from "../../store/journal/journal-actions";

const OrderJournalScreen = (props) => {

    const { navigation } = props;
    return (
        <View style={styles.screen}>
            <Text style={styles.headTextName}>Hi {props.user.name}!</Text>
            <Text style={styles.headText}>Do you want to order {'\n'}a Journal?</Text>

            <CustomButton
                buttonContainerStyle={styles.createAccountBtn}
                buttonTextStyle={styles.createBtn}
                title={'Yes Please!'}
                onPress={() => navigation.navigate('Merchandise Store')}
            />

            <TouchableOpacity
                style={styles.skipBtnContainer}
                onPress={() => navigation.navigate('Tabs')}>
                <Text style={styles.skipBtn}>Skip Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.journal.processing,
        user: state.auth.user
    };
};
export default connect(mapStateToProps, {getStats})(OrderJournalScreen);

