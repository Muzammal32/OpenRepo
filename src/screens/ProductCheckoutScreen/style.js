import { StyleSheet, Dimensions } from 'react-native';
import {colors, fonts} from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CLR,
    },
    sub_view:{
        flexDirection:'row',
        padding:'2%',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderBottomWidth:0.3,
        borderColor:colors.NOBEL
    },
    homeText:{
        marginTop: ScreenScale(11),
        fontWeight: '500',
        fontSize: FontScale(20),
        fontFamily: fonts.REGULAR,
        marginLeft: ScreenScale(25)
    },
    homeSubText: {
        marginBottom: ScreenScale(11),
        fontWeight: '400',
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
        marginLeft: ScreenScale(25),
        color: '#B4B4B4',
        lineHeight: FontScale(27)
    },
    image:{
        alignSelf:'center',
        justifyContent:'center',
    },
    title: {
        fontWeight: '500',
        fontSize: FontScale(16),
        fontFamily: fonts.MEDIUM,
        color:colors.BLACK,
        lineHeight: FontScale(24)
    },
    desc: {
        marginTop: ScreenScale(13),
        fontWeight: '300',
        fontSize: FontScale(13),
        fontFamily: fonts.REGULAR,
        color: '#696969',
        lineHeight: FontScale(20)
    },
    price:{
        fontSize: FontScale(18),
        color: '#696969',
        fontFamily: fonts.REGULAR
    },
    address:{
        fontSize: FontScale(13),
        color: '#696969',
        fontFamily: fonts.REGULAR
    },
    add_address: {
        marginTop: ScreenScale(10),
        fontSize: ScreenScale(13),
        color: '#2B2E34',
        fontFamily: fonts.BOLD
    },
    tag: {
        position:'absolute',
        backgroundColor: colors.BLACK,
        height: ScreenScale(19),
        width: ScreenScale(110),
        marginTop: ScreenScale(12)
    },
    tagText: {
        flex:1,
        fontWeight: '500',
        fontSize: FontScale(15),
        fontFamily: fonts.MEDIUM,
        color:colors.WHITE,
        alignSelf:'center',
        justifyContent:'center'
    },
    btnText: {
        color: colors.WHITE,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
    },
    btn: {
        backgroundColor: 'black',
        bottom: 20
    },
    scrollView:{
        flexDirection:'column',
        paddingBottom:30
    },
    card:{
        flex: 1,
        width:'100%',
        flexDirection: 'row',
        alignSelf:'center',
        backgroundColor:colors.WHITE,
        borderColor: '#E9E6E6',
        borderBottomWidth: 1,
        paddingHorizontal: ScreenScale(20),
        paddingVertical: ScreenScale(47),
        justifyContent: 'space-between'
    },
    image_section:{
        height: ScreenScale(152),
        width: ScreenScale(111),
        backgroundColor:colors.SILVER,
        margin: ScreenScale(13)
    },
    description_section:{
        borderTopWidth:0.5,
        borderTopColor:'#F5F5F5'
    },
    bottomContainer: {
        margin: ScreenScale(11),
        paddingVertical: ScreenScale(10),
    },
    titleText: {
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
        color:colors.BLACK,
        lineHeight: FontScale(27)
    },
    product_no:{
        fontSize: FontScale(12),
        color: '#B4B4B4',
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(18),
        marginBottom: ScreenScale(10),
    },
    descriptionText:{
        fontSize: FontScale(18),
        color: colors.BLACK,
        fontFamily:fonts.REGULAR,
        marginTop:6,
        lineHeight: FontScale(27)
    },
});
