import React, {useState} from 'react';
import {
    FlatList,
    Image,
    StatusBar, Text,
    View
} from 'react-native';

import styles from './style';
import {colors, icons, images} from "../../constants";
import style from "./style";
import CustomButton from "../../components/CustomButton";


export default function PaymentMethodScreen(props) {
    const {navigation} = props;

    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            {/*<Loading loading={props.processing}/>*/}
            <View style={style.nothingInCart}>
                <Image source={icons.CARD_ICON} imageStyle={styles.image} style={{borderWidth:1, width: 300, height: 400}}/>
                <Text style={style.nothingInCartText}>
                    You have not added any {'\n'} payment yet!
                </Text>
                <CustomButton
                    buttonContainerStyle={styles.btn}
                    buttonTextStyle={styles.btnText}
                    title={'Add'}
                    onPress={()=> {}}
                />
            </View>
        </View>
    );
}
