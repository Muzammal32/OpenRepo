import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts } from '../../constants';
import {FontScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: '2%',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    color: '#B4B4B4',
    marginHorizontal: '15%',
    fontWeight: '400',
    fontSize: FontScale(20),
    fontFamily: fonts.MEDIUM,
    marginTop: hp('10%'),
  },
  subText: {
    marginTop: hp('2%'),
    color: 'black',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: FontScale(20),
    fontFamily: fonts.MEDIUM,
  },
  iconBG: {
    marginTop: hp('15%'),
    alignSelf: 'center',
    height: 100,
    width: 100,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendText: {
    marginTop: hp('12%'),

    color: '#B4B4B4',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontScale(16),
    fontFamily: fonts.MEDIUM,
  },
});
