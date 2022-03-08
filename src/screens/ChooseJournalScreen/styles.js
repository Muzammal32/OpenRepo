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
    backgroundColor: '#F9F9F9',
  },
  headText: {
    alignSelf: 'center',
    marginTop: hp('10%'),
    fontWeight: '600',
    fontSize: FontScale(26),
    fontFamily: fonts.MEDIUM,
  },
  cardComponent: {
    marginTop: hp('16%'),
  },
  title: {
    marginTop: hp('2.7%'),
  },
});
