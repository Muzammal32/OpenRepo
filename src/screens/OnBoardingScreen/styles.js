import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, theme, fonts } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

const dotContainer = {
  width: ScreenScale(12),
  height: ScreenScale( 12),
  borderRadius: ScreenScale(20),
  marginHorizontal: 3,
};

export default StyleSheet.create({
  screen: {
    ...theme.SINGLE_FLEX,
    backgroundColor: colors.WHITE,
  },
  selectedBorder: {
    ...dotContainer,
    borderColor: colors.PRIMARY,
    borderWidth: 2,
  },
  inActiveDot: {
    ...dotContainer,
    borderRadius: 100,
    backgroundColor: '#E0DDDD',
  },
  neutralDot: {
    ...dotContainer,
    tintColor: colors.WHITE,
  },
  skipButton: {
    position: 'absolute',
    top: hp('3%'),
    right: wp('5%'),
    backgroundColor: 'rgba(105, 105, 105, 0.3)',
    height: hp(4),
    width: wp(16),
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    fontSize: FontScale(10),
    color: colors.WHITE,
    fontWeight: '500',
  },
  image: {
    width: wp('94%'),
    height: hp('58%'),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  wrapper: {
    ...theme.SINGLE_FLEX,
    marginTop: hp('4%'),
    width: wp('94%'),
    alignSelf: 'center',
  },
  header: {
    fontSize: FontScale(26),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.PRIMARY,
    fontFamily: fonts.SEMIBOLD,
  },
  paragraph: {
    fontSize: FontScale(16),
    fontFamily: fonts.LIGHT,
    marginHorizontal: wp('3%'),
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.DOVE_GRAY,
  },
  getStartedButton: {
    backgroundColor: colors.PRIMARY,
    position: 'absolute',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: hp('6%'),
    width: wp('60%'),
    bottom: hp('4%'),
  },
  getStartedText: {
    fontSize: FontScale(18),
    color: colors.WHITE,
    fontFamily: fonts.MEDIUM,
  },
});
