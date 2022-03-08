import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: ScreenScale(20),
        backgroundColor: '#F9F9F9',
    },
    searchBar:{
        flexDirection: 'row',
        backgroundColor: '#ECECEC',
        height: ScreenScale(50),
        marginTop: ScreenScale(19),
        width: '100%',
        borderRadius: ScreenScale(25),
        elevation: 2,
        shadowOpacity: 0.2,
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal: ScreenScale(20)
    },
    imageStyle:{
        width: ScreenScale(20),
        height: ScreenScale(20)
    },
    searchText: {
        marginLeft: ScreenScale( 15)
    },
    dividerStyle:{
        width: '100%',
        borderWidth:1,
        borderColor: '#E9E6E6',
        marginTop: ScreenScale(28)
    },
    questionText: {
        color: '#2B2E34',
        fontWeight: '500',
        fontSize: FontScale(20),
        fontFamily: fonts.MEDIUM,
        marginTop: ScreenScale(44)
    },
    answerText: {
        marginTop: ScreenScale(20),
        color: '#696969',
        fontWeight: '300',
        fontSize: FontScale(13),
        fontFamily: fonts.REGULAR,
    }
});
