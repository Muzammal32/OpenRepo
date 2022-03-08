import { StyleSheet, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { fonts, colors } from '../../constants';
import {FontScale, ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: colors.BACKGROUND_CLR,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1,
    shadowOpacity: 0.1,
    marginBottom: 30
  },
  titlesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: ScreenScale(20),
    borderBottomWidth: 1,
    paddingHorizontal: ScreenScale(20),
  },
  inputMainContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: wp('5%'),
  },
  goal: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: ScreenScale(5),
    paddingHorizontal: wp('1%'),
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkBox: {
    marginHorizontal: wp('3%'),
    width: ScreenScale(20),
    height: ScreenScale(20),
    marginLeft: wp('1%'),
    paddingHorizontal: wp('2%'),
  },
  text: {
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
    fontWeight: '500',
  },
  inputContainer: {
    borderWidth: 1,
    width: wp('80%'),
    height: hp('6%'),
    borderRadius: 25,
    color: 'white',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
    borderColor: '#E5E5E5'
  },
  textContainer: {
    flex: 1,
    fontSize: FontScale(14),
    fontFamily: fonts.LIGHT,
    height: ScreenScale(50),
    justifyContent: 'flex-start',
  },
  errorText: {
    marginRight: wp('8%s'),
    marginVertical: hp('1%'),
    alignSelf: 'flex-end',
    fontWeight: '500',
    fontSize: 12,
    color: 'red',
  },
  daysContainer: {
    paddingVertical: hp('2%'),
  },
  button: {
    marginVertical: hp('2.5%'),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: hp('6%'),
    width: wp('80%'),
    backgroundColor: '#EAE9E9',
  },
  buttonText: {
    fontSize: 18,
    color: colors.BLACK,
    fontFamily: fonts.MEDIUM,
  },
  goalContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: wp('80%'),
    height: hp('5%'),
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    marginVertical: hp('2%'),
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    paddingHorizontal: wp('5%'),
    borderColor: 'red',
  },

  inputUsed: {
    backgroundColor: '#EAE9E9',
    width: wp('80%'),
  },
  textUsed: {
    color: 'black',
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
  },
  btnText: {
    color: colors.WHITE,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: FontScale(18),
    fontFamily: fonts.MEDIUM,
  },
  btn: {
    backgroundColor: 'black',
    bottom: 20
  },
});
