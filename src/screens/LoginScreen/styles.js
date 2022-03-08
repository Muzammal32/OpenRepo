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
    height : '100%',
    padding: '2%',
    backgroundColor: 'white',
  },
  headText: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: FontScale(24),
    fontFamily: fonts.MEDIUM,
  },
  header: {
    paddingHorizontal: wp('4%'),
    paddingTop: '3%',
  },
  subText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#696969',
    fontWeight: '300',
    fontSize: FontScale(16),
    fontFamily: fonts.LIGHT,
    marginTop: '3%',
  },
  createAccountBtn: {
    backgroundColor: 'lightgrey',
    marginVertical: '4%',
  },
  loginbtn: {
    backgroundColor: 'black',
  },
  inputs: {
    marginTop: '9%',
  },
  forgotButton: {
    paddingLeft: '3%'
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  forgotText: {
    color: '#B4B4B4',
    fontWeight: '400',
    fontSize: FontScale(14),
    fontFamily: fonts.LIGHT,
  },
  signup: {
    marginTop: ScreenScale(40),
    alignSelf: 'center',
    paddingTop: hp('1%'),
    fontWeight: '400',
    fontSize: FontScale(14),
    fontFamily: fonts.LIGHT,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icongoogle: {
    paddingHorizontal: wp('1%'),
  },
  iconfacebook: {
    paddingHorizontal: wp('1%'),
  },
  imageStyle: {
    height: ScreenScale(50),
    width: ScreenScale(50),
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ScreenScale(10),
  },
  createBtn: {
    color: colors.BLACK,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontScale(16),
    fontFamily: fonts.MEDIUM,
  },
  loginBtn: {
    color: colors.WHITE,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontScale(16),
    fontFamily: fonts.MEDIUM,
  },
});
