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
    }
});
