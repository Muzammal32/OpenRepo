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
        marginVertical: ScreenScale(10),
        width: '47%',
        alignSelf:'center',
        backgroundColor:colors.WHITE,
        elevation: 2,
        shadowOpacity:0.2,
        borderRadius:10
    },
    image_section:{
        height: ScreenScale(293),
        width: ScreenScale(213),
        backgroundColor:colors.WHITE,
        alignSelf: 'center',
        marginTop: ScreenScale(17)
    },
    image:{
        alignSelf:'center',
        justifyContent:'center',
    },
    description_section:{
        margin: ScreenScale(20),
        paddingVertical: ScreenScale(11),
        borderTopWidth:0.5,
        borderTopColor:'#F5F5F5'
    },
    titleText: {
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
        color:colors.BLACK
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
        fontSize: FontScale(16),
        color: '#696969',
        fontFamily: fonts.REGULAR
    },
    product_no:{
        fontSize: FontScale(14),
        color: '#B4B4B4',
        fontFamily: fonts.MEDIUM
    },
    descriptionText:{
        fontSize: FontScale(14),
        color: '#696969',
        fontFamily:fonts.REGULAR,
        marginTop:10,
        lineHeight: FontScale(21)
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
        position: 'absolute',
        bottom: 20
    },
    scrollView:{
        flexDirection:'column',
        paddingBottom:30
    },
});
