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
        fontSize: FontScale(20),
        fontFamily: fonts.MEDIUM,
        marginLeft: ScreenScale(30)
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
        elevation: 2,
        shadowOpacity:0.2,
        borderRadius:10
    },
    image_section:{
        height: ScreenScale(87),
        width: ScreenScale(87),
        backgroundColor:colors.SILVER,
        margin: ScreenScale(13),
        borderRadius: ScreenScale(10)
    },
    description_section:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: ScreenScale(11),
        paddingVertical: ScreenScale(11),
        borderTopWidth:0.5,
        borderTopColor:'#F5F5F5'
    },
    titleText: {
        fontWeight: '400',
        fontSize: FontScale(20),
        fontFamily: fonts.REGULAR,
        color:colors.BLACK,
        lineHeight: FontScale(30)
    },
    product_no:{
        fontSize: FontScale(14),
        color: '#696969',
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(21),
        marginTop: ScreenScale(8)
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
        fontWeight: '400',
        fontSize: FontScale(14),
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(21)
    },
    btnTop: {
        backgroundColor: 'white',
        width: ScreenScale(140),
        elevation: 3,
        shadowOpacity:0.3
    },
    btnTopEmpty:{
        width: ScreenScale(140),
    },
    addButton:{
        backgroundColor:'white',
        width: ScreenScale(34),
        height: ScreenScale(34),
        marginTop: ScreenScale(18),
        marginRight: ScreenScale(30),
        elevation: 4,
        borderRadius: ScreenScale(10),
        justifyContent:'center',
        alignItems: 'center'
    },
    removeButton:{
        width: ScreenScale(34),
        height: ScreenScale(34),
        marginTop: ScreenScale(18),
        marginRight: ScreenScale(30),
        justifyContent:'center',
        alignItems: 'center'
    }
});
