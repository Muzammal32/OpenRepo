import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CLR,
    },
    nothingInCart:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    image:{
        alignSelf:'center',
        justifyContent:'center',
    },
    nothingInCartText:{
        fontWeight: '400',
        color: colors.BLACK,
        fontSize: FontScale(20),
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(30),
        textAlign: "center"
    },
    btnText: {
        color: colors.WHITE,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
    },
    btn: {
        marginTop: ScreenScale(40),
        backgroundColor: 'black',
        width: ScreenScale(250),
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
        marginTop: ScreenScale(18),
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
        marginLeft: ScreenScale(27)
    },
    homeSubText:{
        marginBottom: ScreenScale(11),
        fontWeight: '400',
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
        marginLeft: ScreenScale(25),
        color: '#B4B4B4',
        lineHeight: FontScale(27)
    },
    card:{
        width:'90%',
        flexDirection: 'row',
        marginVertical: ScreenScale(10),
        alignSelf:'center',
        backgroundColor:colors.WHITE,
        elevation: 1,
        shadowOpacity:0.1,
        borderRadius:10
    },
    image_section:{
        height: ScreenScale(152),
        width: ScreenScale(111),
        backgroundColor:colors.SILVER,
        margin: ScreenScale(13)
    },
    description_section:{
        margin: ScreenScale(11),
        paddingVertical: ScreenScale(11),
        borderTopWidth:0.5,
        borderTopColor:'#F5F5F5'
    },
    titleText: {
        fontWeight: '500',
        fontSize:  FontScale(18),
        fontFamily: fonts.MEDIUM,
        color:colors.BLACK,
        lineHeight: FontScale(27)
    },
    product_no:{
        fontSize: FontScale(12),
        color: '#B4B4B4',
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(18)
    },
    descriptionText:{
        fontSize: FontScale(12),
        color: colors.BLACK,
        fontFamily:fonts.REGULAR,
        marginTop:6,
        lineHeight: FontScale(15)
    },
    btnTextCheckout: {
        color: colors.WHITE,
        textAlign: 'center',
        fontWeight: '300',
        fontSize: FontScale(12),
        fontFamily: fonts.MEDIUM,
        lineHeight: FontScale(24)
    },
    btnCheckout: {
        marginTop: ScreenScale(17),
        backgroundColor: 'black',
        paddingVertical: 4,
        height: ScreenScale(32),
        width: ScreenScale(200),
    },

    buttonGroup:{
        flexDirection: 'row',
        paddingVertical: ScreenScale(18),
        borderBottomWidth: 1,
        borderColor: '#E9E6E6',
        marginHorizontal: 20,
        justifyContent:'space-around'
    },
    btnTextTop: {
        color: colors.BLACK,
        textAlign: 'center',
        fontWeight: '300',
        fontSize: FontScale(12),
        fontFamily: fonts.MEDIUM,
        lineHeight: FontScale(26)
    },
    btnTop: {
        marginTop: ScreenScale(17),
        backgroundColor: 'white',
        width: ScreenScale(100),
        elevation: 3,
        shadowOpacity:0.3
    },
    btnTopEmpty:{
        marginTop: ScreenScale(17),
        width: ScreenScale(100),
    }
});
