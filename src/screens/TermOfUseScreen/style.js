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
    dateText:{
        color: '#B4B4B4',
        fontWeight: '500',
        fontSize: FontScale(14),
        fontFamily: fonts.REGULAR,
        lineHeight: FontScale(20)
    },
    date: {
        color: '#2B2E34',
        fontWeight: '500',
        fontSize: FontScale(14),
        fontFamily: fonts.MEDIUM,
        lineHeight: FontScale(20)
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
        fontSize: FontScale(18),
        fontFamily: fonts.MEDIUM,
        marginTop: ScreenScale(18)
    },
    answerText: {
        marginTop: ScreenScale(20),
        color: '#696969',
        fontWeight: '300',
        fontSize: FontScale(13),
        fontFamily: fonts.REGULAR,
    }
});
