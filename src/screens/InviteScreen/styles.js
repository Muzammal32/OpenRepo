import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, fonts } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: '2%',
  },
  header: {
    paddingHorizontal: wp('5%'),
  },
  headText: {
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: FontScale(20),
    fontFamily: fonts.MEDIUM,
  },
  inputContainer: {
    paddingVertical: hp('2%'),
  },
  textInput: {
    paddingHorizontal: wp('5%'),
    fontWeight: '400',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  emailContainer: {
    paddingTop: hp('5%'),
  },
  inviteBtn: {
    width: wp('90%'),
    marginVertical: '2%',

    backgroundColor: 'black',
  },
  copyBtn: {
    width: wp('40%'),
    marginVertical: '2%',
    backgroundColor: 'black',
  },
  shareBtn: {
    width: wp('40%'),
    marginVertical: '2%',

    marginHorizontal: wp('1%'),
    backgroundColor: 'lightgrey',
  },
  titleStyle: {
    color: colors.BLACK,
    fontWeight: '500',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  copyTitleStyle: {
    color: colors.WHITE,
    fontWeight: '500',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  sendTitleStyle: {
    color: colors.WHITE,
    fontWeight: '500',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  seperator: {
    width: wp('90%'),
    marginTop: hp('5%'),
    height: 1,
    alignSelf: 'center',
    backgroundColor: 'lightgrey',
  },
  link: {
    paddingBottom: hp('3%'),
    fontWeight: '400',
    fontSize: FontScale(18),
    fontFamily: fonts.LIGHT,
    paddingLeft: wp('5%'),
  },
  linkInput: {
    paddingTop: hp('5%'),
  },
  inviteBtns: {
    flexDirection: 'row',
    paddingLeft: wp('3%'),
    marginTop: hp('2%'),
  },
  input: {
    backgroundColor: 'white',
    height: ScreenScale(50),
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 30,
    width: wp('90%'),
    alignSelf: 'center',
    paddingHorizontal: wp('5%'),
    fontWeight: '300',
    fontSize: FontScale(14),
    fontFamily: fonts.MEDIUM,
  },
  skipBtn: {
    fontWeight: '400',
    fontSize: FontScale(16),
    fontFamily: fonts.MEDIUM,
    color: '#B4B4B4',
    alignSelf: 'center',
  },
  skipBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp('3%'),
  },
});
