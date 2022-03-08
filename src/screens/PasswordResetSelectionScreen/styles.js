import { StyleSheet } from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { fonts, colors } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";


export default StyleSheet.create({
  screen: {
    flex: 1,
    padding: '2%',
    backgroundColor: colors.BACKGROUND_CLR,
  },
  headText: {
    alignSelf: 'center',
    marginTop: '20%',
    fontWeight: '600',
    fontSize: (26),
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
  cardComponent: {
    marginTop: hp('13%'),
  },
  input: {
    borderColor: 'lightgrey',
    borderWidth: 1,
    height: ScreenScale(50),
    marginTop: hp('2%'),
    borderRadius: 30,
    width: wp('90%'),
    alignSelf: 'center',
    paddingHorizontal: wp('6%'),
    fontSize: FontScale(16),
  },
  textInput: {
    paddingHorizontal: 20,
    fontWeight: '400',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  textInputContainer: {
    height: hp('15%'),
  },
  errorText: {
    marginRight: wp('8%s'),
    marginVertical: hp('1%'),
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontSize: 12,
    color: 'red',
  },
  touchable: {
    width:'100%',
    justifyContent: 'center',
    margin: '2%',
  },
  nextBtn: {
    backgroundColor: 'lightgrey',
    height: ScreenScale(40),
    marginTop: hp('3%'),
    marginBottom: hp('3%'),
  },
  screen2: {
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
    width: ScreenScale(60),
    height: ScreenScale(50),
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
