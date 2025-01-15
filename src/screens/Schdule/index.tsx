import React from "react";
import { Image, ScrollView,  Text,TouchableOpacity,View, } from "react-native";
import CustomButton from "../../components/CustomButton";
import { images, strings, vh} from "../../constants";
import {styles} from './styles'
const Schdule=()=>{
    return (
        <View style={styles.container}>
        <View style={styles.row1}>
          <View style={styles.row}>
            <TouchableOpacity>
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
               {strings.upload_pres}
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
         <View style={styles.boxColor}>
         </View>

         <View style={styles.boxRight}>
         </View>

        </ScrollView>
      </View>
    )
}

export default Schdule;


 