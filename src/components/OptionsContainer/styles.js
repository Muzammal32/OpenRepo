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
    backgroundColor: '#E9E6E6',
  },
  headText: {
    alignSelf: 'center',
    marginTop: '20%',
    fontWeight: '600',
    fontSize: FontScale(26),
    fontFamily: fonts.MEDIUM,
  },
  subText: {
    marginTop: '5%',
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.BLACK,
    marginHorizontal: '7.5%',
    fontWeight: '300',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  cardComponent: {
    marginTop: hp('13%'),
  },
  card: {
    marginVertical: hp('1%'),
    padding: '4%',
    alignSelf: 'center',
    width: wp('90%'),
    backgroundColor: 'white',
    borderRadius: 10,

    alignItems: 'stretch',
  },
  text: {
    marginTop: hp('1%'),
    marginLeft: hp('1%'),
    fontWeight: '500',
    fontSize: FontScale(15),
    fontFamily: fonts.MEDIUM,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  cardSubTextNumber: {
    marginTop: hp('0.5%'),
    marginLeft: hp('1%'),
    fontWeight: '400',
    fontSize: FontScale(14),
    fontFamily: fonts.LIGHT,
    color: 'grey',
  },
  arrowStyle: {
    right: 10,
    alignSelf: 'center',
    position: 'absolute',
  },
  iconStyle: {

  },
  iconBG: {
    height: 70,
    width: 70,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#F9F9F9',
  },
});
