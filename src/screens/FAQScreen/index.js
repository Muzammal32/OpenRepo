import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TextInput, View} from 'react-native';

import styles from './style';
import {icons} from "../../constants";
import {connect} from "react-redux";
import {getFAQ} from "../../store/general/general-actions";
import Loading from "../../components/Loader";

const FAQScreen = (props) => {

    const {search, setSearch} = useState('');

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            props.getFAQ(()=>{

            });
        });
    }, []);

    return (
        <View style={styles.screen}>
            <Loading loading={props.processing}/>
            <View style={styles.searchBar}>
                <Image source={icons.SEARCH} style={styles.imageStyle}/>
                <TextInput placeholder={'Search answers'} style={styles.searchText} onChangeText={setSearch} value={search}/>
            </View>
            <View style={styles.dividerStyle}/>
            <FlatList
                data={props.faqList}
                renderItem={({item})=>{
                    return(
                        <View>
                            <Text style={styles.questionText}>
                                {item.question}
                            </Text>
                            <Text style={styles.answerText}>
                                {item.answer}
                            </Text>
                        </View>
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.general.processing,
        faqList: state.general.faqList,
    };
};
export default connect(mapStateToProps, {getFAQ})(FAQScreen);


