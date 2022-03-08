import { StyleSheet, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        padding: ScreenScale(19)
    },
    happenedText: {
        color: '#696969',
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
        marginTop: ScreenScale(22),
        lineHeight: FontScale(20)
    },
    subText: {
        marginTop: hp('2%'),
        color: 'black',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: FontScale(20),
        fontFamily: fonts.MEDIUM,
    },
    textContainer: {
        flex: 1,
        fontSize: FontScale(14),
        fontFamily: fonts.LIGHT,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        borderRadius: ScreenScale(20),
        height: ScreenScale(50),
        backgroundColor: '#fff',
        elevation: 1,
        borderWidth:1,
        borderColor: '#E9E6E6'
    },
    button: {
        backgroundColor: colors.PRIMARY,
        marginTop: hp('3%'),
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: ScreenScale(55),
        width: wp('90%'),
    },
    buttonText: {
        fontSize: FontScale(18),
        color: colors.WHITE,
        fontFamily: fonts.MEDIUM,
        lineHeight: FontScale(27)
    },
    button1: {
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
        marginTop: hp('3%'),
        borderRadius: ScreenScale(25),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: ScreenScale(55),
        width: wp('90%'),
    },
    buttonText1: {
        marginLeft: ScreenScale(20),
        fontSize: FontScale(18),
        color: '#2B2E34',
        fontFamily: fonts.MEDIUM,
        lineHeight: FontScale(27)
    },
    errorText: {
        marginRight: wp('8%'),
        marginVertical: hp('1%'),
        alignSelf: 'flex-end',
        fontWeight: '500',
        fontSize: FontScale(12),
        color: 'red',
    },
    uploadText:{
        marginLeft: wp('2%'),
        fontWeight: '500',
        fontSize: FontScale(14),
        color: '#696969',
    },
    headModalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalContainer: {
        flex: 1,
        height: hp('35%'),
        backgroundColor: 'white',
        marginTop: hp('65%'),
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: '5%',
    },
    modalHeadText: {
        fontWeight: '400',
        fontSize: FontScale(20),
        fontFamily: fonts.MEDIUM,
        marginVertical: hp('2%'),
        marginHorizontal: wp('2%'),
    },
    modalIconContainer: {
        flexDirection: 'row',
    },
    iconText: {
        fontWeight: '400',
        fontSize: FontScale(12),
        fontFamily: fonts.MEDIUM,
        color: '#696969',
        alignSelf: 'center',
        marginVertical: hp('1%'),
    },
    modalIcon: {
        height: ScreenScale(110),
        width: ScreenScale(110),
        borderColor: '#E9E6E6',
        borderRadius: 13,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%',
    },
});
