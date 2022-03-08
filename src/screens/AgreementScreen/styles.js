import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { colors, fonts, theme } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    width: wp('100%'),
    ...theme.CENTER,
  },
  scrollView: {
    marginTop: hp('4%'),
  },
  heading: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: FontScale(26),
    marginVertical: hp('2%'),
    fontFamily: fonts.SEMIBOLD,
  },
  label: {
    color: 'black',
    fontSize: FontScale(24),
    alignSelf: 'center',
    width: wp('90%'),
    fontFamily: fonts.MEDIUM,
  },
  step: {
    fontSize: FontScale(14),
    alignSelf: 'center',
    color: 'grey',
    fontFamily: fonts.MEDIUM,
  },
  agreement: {
    width: wp('90%'),
    alignSelf: 'center',
    color: colors.DOVE_GRAY,
    fontSize: FontScale(13),
    fontFamily: fonts.REGULAR,
    marginBottom: ScreenScale(20),
  },
  bottomContainer: {
    borderWidth: 0.1,
    position: 'absolute',
    bottom: 0,
    height: hp('30%'),
    backgroundColor: colors.WHITE,
    width: wp('100%'),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 3,
    ...theme.CENTER,
  },
  bottomHeading: {
    fontFamily: fonts.SEMIBOLD,
    fontSize: FontScale(13),
    color: colors.PRIMARY,
    alignSelf: 'flex-start',
    paddingLeft: wp('6%'),
  },
  bottomSubtitle: {
    paddingLeft: wp('6%'),
    color: colors.DOVE_GRAY,
    marginVertical: hp('1%'),
    fontSize: FontScale(14),
    fontFamily: fonts.LIGHT,
    alignSelf: 'flex-start',
  },
  fingerprintContainer: {
    height: hp('13%'),
    borderRadius: 15,
    width: '90%',
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  signedText: {
    color: 'green',
    fontSize: 22,
    fontFamily: fonts.REGULAR,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  submitButton: {
    marginTop: hp('2%'),
  },
  buttonStyle: {
    textAlign: 'center',
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(18),
    color: colors.WHITE,
  },
  titleStyle: {
    color: 'white',
    fontSize: FontScale(18),
    fontWeight: '500',
  },
  agreementContainer: {
    flex: 0.7,
  },
  scrollViewContainer: {
    // height: hp('35%'),
    paddingBottom: hp('4%'),
    marginTop: hp('1%'),
  },
  icon: {
    height: 30,
    width: 30,
  },
});
