import { StyleSheet } from 'react-native';
import { fonts, theme } from '../../constants';

export default StyleSheet.create({
  header: {
    height: '10%',
    flexDirection: 'row',
  },
  startEndContainer: {
    ...theme.CENTER,
    flex: 0.25,
    height: '100%',
  },
  middleContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    fontFamily: fonts.REGULAR,
  },
  icon: {
    height: 12,
    width: 12,
  },
});
