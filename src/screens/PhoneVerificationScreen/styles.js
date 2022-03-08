import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts, colors } from '../../constants';
import {FontScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: '2%',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  headtext: {
    textAlign: 'center',
    color: 'black',
    marginHorizontal: wp('8%'),
    fontWeight: '400',
    fontSize: FontScale(20),
    fontFamily: fonts.MEDIUM,
    marginBottom: hp('5%'),
  },
  iconBG: {
    alignSelf: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginVertical: hp('6%'),
  },
  icon: {
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  nextbtn: {
    width: wp('60'),
    backgroundColor: '#EAE9E9',
    marginBottom: hp('5%'),
  },
  nextText: {
    color: colors.BLACK,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
});
