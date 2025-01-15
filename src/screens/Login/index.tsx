import React, {useRef, useState, useSyncExternalStore} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {images, screensName, strings, vh} from '../../constants';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {NavigationType} from '../../components/Header';
import auth from '@react-native-firebase/auth';
import {styles} from './styles'
const initalErrorState = {
  userName: '',
  password: '',
};

interface Props {
  navigation: NavigationType;
}

const Login: React.FC<Props> = (props: Props) => {
  const [password, setPassword] = useState('');
  const inputref_1 = useRef<TextInput>();
  const inputref_2 = useRef<TextInput>();

  const [email, setEmail] = useState('');

  const [errorState, setErrorState] = useState(initalErrorState);

  const resetError = () => {
    setErrorState({
      ...initalErrorState,
    });
  };

  const signIn = () => {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      props.navigation.navigate(screensName.PreLoader);
      resetError();
    })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
         
          Alert.alert('Already used Email !');
        }

        if (error.code === 'auth/invalid-email') {
          
          Alert.alert('Email Invalid !');
        }
        if(error.code==='auth/invalid-credential'){
          Alert.alert('Incorrect Credintials!')
        }
         
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: vh(20)}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.loginConatainer}>
          <Text style={styles.loginText}>{strings.LOGIN}</Text>
        </View>
        <View style={styles.healthContainer}>
          <Text style={styles.healthTxt}>{strings.Healthcare}</Text>
        </View>

        <CustomInput
          ref={inputref_1}
          title={strings.email}
          value={email}
          keyboardType={'default'}
          placeholder='Enter Email'
          style={styles.inputBox}
          majorContainer={[styles.textinputContainer, {marginTop: vh(91)}]}
          onChangeText={(text: any) => {
            setEmail(text);
          }}
          renderLeft={() => <Image source={images.email} style={styles.logo} />}
        />
        <CustomInput
          ref={inputref_2}
          title={strings.password}
          value={password}
          keyboardType={'default'}
          secureTextEntry={true}
          placeholder={'Enter Password'}
          style={styles.inputBox}
          majorContainer={[styles.textinputContainer, {marginTop: vh(50)}]}
          onChangeText={(text: any) => {
            setPassword(text);
            setErrorState({...errorState, password: ''});
          }}
        
          renderLeft={() => <Image source={images.lock} style={styles.logo} />}
           
        />
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>{strings.forgot}</Text>
        </TouchableOpacity>
        <View style={styles.donthaveContainer}>
          <Text style={styles.dontext}>{strings.donhave}</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(screensName.Register);
            }}>
            <Text style={styles.regisTxt}>{strings.register}</Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          title={strings.LOGIN}
          onPress={() => {
             signIn();
          }}
          titleStyle={styles.title}
          style={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default  Login;

