import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts, colors } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: '2%',
    backgroundColor: 'white',
  },
  header: {
    paddingTop: hp('5%'),
  },
  headText: {
    fontWeight: '600',
    paddingTop: hp('2%'),
    color: colors.BLACK,
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(26, height),
    alignSelf: 'center',
  },
  subText: {
    fontWeight: '400',
    paddingTop: hp('1%'),
    color: '#696969',
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(24, height),
    alignSelf: 'center',
  },
  stepText: {
    alignSelf: 'center',
    color: '#C8C7C7',
    fontWeight: '500',
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(14, height),
  },
  nextBtn: {
    backgroundColor: 'lightgrey',
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },

  titleStyle: {
    fontWeight: '500',
    color: colors.BLACK,
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(18, height),
  },
  input: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    height: ScreenScale(50),
    marginTop: wp('4%'),
    borderRadius: 30,
    width: wp('90%'),
    alignSelf: 'center',
    paddingHorizontal: wp('8'),
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(16, height),
  },
  passwordInputContainer: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginTop: wp('4%'),
    height: ScreenScale(50),
    borderRadius: 30,
    width: wp('90%'),
    alignSelf: 'center',
    paddingHorizontal: wp('8'),
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(16, height),
    flexDirection: 'row',
  },
  passwordInput: {
    flex: 1,
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(16, height),
  },
  textInput: {
    paddingHorizontal: wp('5%'),
    fontWeight: '400',
    color: '#696969',
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(18, height),
    top: hp('1%'),
  },
  imageStyle: {
    alignSelf: 'center',
  },
  allInputContainer: {
    paddingTop: hp('10%'),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    marginLeft: wp('6%'),
    marginTop: hp('1%'),
    alignSelf: 'flex-start',
    fontWeight: '500',
    fontSize: 12,
    color: 'red',
  },
});
