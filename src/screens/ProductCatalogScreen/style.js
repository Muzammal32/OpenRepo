import { StyleSheet, Dimensions } from 'react-native';
import {colors, fonts} from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.BACKGROUND_CLR,
        paddingHorizontal: ScreenScale(24)
    },
    sub_view:{
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderBottomWidth:0.3,
        borderColor:colors.NOBEL
    },
    homeText:{
        marginTop: ScreenScale(11),
        fontWeight: '500',
        fontSize: FontScale(20),
        fontFamily: fonts.REGULAR
    },
    homeSubText:{
        marginBottom: ScreenScale(11),
        fontWeight: '400',
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
        color: '#B4B4B4',
        lineHeight: FontScale(27)
    },
    card:{
        marginVertical: ScreenScale(10),
        width: '49%',
        alignSelf:'center',
        backgroundColor:colors.WHITE,
        elevation: 2,
        shadowOpacity:0.2,
        borderRadius:10,
    },
    image_section:{
        height: ScreenScale(152),
        width: ScreenScale(111),
        backgroundColor:colors.WHITE,
        alignSelf: 'center',
        marginTop: ScreenScale(17)
    },
    image:{
        alignSelf:'center',
        justifyContent:'center',
    },
    description_section:{
        flex:1,
        margin: ScreenScale(11),
        paddingVertical: ScreenScale(11),
        borderTopWidth:0.5,
        borderTopColor:'#F5F5F5'
    },
    titleText: {
        flex:1,
        fontWeight: '500',
        fontSize: FontScale(15),
        fontFamily: fonts.MEDIUM,
        color:colors.BLACK
    },
    product_no:{
        fontSize: FontScale(12),
        color: '#B4B4B4',
        fontFamily: fonts.MEDIUM
    },
    descriptionText:{
        fontSize: FontScale(10),
        color: '#B4B4B4',
        fontFamily:fonts.REGULAR,
        marginTop:6,
        lineHeight: FontScale(15)
    },
    tag: {
        position:'absolute',
        backgroundColor: colors.BLACK,
        height: ScreenScale(19),
        width: ScreenScale(110),
        marginTop: ScreenScale(12)
    },
    tagText: {
        fontWeight: '500',
        fontSize: FontScale(15),
        fontFamily: fonts.MEDIUM,
        color:colors.WHITE,
        alignSelf:'center',
        justifyContent:'center',
        textTransform:'uppercase'
    },
});
