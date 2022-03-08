import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    StatusBar, Text,
    View
} from 'react-native';

import styles from './style';
import {colors, images} from "../../constants";
import style from "./style";
import {connect} from "react-redux";
import {getMyTransactions} from "../../store/products/products-actions";
import Loading from "../../components/Loader";
import {ScreenScale} from "../../utils/CommonHelper";
const Card = ({item, props}) =>{


    return (
        <View style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <Image source={{uri: item.first_product.image}} style={styles.image_section}/>
                <View style={styles.description_section}>
                    <Text style={styles.product_no}>{item.first_product.created_at}</Text>
                    <Text style={styles.titleText}>{item.first_product.title}</Text>
                    <Text style={styles.price}>{item.first_product.product_code}</Text>
                </View>
            </View>
            <Text style={[styles.price,{ alignSelf:'center'}]}>- ${item.total_price}</Text>
        </View>
    )
};


function ProductOrderHistory(props) {
    const {navigation} = props;

    useEffect(() => {
        navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getProductsList();
        });
    }, []);

    const getProductsList = () => {
        props.getMyTransactions((res) => {});
    };



    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            <Loading loading={props.processing}/>
            <View style={style.scrollView}>
                <Text style={styles.homeText}>{props.transactionList.length} Records</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between',
                    paddingVertical: ScreenScale(10), marginHorizontal: ScreenScale(20),
                    borderBottomWidth:1, borderBottomColor:'#E9E6E6'}}>
                    <Text style={styles.product_no}>DESCRIPTION</Text>
                    <Text style={styles.product_no}>AMOUNT</Text>
                </View>
                <FlatList
                    data={props.transactionList}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={()=>{
                        return (
                            <View style={{height:50,marginBottom:30}}/>
                        )
                    }}
                    keyExtractor={(item, index) => `${item.title}_${index}`}
                    renderItem={({item}) => {
                        return (
                            <Card item={item} props={props}/>
                        );
                    }}
                />
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        processing: state.products.processing,
        transactionList: state.products.transactionList,
    };
};
export default connect(mapStateToProps, {getMyTransactions})(ProductOrderHistory);
