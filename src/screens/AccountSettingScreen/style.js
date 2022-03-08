import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";


export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: ScreenScale( 20),
        backgroundColor: '#F9F9F9',
    },
    profile_container:{
        flexDirection:'row'
    },
    profile_picture: {
        width: ScreenScale(116),
        height: ScreenScale(116),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.BON_JOUR,
    },
    profile_details:{
        justifyContent: 'center',
        marginLeft: ScreenScale(17)
    },
    profile_name:{
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
    edit_button:{
        backgroundColor: colors.BLACK,
        width: ScreenScale(126),
        height: ScreenScale(26),
        borderRadius: ScreenScale(20),
        justifyContent: 'center',
        alignItems:'center',
        marginTop: ScreenScale(5)
    },
    edit_buttonText:{
        fontSize: FontScale(16),
        lineHeight: FontScale(24),
        fontFamily: fonts.REGULAR,
        color:"#fff",
        textTransform:'uppercase'
    },
    divider:{
        marginVertical: ScreenScale(35),
        borderWidth:1,
        borderColor:'#E9E6E6'
    },
    subscription:{
        fontSize: FontScale(18),
        lineHeight: FontScale(27),
        fontFamily: fonts.MEDIUM,
        color:"#2B2E34"
    },
    subscription_status:{
        marginTop: ScreenScale(7),
        fontSize: FontScale(13),
        lineHeight: FontScale(20),
        fontFamily: fonts.REGULAR,
        color:"#696969"
    },
    notification_headingView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: ScreenScale(10)
    },
    notification_textHeading:{
        color: colors.BLACK,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: FontScale(20),
        fontFamily: fonts.MEDIUM,
        lineHeight: FontScale(30)
    },
    notification_textSetting:{
        color: '#696969',
        fontWeight: '500',
        fontSize: FontScale(13),
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(19),
        marginTop: ScreenScale(17)
    }
});
