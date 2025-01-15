import {StyleSheet} from 'react-native';
import { vh, vw,fonts,colors } from '../../constants';
export const styles = StyleSheet.create({
  InputView: {
    width: vw(330),
    alignSelf: 'center',
  },
  inputContainer: {
    width: vw(320),
    borderColor: colors.E1EAF5,
    backgroundColor: colors.white,
    paddingLeft: vw(10),
    paddingRight: vw(10),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:'center'
  },
  textInput: {
    flex: 1,
    paddingLeft: vw(10),
    fontSize: vw(14),
    color: colors.black,
    fontFamily: fonts.BalooThambiMedium,
    letterSpacing: 1,
    includeFontPadding: false,
    paddingVertical: 0,
     
  },
  titleStyle: {
    fontSize: vw(14),
    color: colors.black,
    fontFamily: fonts.BalooThambiMedium,
    letterSpacing: 0.5,
    includeFontPadding: false,
    backgroundColor: colors.white,  
    paddingHorizontal: vw(5),  
    position: 'absolute', 
    top: vh(-12),  
    left: vw(20),  
    zIndex: 1,  
  },
  mandatory: {
    color: colors.red,
    fontFamily: fonts.BalooThambiMedium,
    fontSize: vw(14),
    includeFontPadding: false,
    paddingVertical: 0,
  },
  passwordIconContainer: {
    height: vw(25),
    width: vw(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordToggle: {
    width: vw(25),
    height: vw(25),
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: vh(20),
    marginVertical: vh(2),
  },
  
});
