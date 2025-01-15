import React, { useEffect } from 'react';
import {Image, SafeAreaView,View} from 'react-native';
import {styles} from './styles';
import { images, strings } from '../../constants';
import { NavigationType } from '../../components/Header';
interface Props {
  navigation: NavigationType;
}
const  PreLoader: React.FC<Props> = (props: Props) => {

  useEffect(() => {
    // Delay navigation by 5 seconds
    const timer = setTimeout(() => {
      props.navigation.navigate('BottomTabNavigator');
    }, 3000); // 5000ms = 5 seconds

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [props.navigation]);
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={images.loader}
          style={styles.conversionImage}
        /> 
      </View>
    </SafeAreaView>
  );
};

export default  PreLoader;
