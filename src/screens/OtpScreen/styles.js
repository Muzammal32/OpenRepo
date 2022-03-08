import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, fonts } from '../../constants';
import {FontScale} from "../../utils/CommonHelper";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  headText: {
    marginTop: hp('12%'),
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: FontScale(24),
    fontFamily: fonts.MEDIUM,
    marginHorizontal: wp('10%'),
  },
  otpContainer: {
    position: 'absolute',
    paddingHorizontal: wp('20%'),
    marginTop: hp('25%'),
  },
  resendText: {
    color: '#B4B4B4',
    textAlign: 'center',
    fontSize: FontScale(16),
    fontFamily: fonts.MEDIUM,
    fontWeight: '400',
    marginTop: hp('3%'),
  },
  expireText: {
    color: '#B4B4B4',
    textAlign: 'center',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
    fontWeight: '400',
    marginTop: hp('15%'),
  },
  borderStyleBase: {
    width: 50,
    height: 50,
  },
  textinvalid: {
    color: colors.BLACK,
  },
  textvalid: {
    color: 'grey',
  },
  resendContainer: {
    paddingHorizontal: wp('2%'),
  },
  borderStyleHighLighted: {
    borderColor: '#79DF89',
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    color: colors.BLACK,
    fontSize: FontScale(16),
    fontFamily: fonts.MEDIUM,
    fontWeight: '500',
    borderColor: '#E9E6E6',
  },
  underlineStyleHighLighted: {
    borderColor: '#79DF89',
  },
  titleStyle: {
    color: colors.BLACK,
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
    fontWeight: '500',
  },
  confirmBtn: {
    backgroundColor: '#EAE9E9',
  },
  time: {
    color: colors.BLACK,
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
    fontWeight: '500',
  },
  invalidCode: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red',
    marginVertical: '8%',
  },
});
