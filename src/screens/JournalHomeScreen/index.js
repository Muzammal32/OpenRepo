import React, {useEffect} from 'react';
import {FlatList, ScrollView, StatusBar, View} from 'react-native';
import JournalHomeTabs from '../../routes/JournalHomeTabs';
import Divider from '../../components/Divider';
import Header from './components/Header';
import data from './data';
import styles from './styles';
import {connect} from 'react-redux';
import {getGoals} from '../../store/journal/journal-actions';
import Loading from '../../components/Loader';
import {colors} from "../../constants";
import {ScreenScale} from "../../utils/CommonHelper";

const JournalHomeScreen = (props) => {

    let {numberOfColumns = 3} = props

    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            <Loading loading={props.processing}/>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.BACKGROUND_CLR}/>
            <View>
                <FlatList
                    data={data}
                    horizontal={true}
                    contentContainerStyle={{ padding: 10, justifyContent:'center', alignItems:'center'}}
                    // numColumns={numberOfColumns}
                    keyExtractor={(item, index) => `${item.title}_${index}`}
                    ItemSeparatorComponent={()=><View style={{width: ScreenScale(7)}}/>}
                    renderItem={({item}) => {
                        return (
                            <Header title={item.title} logo={item.logo} goTo={item.goTo}/>
                        );
                    }}
                />
            </View>
            <View style={styles.seperator}/>
            <Divider vertical={25}/>
            <JournalHomeTabs/>
        </ScrollView>
    );
};

const mapStateToProps = (state) => {
    return {
        processing : state.journal.processing
    };
};
export default connect(mapStateToProps, {getGoals})(JournalHomeScreen);


