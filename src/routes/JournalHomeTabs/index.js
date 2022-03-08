import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import styles from './styles';
import List from '../../screens/JournalHomeScreen/components/List';
import Focus from '../../screens/JournalHomeScreen/components/Focus';
import {colors} from "../../constants";
const Tab = createMaterialTopTabNavigator();

const JournalHomeTabs = () => {
    return (
        <>
            <Tab.Navigator
                lazy={true}
                initialRouteName={'Goal this Week'}
                swipeEnabled={false}
                tabBarOptions={{
                    activeTintColor: 'black',
                    activeOpacity: 0,
                    pressOpacity: 0,
                    pressColor: "rgba(255,255,255,0)",
                    indicatorStyle: styles.indicatorStyle,
                    labelStyle: styles.labelStyle,
                    tabStyle: [styles.tabStyle, {backgroundColor: colors.WHITE, elevation: 6, shadowOpacity: 0.2}],
                    style: styles.style,
                }}>

                <Tab.Screen name="Goal this Week" children={()=> <List/>} />
                <Tab.Screen name="Score Card" children={()=> <Focus/>} />
            </Tab.Navigator>
        </>
    );
};

export default JournalHomeTabs;
