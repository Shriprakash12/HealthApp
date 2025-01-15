import {StyleSheet} from 'react-native';
import {colors, fonts, vh, vw} from '../constants';

export const styles = StyleSheet.create({
  tabIconStyle: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  tabBarLabelStyle: {
    fontSize: vw(12),
    fontFamily: fonts.BalooThambiBold,
    includeFontPadding: false,
    paddingVertical: 0,
    marginTop: vh(-2),
    marginBottom: 10,
  },
  icon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },

  tabItem: {
    height: vh(37),
    width: vw(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderTopColor: colors.primaryColor,
    marginBottom: vh(5),
  },
});
