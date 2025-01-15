import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constants";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.white,
    },
    title: {
      fontSize: 24,
      fontFamily:fonts.BalooThambiBold,
      marginBottom: 20,
      alignSelf:'center'
    },
    imageList: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    imageContainer: {
      width: 150,
      height: 150,
      margin: 10,
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 120,
      height: 120,
      resizeMode: "cover",
      marginBottom: 5,
    },
    imageText: {
      textAlign: "center",
      fontSize: 12,
      color: "#555",
    },
  });
  