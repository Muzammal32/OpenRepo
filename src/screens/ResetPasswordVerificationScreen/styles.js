import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { fonts, colors } from '../../constants';
import {FontScale} from "../../utils/CommonHelper";

export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: '2%',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
  },
  headtext: {
    textAlign: 'center',
    color: colors.BLACK,
    marginHorizontal: wp('5%'),
    fontWeight: '400',
    fontSize: FontScale(20),
    fontFamily: fonts.LIGHT,
    marginTop: '5%',
  },
  iconBG: {
    alignSelf: 'center',
    height: 80,
    marginTop: '15%',
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    backgroundColor: colors.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gotoHomebtn: {
    backgroundColor: '#EAE9E9',
    marginVertical: '15%',
    width: '70%',
  },
  gotoHomeText: {
    color: colors.BLACK,
    fontWeight: '500',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  icon: {
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});
