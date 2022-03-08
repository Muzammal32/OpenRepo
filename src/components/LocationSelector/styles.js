import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../../constants';
import {ScreenScale} from "../../utils/CommonHelper";

const height = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  subContainer: {
    height: '90%',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  list: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: '4%',
  },
  locationContainer: {
    paddingVertical: '7%',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    borderRadius: 10,
  },
  locationText: {
    fontFamily: fonts.MEDIUM,
    fontSize: ScreenScale(16),
  },
});
