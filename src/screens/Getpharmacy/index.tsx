import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
  PermissionsAndroid,
  Alert,
  Platform,
  Linking,
} from 'react-native';

import { images, screensName, strings, vh} from '../../constants';
import { NavigationType } from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from './styles';

interface ShopData {
  id: string;
  name: string;
  distance: string;
  reviews: string;
  rating: string;
  image: any;
}

interface Props {
  navigation: NavigationType;
}

const GetPharmacy = (Props: any) => {
  const handlePhotoLibraryPermission = async () => {
    if (Platform.OS !== 'android') {
      Alert.alert('Unsupported Platform', 'This feature is only available on Android.');
      return;
    }

    const permission =
      Platform.Version >= 33
        ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

    try {
      const hasPermission = await PermissionsAndroid.check(permission);
      if (hasPermission) {
        openImagePicker();
      } else {
        const result = await PermissionsAndroid.request(permission);
        if (result === PermissionsAndroid.RESULTS.GRANTED) {
          openImagePicker();
        } else {
          Alert.alert(
            'Permission Denied',
            'Storage permission is required to select images. Please enable it in settings.',
            [
              { text: 'Cancel', style: 'cancel' },
              {
                text: 'Open Settings',
                onPress: () => Linking.openSettings(),
              },
            ],
          );
        }
      }
    } catch (error) {
      console.error('Permission Error:', error);
      Alert.alert('Error', 'An unexpected error occurred while requesting permission.');
    }
  };

  const openImagePicker = () => {
    ImagePicker.openPicker({
      cropping: true,
      width: 300,
      height: 300,
      includeBase64: false,
    })
      .then(image => {
        console.log('Image selected', image);
        let newfile = {
          uri: image.path,
          type: `test/${image.path.split('.')[1]}`,
          name: `test.${image.path.split(".")[1]}`,
        };
        upload(newfile);
      })
      .catch(error => {
        if (error.code === 'E_PICKER_CANCELLED') {
          console.log('User canceled the image picker');
        } else {
          console.error('Image Picker Error:', error);
          Alert.alert('Error', 'An unexpected error occurred while picking the image.');
        }
      });
  };

  const upload = (image: any) => {
    console.log('Uploading image', image);
    const data = new FormData();
    data.append('file', {
      uri: image.uri,
      type: 'image/jpeg',
      name: `test.${image.uri.split('.').pop()}`,
    });
    data.append('upload_preset', 'HealthApp');
    data.append('Cloud_name', 'dhic2j9vj');

    fetch("https://api.cloudinary.com/v1_1/dhic2j9vj/image/upload", {
      method: 'POST',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        Alert.alert("Prescription Uploaded Successfully!");
        console.log('Upload response:', data);
      })
      .catch(error => {
        console.error('Upload Error:', error);
      });
  };

  const shopData: ShopData[] = [
    {
      id: '1',
      name: 'Path Lab Pharmacy',
      distance: '5km Away',
      reviews: '120 reviews',
      rating: '4.5',
      image: images.pathlab,
    },
    {
      id: '2',
      name: '24 Pharmacy',
      distance: '3km Away',
      reviews: '85 reviews',
      rating: '4.3',
      image: images.phar24,
    },
    {
      id: '3',
      name: 'Care Pharmacy',
      distance: '7km Away',
      reviews: '150 reviews',
      rating: '4.8',
      image: images.pathlab,
    },
  ];

  const renderShopItem = ({ item }: { item: ShopData }) => (
    <View style={styles.shopBox}>
      <Image source={item.image} style={styles.shopImg} />
      <Text style={styles.shopName}>{item.name}</Text>
      <Text style={styles.shopDis}>{item.distance}</Text>
      <View style={styles.row1}>
        <Image source={images.star} />
        <Text style={styles.review}>{item.rating}</Text>
        <Text style={styles.review}>({item.reviews})</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => Props.navigation.navigate(screensName.Home)}>
          <Image source={images.arrow_left} style={styles.backButton} />
        </TouchableOpacity>
        <Image source={images.location} style={styles.location} />
        <Text style={styles.txt}>{strings.Mohali}</Text>
      </View>
      <Text style={styles.pharmcyTxt}>{strings.pharnear}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: vh(40) }}>
        <FlatList
          data={shopData}
          renderItem={renderShopItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
        <Text style={styles.uploadPrescription}>{strings.upload_prescription}</Text>
        <Text style={styles.weShowTxt}>
          {strings.we_will}
        </Text>

        <View style={styles.uploadBox}>
          <TouchableOpacity onPress={() => handlePhotoLibraryPermission()}>
            <Image source={images.upload} style={styles.uploadImg} />
            <TouchableOpacity>
              <Text style={styles.uploadTxt}>{strings.uploadlink}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePhotoLibraryPermission()}>
            <Image source={images.upload_arrow} style={styles.uploadImg} />
            <TouchableOpacity>
              <Text style={styles.uploadTxt}>{strings.uploadfile}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <CustomButton
          onPress={() => {}}
          title={strings.continue}
          style={styles.button}
          titleStyle={styles.title}
        />
      </ScrollView>
    </View>
  );
};

export default GetPharmacy;
