import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  buttonText: {
    textAlign: 'center',
  },
  buttonContainer: {
    width: wp('90%'),
    borderRadius: 30,
    alignSelf: 'center',
    paddingVertical: wp('3%'),
  },
});
