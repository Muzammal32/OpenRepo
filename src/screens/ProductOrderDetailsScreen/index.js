import React, {useState} from 'react';
import {
    FlatList, Image,
    StatusBar,
    Text,
    View
} from 'react-native';

import styles from './style';
import {colors, icons} from "../../constants";
import {RFValue} from "react-native-responsive-fontsize";
import {ScreenScale} from "../../utils/CommonHelper";

const Card = ({data, props}) =>{
    return (
        <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
                <Image source={{uri:data.thumbnail}} style={styles.image_section}/>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <View style={styles.description_section}>
                        <Text style={styles.titleText}>{data.title}</Text>
                        <Text style={styles.codeText}>304-PNRGFP</Text>
                        <Text style={styles.product_no}>Quantity : {data.quantity}</Text>
                        <Text style={styles.product_no}>Total Price: ${data.total_price}</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop: ScreenScale(46)}}>
                <Text style={styles.orderText}>Order ID</Text>
                <Text style={styles.product_no}>#{data.id}</Text>
            </View>
            <View style={{marginTop: ScreenScale(30), borderBottomWidth: 1, paddingBottom: 29}}>
                <Text style={styles.orderText}>Order Status</Text>
                <Text style={styles.product_no}>{props.order_status}</Text>
            </View>
            {console.log(props)}
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal: ScreenScale(20)}}>
                <View style={{marginTop: ScreenScale(34), alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.orderText}>Order Date</Text>
                    <Text style={[styles.product_no, {fontSize: ScreenScale(10)}]}>{props.order_at}</Text>
                </View>
                <View style={{borderWidth:0.5, height: 80, marginTop: 20}}/>
                <View style={{marginTop: ScreenScale(34), alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.orderText}>Delivery Date</Text>
                    <Text style={[styles.product_no, {fontSize: ScreenScale(10)}]}>{props.completed_at}</Text>
                </View>
            </View>

        </View>
    )
};


export default function ProductOrderDetailsScreen(props) {
    const {navigation} = props;
    const data = props.route.params.item;

    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            <View style={styles.scrollView}>
                <View style={styles.description_section}>
                    <FlatList
                        data={data.products}
                        showsVerticalScrollIndicator={false}
                        refreshing={false}
                        numColumns={1}
                        ListFooterComponent={() =>
                            <View style={{marginBottom: ScreenScale(20)}}/>
                        }
                        keyExtractor={(item, index) => `${item.title}_${index}`}
                        renderItem={({item}) => {
                            return (
                                <Card data={item} props={data}/>
                            );
                        }}

                    />
                </View>
            </View>
        </View>
    );
}
