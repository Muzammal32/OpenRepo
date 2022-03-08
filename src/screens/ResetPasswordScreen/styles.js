import { StyleSheet } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { fonts } from '../../constants';
import {FontScale} from "../../utils/CommonHelper";


export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: '2%',
    backgroundColor: 'white',
  },
  headText: {
    marginTop: hp('8%'),
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: FontScale(26),
    fontFamily: fonts.MEDIUM,
  },
  inputContainer: {
    marginTop: hp('20%'),
  },
  loginbtn: {
    backgroundColor: 'black',
  },
  loginText: {
    color: 'white',
    fontWeight: '500',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  errorText: {
    marginRight: wp('8%s'),
    marginVertical: hp('1%'),
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontSize: 12,
    color: 'red',
  },
});
