import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors, fonts} from '../../constants';
import {FontScale} from "../../utils/CommonHelper";


export default StyleSheet.create({
  indicatorStyle: {width: 0},
  labelStyle: {
    fontSize: FontScale(12),
    fontFamily: fonts.MEDIUM,
  },
  tabStyle: {
    marginHorizontal: wp('2%'),
    borderRadius: 50,
    marginVertical: 5
  },
  style: {
    backgroundColor: colors.BACKGROUND_CLR,
    elevation: 0,
    paddingBottom: hp('3%'),
    shadowOpacity: 0
  },
});
