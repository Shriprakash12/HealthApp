import React, { useState } from "react";
import {  Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {styles} from './styles'
const Prescription = () => {
  const [images, setImages] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const cloudName ="dhic2j9vj";  
  const apiKey = "234243461646245";  
  const apiSecret = "s6lqxPHs-qmKH3s6s8NprPBmHao";  

  // Fetch data on component mount
  useFocusEffect(
    React.useCallback(() => {
      fetchCloudinaryImages();
    }, [])
  );

  // Function to fetch images from Cloudinary
  const fetchCloudinaryImages = async () => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`, // Authentication
        },
      });

      const data = await response.json();
      console.log("Cloudinary Image Data:", data);

      if (data.resources) {
        setImages(data.resources); // Store images in state
      } else {
        console.error("Error fetching images:", data);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); // Set loading to false after the request is complete
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Uploaded Prescriptions</Text>
      
      {/* Show loading spinner while images are being fetched */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView contentContainerStyle={styles.imageList}>
          {images.map((image:any) => (
            <View key={image.public_id} style={styles.imageContainer}>
              <Image
                source={{ uri: image.secure_url }}
                style={styles.image}
              />
              <Text style={styles.imageText}>Image: {image.public_id}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Prescription;

