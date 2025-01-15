import React from 'react';
import {Image,  View} from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {styles} from './styles';
import { colors, images, screensName, vh, vw } from '../constants';
import Home from '../screens/Home';
import GetPharmacy from '../screens/Getpharmacy';
import Schdule from '../screens/Schdule';
import Prescription from '../screens/Prescription';
 

const BottomTab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: true,
  tabBarActiveTintColor: colors.primaryColor,
  tabBarInactiveTintColor: colors['87A0BA'],
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarStyle: {
    height:  vh(80),
    borderTopWidth: 1,
    borderTopLeftRadius:vw(15),
    borderTopRightRadius:vw(15),
    backgroundColor:'#D9D9D9'
  },
};

type IconPropType = {
  focused: boolean;
};

const dashboardIcon = ({focused}: IconPropType) => (
  <View style={[styles.tabItem, {borderTopWidth: focused ? vh(2) : vh(0)}]}>
    <Image
      source={focused ? images.home_color : images.home}
      style={[styles.tabIconStyle]}
    />
  </View>
);

const schduleIcon = ({focused}: IconPropType) => (
  <View style={[styles.tabItem, {borderTopWidth: focused ? vh(2) : vh(0)}]}>
    <Image
      source={focused ? images.schdule_color: images.schdule}
      style={[styles.tabIconStyle]}
    />
  </View>
);

const prescriptionIcon = ({focused}: IconPropType) => (
  <View style={[styles.tabItem, {borderTopWidth: focused ? vh(2) : vh(0)}]}>
    <Image
      source={focused ? images.pres_color: images.pres}
      style={[styles.tabIconStyle]}
    />
  </View>
);

const getPharmcyIcon = ({focused}: IconPropType) => (
  <View style={[styles.tabItem, {borderTopWidth: focused ? vh(2) : vh(0)}]}>
    <Image
      source={focused ? images.getphar_color : images.getphar}
      style={[styles.tabIconStyle]}
    />
  </View>
);

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={screenOptions}
      initialRouteName={'Home'}>
      <BottomTab.Screen
        name={screensName.Home}
        component={Home}
        options={{
          tabBarIcon: dashboardIcon,
        }}
      />
      <BottomTab.Screen
        name={screensName.Schdule}
        component={Schdule}
        options={{
          tabBarIcon: schduleIcon,
        }}
      />
      
      <BottomTab.Screen
        name={screensName.Prescription}
        component={Prescription}
        options={{
          tabBarIcon: prescriptionIcon,
        }}
      />
      <BottomTab.Screen
        name={screensName.GetPharmacy}
        component={GetPharmacy}
        options={{
          tabBarIcon: getPharmcyIcon,
        }}
        
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
