import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import { vh, vw } from '../../constants/dimension';
 

export const styles = StyleSheet.create({
  buttonStyle: {
    width: vw(337),
    height: vh(50),
    borderRadius: vw(6),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryColor,
    paddingHorizontal: vw(16),
  },
  buttonText: {
    fontSize: vw(16),
    color: colors.white,
    textAlign: 'center',
    flex: 1,
    fontFamily: fonts.BalooThambiBold,
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightImage: {
    width: vw(25),
    height: vw(25),
    resizeMode: 'contain',
  },
  marginLeft: {
    marginLeft: vw(10),
  },
  marginRight: {
    marginRight: vw(10),
  },
});
