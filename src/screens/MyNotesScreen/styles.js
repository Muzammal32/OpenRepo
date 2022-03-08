import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, fonts} from '../../constants';
import {FontScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_CLR
  },
  inputMainContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: wp('5%'),
  },
  daysContainer: {
    paddingVertical: hp('2%'),
  },
  notesContainer: {
    flex:0.5,
    margin: '2%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'flex-start',
    paddingTop: hp('2%'),
    paddingHorizontal: wp('3%'),
    shadowOpacity:0.1,
    elevation:1,
    padding: 30
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  noteContainer: {
    maxHeight: hp('20%'),
    marginBottom: hp('2%'),
  },
  text: {
    fontSize: FontScale(12),
    fontFamily: fonts.MEDIUM,
    fontWeight: '500',
  },
  note: {
    fontSize: FontScale(10),
    fontFamily: fonts.LIGHT,
    fontWeight: '300',
    marginTop: hp('1%'),
  },
  dots: {
    height: hp('1.3%'),
    width: wp('7%'),
    marginBottom: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
});
