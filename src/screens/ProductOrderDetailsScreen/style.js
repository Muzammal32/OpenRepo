import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

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
        fontSize: FontScale(13),
        color: '#2B2E34',
        fontFamily: fonts.BOLD
    },
    tag: {
        position:'absolute',
        backgroundColor: colors.BLACK,
        height: ScreenScale(19),
        width: ScreenScale(110),
        marginTop: FontScale(12)
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
        position: 'absolute',
        bottom: 20
    },
    scrollView:{
        flexDirection:'column',
    },
    card:{
        flex: 1,
        width:'90%',
        alignSelf:'center',
        backgroundColor:colors.WHITE,
        paddingHorizontal: ScreenScale(20),
        paddingVertical: ScreenScale(24),
        marginTop: ScreenScale(17),
        borderRadius: ScreenScale(15),
        elevation: 2,
    },
    image_section:{
        height: ScreenScale(152),
        width: ScreenScale(111),
        backgroundColor:colors.SILVER,
        marginRight: ScreenScale(23),
        borderRadius: 3,
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
        fontFamily: fonts.SEMIBOLD,
        color:colors.BLACK,
        lineHeight: FontScale(27)
    },
    codeText:{
        fontSize: FontScale(14),
        color: '#B4B4B4',
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(21),
        marginBottom: ScreenScale(6),
    },
    product_no:{
        fontSize: FontScale(14),
        color: '#696969',
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(21),
        marginBottom: ScreenScale(10),
    },
    descriptionText:{
        fontSize: FontScale(18),
        color: colors.BLACK,
        fontFamily:fonts.REGULAR,
        marginTop:6,
        lineHeight: FontScale(27)
    },
    orderText: {
        fontWeight: '500',
        fontSize: FontScale(16),
        fontFamily: fonts.MEDIUM,
        color:colors.BLACK,
        lineHeight: FontScale(27)
    },
});
