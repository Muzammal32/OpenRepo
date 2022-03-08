import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator, Alert, FlatList, Image, ScrollView,
    StatusBar,
    Text, TouchableOpacity,
    View
} from 'react-native';

import styles from './style';
import {colors, icons} from "../../constants";
import CustomButton from "../../components/CustomButton";
import {connect} from "react-redux";
import Loading from "../../components/Loader";
import Icon from "../../components/Icon";
import {addToCart, checkOut, deleteCart, getAddress, getMyCart} from "../../store/products/products-actions";
import NumericInput from "react-native-numeric-input";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import {ScreenScale} from "../../utils/CommonHelper";

const Card = ({data, props}) =>{

    const [quantity, setQuantity] = useState(data.quantity);


    const deleteMyCart = (data) =>{
        props.deleteCart(data.id, (res)=>{
            if (res.success){
                props.getMyCart(res.message);
            }
        });
    };

    const quantityMyCart = (quantity) =>{
        setQuantity(quantity)
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
            <View style={{flexDirection:'row'}}>
                <View style={styles.description_section}>
                    <Text style={styles.titleText}>{data.title}</Text>
                    <Text style={styles.product_no}>Price: ${data.price}</Text>
                </View>
                <NumericInput
                    value={quantity}
                    onChange={value => quantityMyCart(value)}
                    totalWidth={ScreenScale(65)}
                    totalHeight={ScreenScale(24)}
                    step={1}
                    iconSize={50}
                    editable={false}
                    separatorWidth={0}
                    // rounded={true}
                    type={'plus-minus'}
                    valueType='integer'
                    textColor={colors.BLACK}
                    iconStyle={{ color: '#696969', fontSize: 16, }}
                    containerStyle={{backgroundColor: '#E9E6E6', borderRadius:4, marginLeft: ScreenScale(15)}}
                    rightButtonBackgroundColor='#E9E6E6'
                    leftButtonBackgroundColor='#E9E6E6'
                />
            </View>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity onPress={() => deleteMyCart(data)} style={{marginTop: ScreenScale(-10)}}>
                    <Icon name={'delete_icon'} size={ScreenScale(22)} color='#B4B4B4' style={{alignSelf:'flex-end'}}/>
                </TouchableOpacity>
                <Text style={styles.descriptionText}>${data.total}.00</Text>
            </View>
        </View>
    )
};


function ProductCheckout(props) {
    const {navigation} = props;
    const [radioSelected, setRadioSelected] = useState(1);
    const [grandTotal, setGrandTotal] = useState(0);
    const [radio_props, setRadio_props] = useState([]);

    useEffect(()=>{
        if (props.cartList.length > 1){
            props.cartList.reduce((a, b)=>{
                setGrandTotal(a.total+b.total)
            })
        } else {
            setGrandTotal(props.cartList[0].total)
        }
    },[props.cartList]);

    useEffect(() => {
        navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            props.getAddress();
        });
    }, []);

    useEffect(()=>{
        let array = [];
        props.addressList.map((data)=>{
            array.push({
                label: data.street_address+", "+data.city+", "+data.zip_code,
                value: data.id
            })
        });
        setRadio_props(array);
    }, [props.addressList]);

    const checkOutProcess = () =>{
        let address = '';
        radio_props.map((data, i)=>{
            if (data.value === radioSelected){
                address = data.value
            }
        });

        if (!address){
            Alert.alert('Be Fulfilled', 'Please Choose an address!');
            return
        }
        let items = props.cartList.map((data, id)=>{
            return data.id
        });
        let data = {
            address_id : address,
            items : items
        }

        props.checkOut(data, (res)=>{
            if (res.success) {
                getMyCart();
                props.navigation.goBack()
            } else {
                Alert.alert('Be fulfilled', 'Something went wrong please contact our support team! Thanks');
            }
        });
    };

    return (
        <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            <Loading loading={props.processing}/>
            <View style={styles.scrollView}>
                <View style={styles.description_section}>
                    <FlatList
                        data={props.cartList}
                        showsVerticalScrollIndicator={false}
                        refreshing={false}
                        numColumns={1}
                        keyExtractor={(item, index) => `${item.title}_${index}`}
                        renderItem={({item}) => {
                            return (
                                <Card data={item} props={props}/>
                            );
                        }}

                    />

                    <View style={styles.bottomContainer}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: ScreenScale(10)}}>
                            <Text style={styles.titleText}>Total Price</Text>
                            <Text style={styles.price}>
                                ${grandTotal}
                            </Text>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: ScreenScale(55), marginBottom: ScreenScale(14)}}>
                            <Text style={styles.titleText}>Shipping Address</Text>
                        </View>
                        <RadioForm
                            initial={radioSelected}
                            style={{marginTop: ScreenScale(5)}}>
                            {radio_props.map((obj, i,onPress) => (
                                    <RadioButton labelHorizontal={true} key={i} style={{marginTop: ScreenScale(5), alignItems:'center'}}>
                                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                        <RadioButtonInput
                                            obj={obj}
                                            index={i}
                                            isSelected={radioSelected === obj.value}
                                            borderWidth={1}
                                            buttonInnerColor={'#000'}
                                            buttonOuterColor={ '#C8C7C7'}
                                            onPress={(value, i)=> setRadioSelected(value)}
                                            buttonSize={15}
                                            buttonOuterSize={20}
                                            buttonStyle={{backgroundColor:'rgba(0, 16, 61, 0.06)'}}
                                            buttonWrapStyle={{marginLeft: 10}}
                                        />
                                        <RadioButtonLabel
                                            obj={obj}
                                            index={i}
                                            onPress={(value, i)=> setRadioSelected(value)}
                                            labelHorizontal={true}
                                            labelStyle={{fontSize: 13, color: '#696969', marginBottom:5}}
                                            labelWrapStyle={{}}
                                        />
                                    </RadioButton>
                                ))
                            }
                        </RadioForm>

                        <TouchableOpacity activeOpacity={0.7} onPress={()=> navigation.navigate('Shipping Address')}>
                            <Text style={styles.add_address}>Add New Address</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {props.cartList.length > 0 &&
            <CustomButton
                buttonContainerStyle={styles.btn}
                buttonTextStyle={styles.btnText}
                title={'Checkout'}
                onPress={()=> checkOutProcess()}
            />
            }
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    return {
        processing: state.products.processing,
        isProcessingMore: state.products.isProcessingMore,
        cartList: state.products.cartList,
        cartPagination: state.products.cartPagination,
        addressList: state.products.addressList,
    };
};
export default connect(mapStateToProps, {getMyCart, deleteCart, addToCart, getAddress, checkOut})(ProductCheckout);
