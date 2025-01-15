import { StyleSheet } from "react-native";
import { colors, fonts, vh, vw } from "../../constants";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  loginConatainer: {
    marginTop: vh(45),
    alignSelf: 'center',
  },

  loginText: {
    fontSize: vw(22),
    color: colors.black,
    fontFamily: fonts.BalooThambiRegular,
  },
  logo: {
    tintColor: colors.black,
  },
  healthContainer: {
    marginTop: vh(110),
    alignSelf: 'center',
  },
  healthTxt: {
    fontSize: vw(50),
    fontFamily: fonts.BalooThambiBold,
  },

  forgotContainer: {
    height: vh(25),
    marginLeft: vw(210),
    alignItems: 'center',
    marginTop: vh(20),
  },

  inputBox: {
    width: vw(320),
  },

  button: {
    width: vw(330),
    height: vh(68),
    marginTop: vh(90),
    color: '#5391B4',
  },
  title: {
    fontSize: vw(20),
    fontFamily: fonts.BalooThambiSemiBold,
  },

  textinputContainer: {
    width: vw(330),
    borderRadius: vw(10),
    height: vh(68),
    borderWidth: vw(0.5),
    borderColor: colors.black,
  },
});
