import {StyleSheet} from 'react-native';
import { colors,  vh, vw } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems:'center',
    justifyContent:'center'
  },
  conversionImage: {
    height: vh(149),
    width: vw(149),
  },
});
