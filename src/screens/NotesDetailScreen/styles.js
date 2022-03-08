import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts } from '../../constants';
import {FontScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  notesContainer: {
    margin: '5%',
    padding: '5%',
    marginTop: hp('7%'),
    width: wp('90%'),
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'flex-start',
    paddingHorizontal: wp('3%'),
    elevation: 1,
    shadowOpacity: 0.1
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
    fontWeight: '500',
  },
  note: {
    fontSize: FontScale(14),
    fontFamily: fonts.LIGHT,
    fontWeight: '300',
    marginTop: hp('3%'),
  },
  notesDateContainer: {
    marginVertical: '5%'
  },
});
