import { StyleSheet, Dimensions } from 'react-native';

import { fonts, colors } from '../../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: colors.BACKGROUND_CLR,
  },
  date: {
    height: hp('5%'),
  },
  errorText: {
    marginRight: wp('8%s'),
    marginVertical: hp('1%'),
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontSize: 12,
    color: 'red',
  },
  label: {
    paddingBottom: hp('0.5%'),
    paddingHorizontal: wp('2%'),
    fontFamily: fonts.LIGHT,
    fontSize: FontScale(18),
    fontWeight: '400',
  },
  inputContainer: {
    borderWidth: 1,
    width: wp('90%'),
    height: ScreenScale(55),
    borderRadius: 25,
    color: 'white',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderColor: colors.BON_JOUR,
  },
  textContainer: {
    flex: 1,
    fontSize: FontScale(14),
    fontFamily: fonts.LIGHT,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    height: ScreenScale(50),
  },
  button: {
    backgroundColor: colors.PRIMARY,
    marginTop: hp('3%'),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: hp('6%'),
    width: wp('90%'),
  },
  buttonText: {
    fontSize: 18,
    color: colors.WHITE,
    fontFamily: fonts.MEDIUM,
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
