import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { images, screensName, strings, vh} from '../../constants';
import CustomButton from '../../components/CustomButton';
import { NavigationType } from '../../components/Header';
import auth from '@react-native-firebase/auth';
import {styles} from './styles'
interface Props {
  navigation: NavigationType;
}

const Home = (Props:any) => {
  const handleMenuPress = () => {
    Alert.alert(
      strings.logout,
      strings.are_you,
      [
        {
          text: strings.cancel,
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: strings.yes, 
          onPress: () => {
            // Sign out user
            auth()
              .signOut()
              .then(() => {
                console.log('User signed out!');
                // Navigate to the login screen after logout
                Props.navigation.navigate(screensName.Login);
              })
              .catch(error => {
                console.error("Logout error: ", error);
              });
          }
        }
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.row1}>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{
            handleMenuPress();
          }}>
            <Image source={images.menu} style={styles.icon} />
          </TouchableOpacity>
          <Image source={images.health} style={styles.healthicon} />
        </View>
        <TouchableOpacity style={styles.micBox}>
          <Image source={images.mic} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: vh(80)}}>
        <View style={styles.boxRow}>
          <View style={styles.box}>
            <Text style={styles.txt}>{strings.Questions}</Text>
            <Image source={images.question} style={styles.imgIcon} />
          </View>
          <View style={styles.box}>
            <Text style={styles.txt}>{strings.Reminders}</Text>
            <Image source={images.remainder} style={styles.imgIcon} />
          </View>
        </View>
        <View style={styles.boxRow}>
          <View style={styles.box}>
            <Text style={styles.txt}>{strings.Messages}</Text>
            <Image source={images.message} style={styles.imgIcon} />
          </View>
          <View style={styles.box}>
            <Text style={styles.txt}>{strings.Calendar}</Text>
            <Image source={images.calendar} style={styles.imgIcon} />
          </View>
        </View>
        <Text style={styles.uploadTxt}>{strings.upload_prescription}</Text>
        <View style={styles.descriptionTxt}>
          <Text style={styles.desTxt}>
             {strings.upload_des}
          </Text>
        </View>

        <View style={styles.orderRow}>
          <Text style={styles.flatTxt}>{strings.offer}</Text>
          <CustomButton
            title={strings.order_now}
            onPress={() => {}}
            style={styles.button}
            titleStyle={styles.title}
          />
        </View>
        <Image
          source={images.medical_services}
          style={[styles.medicalImg, {marginTop: vh(34)}]}
        />
        <Image
          source={images.offer}
          style={[styles.offerImg, {marginTop: vh(20)}]}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

 
