import { StyleSheet, Dimensions } from 'react-native';

import { fonts, colors } from '../../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_CLR,
    padding: '5%',
  },
  headContainer: {
    width: wp('27%'),
    height: hp('21%'),
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 6
  },
  subContainer: {
    width: wp('18%'),
    height: hp('10%'),
    marginTop: hp('2%'),
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: colors.BACKGROUND_CLR,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: hp('2%'),
    marginHorizontal: wp('2%'),
    color: colors.BLACK,
    fontSize: FontScale(12),
    fontFamily: fonts.LIGHT,
    fontWeight: '400',
  },
  inputMainContainer: {
    marginTop: hp('0.5%'),
    backgroundColor: '#fcfcfc',
    borderRadius: 10,
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
  },
  goalText: {
    color: '#696969',
    fontSize: (13),
    fontFamily: fonts.LIGHT,
    fontWeight: '400',

  },
  goal: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('1%'),
    marginBottom: hp('1.5%'),
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.16,
    shadowRadius: 9,
    backgroundColor: 'white',
    elevation: 3,
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkBox: {
    marginHorizontal: wp('3%'),
    width: 12,
    height: 12,
    marginLeft: wp('1%'),
    paddingHorizontal: wp('2%'),
  },
  daysContainer: {
    textTransform: 'uppercase',
    marginBottom: hp('1%'),
    color: colors.BLACK,
    fontSize: FontScale(14),
    fontFamily: fonts.MEDIUM,
    fontWeight: '400',
    letterSpacing: 4,
  },
  goalContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_CLR,
    // overflow: 'hidden',
  },
  focusHeader: {
    fontFamily: fonts.MEDIUM,
    fontSize: FontScale(20),
  },
  focusSubHeader: {
    fontFamily: fonts.LIGHT,
    fontSize: FontScale(13),
    paddingVertical: '5%',
  },
  focusContainer: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_CLR,
    paddingHorizontal: ScreenScale(20),
  },
  focusCard: {
    height: hp('20%'),
    width: wp('75%'),
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'red',
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    margin: ScreenScale(25)
  },
  focusText: {
    fontFamily: fonts.LIGHT,
    paddingVertical: hp('4%'),
  },
  focusRate: {
    marginHorizontal: wp('1%'),
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.BON_JOUR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedRate: {
    marginHorizontal: wp('1%'),
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.BACKGROUND_CLR,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.SILVER
  },
  dateContainer:{
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingHorizontal: 10
  },
  dateText: {
    fontFamily: fonts.REGULAR,
    fontSize: FontScale(13),
    color : colors.DOVE_GRAY
  }
});
