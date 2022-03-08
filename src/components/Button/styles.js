import { StyleSheet } from 'react-native';

const buttonContainer = {
  paddingVertical: '3%',
  backgroundColor: 'black',
  borderRadius: 30,
  marginVertical: '2%',
  alignSelf: 'center',
};
export default StyleSheet.create({
  nextBtnText: {
    color: 'white',
    textAlign: 'center',
  },
  shareBtn: {
    ...buttonContainer,
    width: '90%',
    margin: 3,
    top: 20,
    backgroundColor: 'black',
  },
});
