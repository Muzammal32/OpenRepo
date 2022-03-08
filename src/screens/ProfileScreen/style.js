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
        padding: ScreenScale( 20),
        backgroundColor: '#F9F9F9',
    },
    profile_container:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center'
    },
    profile_picture: {
        width: ScreenScale(186),
        height: ScreenScale(186),
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: colors.BON_JOUR
    },
    profile_details:{
        alignItems: 'center',
        marginLeft: ScreenScale(17)
    },
    profile_name:{
        marginTop: ScreenScale(27),
        fontSize: FontScale(18),
        lineHeight: FontScale(23),
        fontFamily: fonts.MEDIUM,
        color:"#2B2E34"
    },
    profile_company:{
        fontSize: FontScale(16),
        lineHeight: FontScale(24),
        fontFamily: fonts.REGULAR,
        color:"#B4B4B4"
    },
    upload_button: {
        position:'absolute',
        height: ScreenScale(57),
        width: ScreenScale( 57),
        borderRadius: 100,
        backgroundColor: colors.BLACK,
        justifyContent: 'center',
        alignItems:'center',
        right: 0,
        bottom: 0,
        borderColor: colors.WHITE,
        borderWidth: 1
    },
    divider:{
        marginVertical: ScreenScale(25),
        borderWidth:1,
        borderColor:'#E9E6E6'
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
        height: 110,
        width: 110,
        borderColor: '#E9E6E6',
        borderRadius: 13,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%',
    },
    text_input_container:{
        paddingTop: ScreenScale( 20),
        // paddingBottom: RFValue(12),
        borderBottomWidth:1,
        borderBottomColor:'#E9E6E6'
    },
    text_input_heading:{
        fontWeight: '400',
        fontSize: FontScale(12),
        fontFamily: fonts.MEDIUM,
        color: '#B4B4B4',
        lineHeight: FontScale(18),
        textTransform: 'uppercase',
        marginBottom: ScreenScale(8)
    },
    text_input:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    input_text:{
        fontWeight: '500',
        height: ScreenScale(50),
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
        color: '#2B2E34',
        lineHeight: FontScale(27),
        width: '100%'
    },
    loginBtn: {
        color: colors.WHITE,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
    },
    loginbtn: {
        backgroundColor: 'black',
    },
    errorStyle: {
        color: 'red',
        fontFamily: fonts.MEDIUM,
        fontSize: FontScale(12),
    },
});
