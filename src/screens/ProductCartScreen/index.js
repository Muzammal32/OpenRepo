import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image, ScrollView,
    StatusBar, Text, TouchableOpacity,
    View
} from 'react-native';

import styles from './style';
import {colors, images} from "../../constants";
import style from "./style";
import CustomButton from "../../components/CustomButton";
import {connect} from "react-redux";
import {
    addToCart,
    deleteCart,
    getMyCart,
    getMyCartPagination,
} from "../../store/products/products-actions";
import Loading from "../../components/Loader";
import Icon from "../../components/Icon";
import NumericInput from "react-native-numeric-input";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ScreenScale} from "../../utils/CommonHelper";

const Card = ({data, props}) =>{
    const [quantity, setQuantity] = useState(data.quantity);

    const deleteMyCart = (data) =>{
        props.deleteCart(data.id, (res)=>{
            if (res.success){
                props.getMyCart((res) => {
                });
            }
        });
    };

    const quantityMyCart = (quantity) =>{
        setQuantity(quantity);
        const model = {
            product_id: data.product_id,
            quantity: quantity,
            cart_status: 'quantity_update'
        };
        props.addToCart(model, (response)=>{
            if (response.success){
                props.getMyCart((res) => {
                });
            }
        });
    };

    return (
        <View style={styles.card}>
            <Image source={{uri:data.thumbnail}} style={styles.image_section}/>
            <View style={styles.description_section}>
                <Text style={styles.titleText}>{data.title}</Text>
                <Text style={styles.product_no}>QTY : {data.quantity}</Text>
                <Text style={styles.product_no}>Price: <Text style={styles.descriptionText}>${data.total}</Text> </Text>
                <View style={{marginTop: ScreenScale(10)}}>
                    <NumericInput
                        value={quantity}
                        onChange={value => quantityMyCart(value)}
                        totalWidth={ScreenScale(85)}
                        totalHeight={ScreenScale(26)}
                        step={1}
                        iconSize={50}
                        editable={false}
                        separatorWidth={0}
                        // rounded={true}
                        type={'plus-minus'}
                        valueType='integer'
                        textColor={colors.BLACK}
                        iconStyle={{ color: '#696969', fontSize: 16, }}
                        containerStyle={{backgroundColor: '#E9E6E6', borderRadius:4}}
                        rightButtonBackgroundColor='#E9E6E6'
                        leftButtonBackgroundColor='#E9E6E6'
                    />
                </View>
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent:'center', marginBottom: ScreenScale(40)}}>
                <TouchableOpacity onPress={() => deleteMyCart(data)}>
                    <Icon name={'delete_icon'} size={ScreenScale(22)} color='#B4B4B4' style={{alignSelf:'flex-end'}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};


function ProductCart(props) {
    const {navigation} = props;

    useEffect(() => {
        navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getProductsList();
        });
    }, []);

    const getProductsList = () => {
        props.getMyCart((res) => {});
    };

    const onRefresh = () =>{
        getProductsList()
    };

    const LoadMoreRandomData = () => {
        let split;
        if (props.cartPagination.next !== null) {
            split = props.cartPagination.next.split("shopping-cart");
            props.getMyCartPagination(props.cartList, split[1], ()=>{});
        }
    };

    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.BACKGROUND_CLR}/>
            <Loading loading={props.processing}/>
            {props.cartList.length <= 0 ?
                !props.processing &&
                <View style={style.nothingInCart}>
                    <Image source={images.CART} imageStyle={styles.image} style={{width: ScreenScale(300), height: ScreenScale(400)}}/>
                    <Text style={style.nothingInCartText}>
                        You have not added any {'\n'} product yet.
                    </Text>
                    <CustomButton
                        buttonContainerStyle={styles.btn}
                        buttonTextStyle={styles.btnText}
                        title={'Visit Store'}
                        onPress={()=> props.navigation.navigate('Merchandise Store')}
                    />
                </View>
                :
                <View style={{flex:1}}>
                    <View style={styles.rowView}>
                        <Text style={styles.homeText}>{props.cartList.length} Products</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Merchandise Store')}>
                            <MaterialCommunityIcons name={'shopping-search'} size={28} color={colors.DOVE_GRAY}/>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={props.cartList}
                        showsVerticalScrollIndicator={false}
                        refreshing={false}
                        initialNumToRender={10}
                        onRefresh={onRefresh}
                        onEndReachedThreshold={0}
                        onEndReached={LoadMoreRandomData}
                        ListFooterComponent={() =>
                            props.isProcessingMore ? (
                                <View style={{marginBottom: ScreenScale(50)}}>
                                    <ActivityIndicator size="large" color={colors.BLACK} />
                                </View>
                            ) : (
                                <View style={{marginBottom: ScreenScale(50)}}/>
                            )
                        }
                        numColumns={1}
                        contentContainerStyle={{paddingHorizontal: 1}}
                        keyExtractor={(item, index) => `${item.title}_${index}`}
                        renderItem={({item}) => {
                            return (
                                <Card data={item} props={props}/>
                            );
                        }}
                    />
                    {!props.isProcessingMore && (
                        <View style={styles.bottomGroup}>
                            <CustomButton
                                buttonContainerStyle={styles.btnCheckout}
                                buttonTextStyle={styles.btnTextCheckout}
                                title={'CHECKOUT'}
                                onPress={()=> props.navigation.navigate('Checkout Process')}
                            />
                        </View>
                    )}
                </View>
            }
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    return {
        processing: state.products.processing,
        isProcessingMore: state.products.isProcessingMore,
        cartList: state.products.cartList,
        cartPagination: state.products.cartPagination
    };
};
export default connect(mapStateToProps, {getMyCart, addToCart, getMyCartPagination, deleteCart})(ProductCart);

