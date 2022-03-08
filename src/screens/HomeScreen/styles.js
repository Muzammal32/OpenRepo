import { StyleSheet, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts, colors } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;
const dotContainer = {
    width: ScreenScale(12),
    height: ScreenScale(12),
    borderRadius: ScreenScale(20),
    marginHorizontal: 3,
};

export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: '2%',
        paddingBottom: 0,
        backgroundColor: colors.BACKGROUND_CLR
    },
    sub_view:{
        flexDirection:'row',
        padding:'2%',
        justifyContent:'space-between'
    },
    headTextName: {
        alignSelf: 'center',
        marginTop: hp('20%'),
        fontWeight: '300',
        fontSize: FontScale(26),
        fontFamily: fonts.LIGHT,
    },
    homeText:{
        alignSelf: 'center',
        // fontWeight: '500',
        fontSize: FontScale(24),
        fontFamily: fonts.MEDIUM,
        textAlign:'center'
    },
    icon_view:{
        flexDirection:'row',
        justifyContent:"space-between",
        flex: 0.3,
        alignItems:'center'
    },
    borderTouchable:{
        backgroundColor:colors.WHITE,
        paddingHorizontal: ScreenScale(10),
        borderRadius: ScreenScale(10),
        elevation: 3,
        shadowOpacity: 0.1,
        borderWidth: 1,
        borderColor: '#E9E6E6'
    },
    borderTouchable2:{
        margin:'2%'
    },
    headText: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: FontScale(26),
        fontFamily: fonts.MEDIUM,
        textAlign:'center'
    },
    cardComponent: {
        marginTop: hp('16%'),
    },
    title: {
        marginTop: hp('2.7%'),
    },
    createAccountBtn: {
        backgroundColor: 'black',
        marginTop: '20%',
        marginBottom:'10%',
        width: ScreenScale(250)
    },
    createBtn: {
        color: colors.WHITE,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
    },
    skipBtnContainer: {
        flex: 1,
    },
    skipBtn: {
        fontWeight: '400',
        fontSize: FontScale(16),
        fontFamily: fonts.MEDIUM,
        color: '#B4B4B4',
        alignSelf: 'center',
    },
    scrollView:{
        flexDirection:'column',
        padding: ScreenScale(5)
    },
    progressChartView:{
        backgroundColor:colors.WHITE,
        height: ScreenScale(100),
        borderRadius: ScreenScale(10),
        flexDirection:'row',
        marginBottom: ScreenScale(15),
        elevation: 2,
        shadowOpacity: 0.1,
        alignItems:'center'
    },
    barChartView:{
        backgroundColor:colors.WHITE,
        height: ScreenScale(340),
        borderRadius: ScreenScale(10),
        marginBottom: ScreenScale(15),
        elevation: 2,
        shadowOpacity: 0.1,
    },
    pieChartView:{
        backgroundColor:colors.WHITE,
        borderRadius: ScreenScale(10),
        marginBottom: ScreenScale(15),
        elevation: 2,
        shadowOpacity: 0.1,
    },
    textView: {
        flexDirection:'column',
        paddingVertical : ScreenScale(20)
    },
    topView:{
        flexDirection: 'row',
        flex:1,
        justifyContent:'space-between',
        paddingVertical : ScreenScale(14),
        paddingHorizontal: ScreenScale(24)
    },
    goodMornText:{
        // fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
        color: '#2B2E34'
    },
    dailyText: {
        fontSize: FontScale(14),
        fontFamily: fonts.REGULAR,
        color: '#B4B4B4'
    },
    tokenText: {
        color: '#B4B4B4',
        fontWeight: '400',
        fontSize: FontScale(11),
        fontFamily: fonts.REGULAR,
        alignSelf:'center',
    },
    tokenColor:{
        width: ScreenScale(10),
        height: ScreenScale(10),
        alignSelf:'center',
        marginRight: ScreenScale(5),
        borderRadius: 2,
        backgroundColor:colors.BLACK
    },
    textSetting:{
        color: '#696969',
        fontWeight: '400',
        fontSize: ScreenScale(18),
        fontFamily: fonts.REGULAR,
    },
    topBarFilter:{
        flexDirection: 'row',
        height: ScreenScale(50),
        backgroundColor: colors.WHITE,
        elevation: 3,
        alignItems:"center",
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(196,196,196,0.80)'
    },
    modalView: {
        width: '90%',
        height: ScreenScale(400),
        margin: ScreenScale(20),
        alignItems:'center',
        backgroundColor: "white",
        borderRadius: ScreenScale(20),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3
    },
    modalDateText: {
        fontFamily: fonts.REGULAR,
        fontSize: FontScale(14),
        fontWeight: '400',
        lineHeight: FontScale(21),
        color: '#B4B4B4',
        marginTop: ScreenScale(32)
    },
    checkHeaderText: {
        fontFamily: fonts.MEDIUM,
        fontSize: FontScale(24),
        fontWeight: '500',
        lineHeight: FontScale(36),
        color: '#000',
        marginTop: ScreenScale(7),
    },
    checkHeaderNumber: {
        fontFamily: fonts.THIN,
        fontSize: FontScale(24),
        fontWeight: '300',
        lineHeight: FontScale(36),
        color: '#000',
        marginTop: ScreenScale(7),
    },
    modalbody: {
        fontFamily: fonts.REGULAR,
        fontSize: FontScale(20),
        fontWeight: '300',
        lineHeight: FontScale(30),
        color: '#000',
        marginTop: ScreenScale(40),
        paddingHorizontal: ScreenScale(20,height),
        textAlign: 'center'
    },
    modalButtonGroup:{
        marginVertical: ScreenScale(31),
        flexDirection: 'row'
    },
    modalButton:{
        height: ScreenScale(53),
        width: ScreenScale(53),
        borderWidth: 1,
        borderColor: '#E9E6E6',
        marginHorizontal: ScreenScale(10),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButtonText:{
        fontFamily: fonts.REGULAR,
        fontSize: FontScale(14),
        fontWeight: '300',
        lineHeight: FontScale(21),
        color: '#696969'
    },
    pagerView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    selectedBorder: {
        ...dotContainer,
        borderColor: colors.PRIMARY,
        borderWidth: 2,
    },
    inActiveDot: {
        ...dotContainer,
        borderRadius: ScreenScale(100),
        backgroundColor: '#E0DDDD',
    },
    centeredView1: {
        flex: 1,
        marginTop: ScreenScale(45),
        backgroundColor: "rgba(196,196,196,0.8)"
    },
    modalView1: {
        margin: ScreenScale(20),
        backgroundColor: "white",
        borderRadius: ScreenScale(20),
        padding: ScreenScale(35),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    viewChoice:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical: ScreenScale(10)
    },
    choiceText:{
        fontSize: FontScale(18),
        color:colors.DOVE_GRAY,
        marginLeft: ScreenScale(20)
    },
    goal: {
        width: '100%',
        padding: ScreenScale(20),
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.BON_JOUR,
    },
});
