import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import Login from '../screens/Login';
import Home from '../screens/Home';
import GetPharmacy from '../screens/Getpharmacy';
import PreLoader from '../screens/PreLoader';
import BottomTabNavigator from './bottom-tab';
import Register from '../screens/Register';
import { screensName } from '../constants';

 

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
          <Stack.Screen name={screensName.Login} component={Login} />
          <Stack.Screen name={screensName.Register} component={Register} />
          <Stack.Screen name={screensName.PreLoader} component={PreLoader}/>
          <Stack.Screen name={screensName.Home} component={Home}/>
          <Stack.Screen name={screensName.BottomTabNavigator} component={BottomTabNavigator}/>
          <Stack.Screen name={screensName.GetPharmacy} component={GetPharmacy} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
