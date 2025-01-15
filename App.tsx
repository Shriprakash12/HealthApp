 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Login from './src/screens/Login';
import RootNavigator from './src/navigator';
import SplashScreen from 'react-native-splash-screen';
 
const App=()=>{
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <RootNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //   justifyContent:'center',
  //   alignItems:'center',
  // backgroundColor:'white'
  },
});

export default App;
