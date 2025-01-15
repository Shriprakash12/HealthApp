import { StyleSheet } from "react-native";
import { colors, fonts, vh, vw } from "../../constants";

 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    flatListContent: {
      marginTop: vh(40),
      height: vh(190),
    },
    row: {
      flexDirection: 'row',
      marginTop: vh(40),
      marginLeft: vw(20),
      gap: 30,
    },
    backButton: {
      height: vh(30),
      width: vw(40),
    },
    location: {
      width: vw(34),
      height: vh(28),
    },
    txt: {
      fontSize: vw(20),
      fontFamily: fonts.BalooThambiBold,
    },
    pharmcyTxt: {
      fontSize: vw(24),
      fontFamily: fonts.BalooThambiBold,
      marginLeft: vw(28),
      marginTop: vh(40),
    },
    shopBox: {
      height: vh(190),
      width: vw(190),
      borderWidth: 0.5,
      borderColor: colors.black,
      borderRadius: vw(20),
      marginHorizontal: vw(14),
    },
    shopImg: {
      width: vw(190),
      height: vh(109),
      resizeMode: 'cover',
    },
    shopName: {
      height: vh(25),
      fontSize: vw(16),
      fontFamily: fonts.BalooThambiSemiBold,
      marginLeft: vw(9),
      marginTop: vh(6),
    },
    shopDis: {
      marginLeft: vw(9),
      fontFamily: fonts.BalooThambiMedium,
      fontSize: vw(14),
    },
    title: {
      fontSize: vw(20),
      fontFamily: fonts.BalooThambiSemiBold,
    },
    row1: {
      flexDirection: 'row',
      gap: vw(7),
      marginLeft: vw(8),
      marginTop: vh(2),
    },
    review: {
      fontSize: vw(12),
      fontFamily: fonts.BalooThambiMedium,
  
      marginTop: vh(-4),
    },
    uploadPrescription: {
      fontSize: vw(32),
      fontFamily: fonts.BalooThambiBold,
  
      alignSelf: 'center',
      marginTop: vh(42),
    },
    weShowTxt: {
      width: vh(390),
      height: vh(67),
      fontSize: vw(20),
      alignSelf: 'center',
      textAlign: 'center',
      marginTop: vh(6),
  
      fontFamily: fonts.BalooThambiMedium,
      color: colors.black,
    },
    uploadBox: {
      width: vw(350),
      height: vh(190),
      borderWidth: vw(0.5),
      borderColor: colors.black,
      backgroundColor: colors.white,
      marginTop: vh(40),
      alignSelf: 'center',
      borderRadius: vw(20),
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    button: {
      width: vw(350),
      height: vh(62),
      marginTop: vh(40),
      backgroundColor: '#41B592',
    },
    uploadImg:{
      width:vw(74),
      height:vh(74),
      marginTop:vh(40)
    },
    uploadTxt:{
      fontSize:vw(20),
      fontFamily:fonts.BalooThambiSemiBold,
      color:colors.black,
      marginTop:vh(10),
    }
  });