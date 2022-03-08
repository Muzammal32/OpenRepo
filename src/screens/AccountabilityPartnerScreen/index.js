import React, {useState} from 'react';
import {
    FlatList,
    Image,
    StatusBar, Text, TouchableHighlight, TouchableOpacity,
    View
} from 'react-native';

import styles from './style';
import {colors, fonts, icons, images} from "../../constants";
import style from "./style";
import CustomButton from "../../components/CustomButton";
import Icon from "../../components/Icon";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const Card = ({data, type, props}) =>{

    const triggerStyles = {
        triggerText: {
            color: 'black',
            fontFamily: fonts.BOLD,
            fontWeight: 'bold',
            fontSize: FontScale(20)
        },
        triggerWrapper: {
            paddingHorizontal: ScreenScale(5)
        },
        triggerTouchable: {
            underlayColor: 'white',
        },
        TriggerTouchableComponent: TouchableHighlight,
    };

    return (
        <View style={styles.card}>
            <Image source={images.VIDEO} style={styles.image_section}/>
            <View style={styles.description_section}>
                <View>
                    <Text style={styles.titleText}>Eleanor Pena</Text>
                    <Text style={styles.product_no}>Fairfield</Text>
                </View>
                {type === 0 ?
                    <TouchableOpacity style={style.removeButton} activeOpacity={0.8}>
                        <Icon name={'delete_icon'} size={20} color='#B4B4B4' style={{alignSelf:'flex-end'}}/>
                    </TouchableOpacity> :
                    <TouchableOpacity style={style.removeButton} activeOpacity={0.8}>
                        <Menu>
                            <MenuTrigger text='⋮' customStyles={triggerStyles}/>
                            <MenuOptions optionsContainerStyle={{paddingVertical: ScreenScale(25), paddingHorizontal: ScreenScale(15), borderRadius:ScreenScale(15)}}>
                                <MenuOption onSelect={() => {}} text='View Activity' />
                                <MenuOption onSelect={() => props.navigation.navigate('Invite Partner')} text={'Invite As Partner'} style={{marginVertical: ScreenScale(11)}}/>
                                <MenuOption onSelect={() => {}}  text='Leave Now!' />
                            </MenuOptions>
                        </Menu>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
};


export default function AccountabilityPartnerScreen(props) {
    const {navigation} = props;
    const [active, setActive] = useState(0);
    return (
        <View style={styles.screen}>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.WHITE}/>
            {/*<Loading loading={props.processing}/>*/}
            <View style={style.buttonGroup}>
                <CustomButton
                    buttonContainerStyle={active === 0 ? styles.btnTop : styles.btnTopEmpty}
                    buttonTextStyle={styles.btnTextTop}
                    title={'My Partners'}
                    onPress={()=> setActive(0)}
                />
                <CustomButton
                    buttonContainerStyle={active === 1 ? styles.btnTop : styles.btnTopEmpty}
                    buttonTextStyle={styles.btnTextTop}
                    title={'Me Partner With'}
                    onPress={()=> setActive(1)}
                />
            </View>
            <View style={style.scrollView}>

                {active === 0 ?
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={styles.homeText}> You have 12 Partners</Text>
                        <TouchableOpacity style={style.addButton} activeOpacity={0.8}>
                            <Image source={icons.ADD}/>
                        </TouchableOpacity>
                    </View>
                    :
                    <Text style={styles.homeText}>You have Partnered 12 Buddy</Text>

                }

                <FlatList
                    data={[{},{}]}
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
                            <Card data={{}} type={active} props={props}/>
                        );
                    }}
                />
            </View>
        </View>
    );
}
