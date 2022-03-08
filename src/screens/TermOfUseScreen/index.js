import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';

import styles from './style';
import {connect} from "react-redux";
import {getFAQ, getTermsAndCondition} from "../../store/general/general-actions";

const TermsOfUseScreen = (props) => {

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            props.getTermsAndCondition(()=>{

            });
        });
    }, []);

    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            {/*<Text style={styles.dateText}>Last revised:*/}
            {/*    <Text style={styles.date}> Sept 2, 2019</Text>*/}
            {/*</Text>*/}
            {/*<Text style={[styles.answerText,{marginBottom: 20}]}>*/}
            {/*    The website located at http://www.99designs.com/ (the “Site”) is a copyrighted work belonging to 99designs Pty Ltd, Australian Company Number 121 195 248 (“99designs”, “us”, and “we”). Certain features of the Services or Site may be subject to additional guidelines, terms, or rules, which will be posted on the Service or Site in connection with such features. To the extent such terms, guidelines, and rules conflict with these terms of use, these terms of use shall govern.*/}
            {/*</Text>*/}
            <FlatList
                data={props.termsAndConditionList}
                renderItem={({item})=>{
                    return(
                        <View>
                            <Text style={styles.questionText}>
                                {item.id}. {item.title}
                            </Text>
                            <Text style={styles.answerText}>
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.general.processing,
        termsAndConditionList: state.general.termsAndConditionList,
    };
};
export default connect(mapStateToProps, {getTermsAndCondition})(TermsOfUseScreen);


