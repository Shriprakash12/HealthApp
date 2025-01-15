import { StyleSheet } from "react-native";
import { colors, fonts, vh, vw } from "../../constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
  
    list: {
      paddingBottom: 80,
    },
    row1: {
      marginTop: 41,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
    row: {
      flexDirection: 'row',
      gap: 30,
      justifyContent: 'flex-start',
    },
    icon: {
      height: vh(33),
      width: vw(33),
      marginLeft: vw(26),
    },
    healthicon: {
      height: vh(42),
      width: vw(37),
    },
    micBox: {
      height: vw(58),
      width: vw(58),
      borderRadius: vw(29),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'rgba(95, 91, 91, 1)',
      marginRight: 20,
      marginTop: vh(-7),
    },
    txt: {
      fontSize: vw(17),
      fontFamily: fonts.BalooThambiMedium,
    },
    mic: {
      height: vh(22),
      width: vw(22),
    },
    box: {
      width: vw(160),
      height: vh(52),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderWidth: vw(1),
      borderRadius: vw(10),
      borderColor: 'rgba(108, 96, 96, 1)',
    },
    boxRow: {
      flexDirection: 'row',
      alignSelf: 'center',
      gap: 25,
      marginTop: vh(24),
    },
    imgIcon: {
      height: vh(34),
      width: vw(34),
    },
    uploadTxt: {
      marginTop: vh(37),
      marginLeft: vw(30),
      fontSize: vw(20),
      fontFamily: fonts.BalooThambiBold,
      color: colors.black,
    },
    descriptionTxt: {
      width: vw(335),
      marginLeft: vw(30),
  
      height: vh(44),
    },
    desTxt: {
      fontSize: vw(14),
      fontFamily: fonts.BalooThambiMedium,
      color: '#3A3A3A',
      marginRight: vw(15),
    },
    orderRow: {
      flexDirection: 'row',
      marginTop: vh(25),
      justifyContent: 'space-evenly',
    },
    flatTxt: {
      width: vw(123),
      height: vh(44),
    },
    button: {
      width: vw(159),
      height: vh(44),
      backgroundColor: '#1C82DF',
      fontFamily: fonts.BalooThambiMedium,
      fontSize: vw(14),
      color: '#4A4A4A',
    },
    title: {
      fontSize: vw(20),
      fontFamily: fonts.BalooThambiSemiBold,
    },
 
    boxColor:{
     width:vw(190),
     height:vh(178),
     marginTop:vh(102),
     backgroundColor:'#F5E1E9'
    },
    boxRight:{
     backgroundColor:'#D7D0FF',
     width:vw(16),
     height:vh(178),
     marginTop:vh(-20),
     marginLeft:345,
     borderRadius:vw(10),
     
    }
  
  });
  