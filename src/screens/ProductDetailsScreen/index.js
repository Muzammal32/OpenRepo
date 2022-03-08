import React, {useState} from 'react';
import { Image, ScrollView,
    StatusBar,
    Text,
    View
} from 'react-native';

import styles from './style';
import {colors, images} from "../../constants";
import Divider from "../../components/Divider";
import CustomButton from "../../components/CustomButton";
import {connect} from "react-redux";
import {addToCart} from "../../store/products/products-actions";
import NumericInput from "react-native-numeric-input";
import {ScreenScale} from "../../utils/CommonHelper";


function ProductDetails(props) {
    const {navigation} = props;

    const [quantity, setQuantity] = useState(1);

    const item = props.route.params.item;

    const addToCart = () =>{
        const model = {
            product_id: item.id,
            quantity: quantity,
            cart_status: 'add_to_cart'
        };
        props.addToCart(model, (response)=>{
            if (response.success){
                navigation.navigate('Tabs',{screen: 'Cart'});
            }
        });
    };

    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Image source={{uri: item.image}} imageStyle={styles.image} style={styles.image_section}/>
                <View style={styles.description_section}>
                    <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Text style={styles.titleText}>{item.title}</Text>
                                <Text style={styles.product_no}>{item.product_code}</Text>
                            </View>
                            <View style={{marginLeft: ScreenScale(22)}}>
                                <NumericInput
                                    value={quantity}
                                    onChange={value => setQuantity(value)}
                                    totalWidth={ScreenScale(85)}
                                    totalHeight={ScreenScale(26)}
                                    step={1}
                                    iconSize={50}
                                    editable={false}
                                    separatorWidth={0}
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
                        <Text style={styles.price}>{item.price}$</Text>
                    </View>

                    <Divider vertical={30}/>
                    <Text style={styles.title}>Description</Text>
                    <Text style={styles.desc}>
                        {item.description}
                    </Text>
                    <Divider vertical={30}/>
                    <Text style={styles.title}>Ingredients</Text>
                    <Text style={styles.desc}>
                        {item.ingredient}
                    </Text>
                    <Divider vertical={30}/>
                </View>
            </ScrollView>
            <CustomButton
                buttonContainerStyle={styles.btn}
                buttonTextStyle={styles.btnText}
                title={'Confirm'}
                onPress={()=> addToCart()}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        processing: state.products.processing,
    };
};
export default connect(mapStateToProps, {addToCart})(ProductDetails);
