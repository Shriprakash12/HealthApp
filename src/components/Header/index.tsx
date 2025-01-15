import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts, images, vw} from '../../constants';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface NavigationType
  extends NativeStackNavigationProp<ParamListBase> {
  backButtonPress: Function;
  onFilterPress: Function;
  onAddPress: Function;
}

export type RouteType = RouteProp<ParamListBase>;

type Options = {
  headerShadowVisible?: boolean;
  backgroundColor?: string;
};

export const Header = {
  setNavigation: (
    navigation: NavigationType,
    title?: string | undefined,
    renderRight?: () => React.ReactNode,
    renderLeft?: () => React.ReactNode,
    option?: Options,
  ) => {
    navigation.setOptions({
      headerTitle: () =>
        title ? (
          <View
            style={{
              maxWidth: renderRight ? vw(260) : vw(300),
            }}>
            <Text numberOfLines={1} style={styles.titleText}>
              {title}
            </Text>
          </View>
        ) : (
          <View />
        ),
      headerRight: () => (renderRight ? renderRight() : <View />),
      headerLeft: () =>
        renderLeft ? (
          renderLeft()
        ) : (
          <TouchableOpacity
            style={{marginLeft: vw(0)}}
            activeOpacity={0.8}
            hitSlop={{left: vw(25), right: vw(25), bottom: vw(25), top: vw(25)}}
            onPress={() => navigation.backButtonPress()}>
            <Image source={images.arrow_left} style={styles.backButton} />
          </TouchableOpacity>
        ),
      headerTitleAlign: 'center',
      headerTintColor: colors.white,
      headerShadowVisible: option?.headerShadowVisible ?? false,
      headerStyle: {backgroundColor: option?.backgroundColor ?? colors.white},
      headerBackVisible: false,
      headerShown: true,
    });
  },
};

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    fontSize: vw(20),
    color: colors.black,
    fontFamily: fonts.BalooThambiBold,
    includeFontPadding: false,
    paddingVertical: 0,
    // backgroundColor: 'red',
  },
  backButton: {
    width: vw(50),
    height: vw(50),
    resizeMode: 'contain',
  },
});
