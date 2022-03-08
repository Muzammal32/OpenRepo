import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image, Platform,
    StatusBar, Text, TouchableOpacity,
    View
} from 'react-native';

import styles from './style';
import {colors, images} from "../../constants";
import style from "./style";
import CustomButton from "../../components/CustomButton";
import {connect} from "react-redux";
import {getMyOrders, getMyOrdersPagination} from "../../store/products/products-actions";
import Loading from "../../components/Loader";
import {RFValue} from "react-native-responsive-fontsize";
import {ScreenScale} from "../../utils/CommonHelper";

const Card = ({data, props}) =>{
    return (
        <View style={styles.card}>
            {data.products.length > 0 &&
                <>
                    <Image source={{uri: data.products[0].thumbnail}} style={styles.image_section}/>
                    <View style={styles.description_section}>
                        {/*<Text style={styles.product_no}>Delivery date: {data.date}</Text>*/}
                        <Text style={styles.titleText}>{ data.products[0].product_title}</Text>
                        <Text style={styles.product_no}>Price: <Text style={styles.descriptionText}>${
                            data.products[0].total_price
                        }</Text></Text>
                        <Text style={styles.product_no}>Amount : {data.products[0].quantity}x</Text>
                        <CustomButton
                            buttonContainerStyle={styles.btnCheckout}
                            buttonTextStyle={styles.btnTextCheckout}
                            title={'View Details'}
                            onPress={()=>  props.navigation.navigate('Order Details',{item: data})}
                        />
                    </View>
                </>
            }
        </View>
    )
};

const useStateCallbackWrapper = (initialValue = '', callBack) => {
    const [state, setState] = useState(initialValue);
    useEffect(() => callBack(state), [state]);
    return [state, setState];
};

function ProductOrder(props) {
    const {navigation} = props;

    useEffect(() => {
        navigation.addListener('focus', () => {
            // Screen was focused
            // Do something
            getProductsList();
        });
    }, []);

    const getProductsList = () => {
        props.getMyOrders(active,(res) => {});
    };

    const [active, setActive] = useStateCallbackWrapper("", getProductsList);

    const onRefresh = () =>{
        getProductsList()
    };

    const LoadMoreRandomData = () => {
        let split;
        if (props.ordersPagination.next !== null) {
            split = props.ordersPagination.next.split("order");
            props.getMyOrdersPagination(props.ordersList, split[1], ()=>{});
        }
    };


    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            <Loading loading={props.processing}/>
            <View style={style.buttonGroup}>
                <CustomButton
                    buttonContainerStyle={active === "" ? styles.btnTop : styles.btnTopEmpty}
                    buttonTextStyle={styles.btnTextTop}
                    title={'All'}
                    onPress={()=> setActive("")}
                />
                <CustomButton
                    buttonContainerStyle={active === "/1" ? styles.btnTop : styles.btnTopEmpty}
                    buttonTextStyle={styles.btnTextTop}
                    title={'Shipping'}
                    onPress={()=> setActive("/1")}
                />
                <CustomButton
                    buttonContainerStyle={active === "/2" ? styles.btnTop : styles.btnTopEmpty}
                    buttonTextStyle={styles.btnTextTop}
                    title={'Refund'}
                    onPress={()=> setActive("/2")}
                />
                <CustomButton
                    buttonContainerStyle={active === "/3" ? styles.btnTop : styles.btnTopEmpty}
                    buttonTextStyle={styles.btnTextTop}
                    title={'Completed'}
                    onPress={()=> setActive("/3")}
                />
            </View>
            <View style={style.scrollView}>

                { active === "" ?
                    <Text style={styles.homeText}> You have {props.ordersList.length} Orders</Text> :
                    active === "/1" ?
                        <Text style={styles.homeText}>{props.ordersList.length} Orders to Ship</Text> :
                        active === "/2" ?
                            <Text style={styles.homeText}>{props.ordersList.length} Orders Refunded</Text> :
                            active === "/3" &&
                                <Text style={styles.homeText}>{props.ordersList.length} Orders Completed</Text>
                }

                <FlatList
                    data={props.ordersList}
                    showsVerticalScrollIndicator={false}
                    refreshing={false}
                    initialNumToRender={10}
                    onRefresh={onRefresh}
                    onEndReachedThreshold={0}
                    onEndReached={LoadMoreRandomData}
                    ListFooterComponent={() =>
                        props.isProcessingMore ? (
                            <View style={{marginBottom: Platform.OS === 'ios' ? ScreenScale(130) : ScreenScale(130)}}>
                                <ActivityIndicator size="large" color={colors.BLACK} />
                            </View>
                        ) : (
                            <View style={{marginBottom: Platform.OS === 'ios' ? ScreenScale(130) : ScreenScale(130)}}/>
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
            </View>
        </View>
    );
}


const mapStateToProps = (state) => {
    return {
        processing: state.products.processing,
        isProcessingMore: state.products.isProcessingMore,
        ordersList: state.products.ordersList,
        ordersPagination: state.products.ordersPagination
    };
};
export default connect(mapStateToProps, {getMyOrders, getMyOrdersPagination})(ProductOrder);