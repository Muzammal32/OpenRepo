import { StyleSheet, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts, colors } from '../../constants';
import {FontScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '1%',
        paddingHorizontal:'5%',
        backgroundColor: colors.BACKGROUND_CLR,
    },
    inputMainContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: wp('5%'),
    },
    daysContainer: {
        paddingVertical: hp('2%'),
    },
    text: {
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
        fontWeight: '500',
    },
    inputContainer: {
        flex: 1,
        borderWidth: 1,
        width: wp('80%'),
        height: hp('14%'),
        borderRadius: 16,
        color: 'white',
        borderColor: '#E5E5E5',
        paddingTop: hp('1%'),
        paddingHorizontal: wp('3%'),
    },
    textContainer: {
        fontSize: FontScale(14),
        fontFamily: fonts.LIGHT,
        justifyContent: 'flex-start',
    },
    answerContainer: {
        paddingVertical: hp('1%'),
        color: colors.DOVE_GRAY,

    },
    buttonStyle: {
        backgroundColor: '#EAE9E9',
        width: wp('80%'),
    },
    textUsed: {
        color: 'black',
    },
    button: {
        backgroundColor: colors.PRIMARY,
        marginVertical: hp('2.5%'),
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: hp('6%'),
    },
    buttonText: {
        fontSize: 18,
        color: colors.WHITE,
        fontFamily: fonts.MEDIUM,
    },
    dateContainer:{
        height: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingHorizontal: 10
    },
    dateText: {
        fontFamily: fonts.REGULAR,
        fontSize: FontScale(13),
        color : colors.DOVE_GRAY
    }
});
