import { StyleSheet, Dimensions } from 'react-native';
import {colors, fonts} from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: ScreenScale(20),
        backgroundColor: colors.BACKGROUND_CLR,
        borderBottomWidth: 1
    },
    card:{
        borderBottomWidth: 1,
        borderColor: '#c9c6c6'
    },
    friend_section: {
        backgroundColor: '#fff',
        borderRadius: ScreenScale(20),
        marginBottom: ScreenScale(20),
        elevation: 3,
        padding: ScreenScale(17)
    },
    activity_section:{
        paddingVertical: ScreenScale(37),
        paddingHorizontal: ScreenScale( 5)
    },
    date_container:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateText:{
        fontSize: FontScale(14),
        fontFamily: fonts.MEDIUM,
        fontWeight: '500',
        color: '#B4B4B4'
    },
    invitationView:{
        marginTop: ScreenScale(7),
        height: ScreenScale(22),
        width: ScreenScale(111),
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    invitationText:{
        fontSize: FontScale(12),
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        color: '#fff',
        textTransform: 'uppercase'
    },
    bodyText:{
        marginTop: ScreenScale(19),
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        color: '#2B2E34',
        textTransform: 'uppercase'
    },
    profileView:{
        marginTop: ScreenScale(22),
        flexDirection: 'row'
    },
    nameText:{
        marginTop: ScreenScale(23),
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
        fontWeight: '500',
        color: '#000'
    },
    detailText:{
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        color: '#2B2E34',
    },
    image_section:{
        height: ScreenScale(77),
        width: ScreenScale(77),
        borderRadius: FontScale( 20)
    },
    profileViewDetail:{
        marginLeft: ScreenScale(17),
        justifyContent: 'center'
    },
    name: {
        fontSize: FontScale(18),
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        color: '#2B2E34',
    },
    detail:{
        fontSize: FontScale(14),
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        color: '#696969',
    },
    btnText: {
        color: colors.WHITE,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
    },
    btn: {
        width: '98%',
        height: ScreenScale(55),
        backgroundColor: 'black',
        marginVertical: ScreenScale(22)
    },
    settingView:{
        paddingVertical: ScreenScale(29),
        borderBottomWidth: 1,
        borderBottomColor: '#c9c6c6'
    },
    headingView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: ScreenScale(10)
    },
    textHeading:{
        color: colors.BLACK,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: FontScale(20),
        fontFamily: fonts.MEDIUM,
        lineHeight: FontScale(30)
    },
    textSetting:{
        color: '#696969',
        fontWeight: '500',
        fontSize: FontScale(13),
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(19),
        marginTop:  ScreenScale(17)
    }
});
