import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Platform, ScrollView, Text, View} from 'react-native';

import Rate from './Rate';

import rateData from '../rateData';
import styles from '../styles';
import {connect} from 'react-redux';
import {focusRate, getScoreCardList} from '../../../store/journal/journal-actions';
import {dateFormat, dayFormat, ScreenScale} from "../../../utils/CommonHelper";
import Carousel from "react-native-snap-carousel";
import {isSmallDevice} from "react-native-utils-scale/index";

const Focus = (props) => {
    const {numberOfColumns = 5} = props;
    const cursol = useRef();

    useEffect(()=>{
        props.getScoreCardList()
    },[])

    const _renderItem = (data, index, cursol) => {

        const getRate = (data, id) => {
            const model = {
                score_card_id: id,
                focus_value: data
            };
            props.focusRate(model, (data)=>{
                props.getScoreCardList();
                setTimeout(() => {
                    cursol.current?.snapToNext();
                }, 2000);
            });
        };
        return (
            <>
                <View style={styles.focusCard}>
                    <Text style={styles.focusText}>{data.item.title}</Text>
                    <FlatList
                        data={rateData}
                        numColumns={numberOfColumns}
                        keyExtractor={(item, index) => `${item.title}_${index}`}
                        renderItem={({item}) => {
                            return <Rate item={item} pressEvent={(rate)=>getRate(rate,data.item.id)} selected={data.item.score}/>;
                        }}
                    />
                </View>
            </>
        )
    }

    return (
        <View style={styles.focusContainer}>
            {props.rating && props.rating.hasOwnProperty('date') &&
            <>
                <Text style={styles.dateText}>{dayFormat(props.rating.date)+', '+dateFormat(props.rating.date)}</Text>
            </>
            }
            <Text style={styles.focusHeader}>Rate This Areas</Text>
            <Text style={styles.focusSubHeader}>
                On a scale of 1 to 5 (low to high), rate the following areas of how you
                feel today.
            </Text>
            <View style={{alignItems:'center', justifyContent:'center'}}>
                <Carousel
                    ref={cursol}
                    data={props.rating}
                    layout={'tinder'}
                    layoutCardOffset={`9`}
                    enableSnap={true}
                    renderItem={(data, index) => _renderItem(data, index, cursol)}
                    sliderWidth={isSmallDevice ? ScreenScale(250): ScreenScale(350)}
                    itemWidth={ScreenScale(250)}
                />
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        processing: state.journal.processing,
        rating: state.journal.rating
    };
};
export default connect(mapStateToProps, {focusRate, getScoreCardList})(Focus);
