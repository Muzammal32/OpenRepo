import { StyleSheet } from 'react-native';
import { fonts } from '../../constants';

export default StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    height: '8%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: '4%',
    fontFamily: fonts.REGULAR,
  },
});
