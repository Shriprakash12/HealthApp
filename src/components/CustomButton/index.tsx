import {
  Text,
  View,
  Image,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ImageRequireSource,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Flow} from 'react-native-animated-spinkit';
interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  loaderColor?: string;
  disable?: boolean;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  rightImage?: ImageRequireSource;
  leftImage?: ImageRequireSource;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  titleStyle,
  rightImage,
  leftImage,
  loading = false,
  loaderColor ='white',
  disable = false,
}) => {
  const backgroundColor =
    disable || loading ?  'black' :'#5391B4';
  return (
    <TouchableOpacity
      disabled={disable || loading}
      activeOpacity={0.8}
      onPress={() => {
        onPress && onPress();
      }}
      style={[styles.buttonStyle, {backgroundColor: backgroundColor}, style]}>
      {loading ? (
        <Flow animating size={30} color={loaderColor} />
      ) : (
        <View style={styles.imageView}>
          {leftImage && (
            <Image
              source={leftImage}
              style={[styles.rightImage, styles.marginRight]}
            />
          )}
          <Text numberOfLines={1} style={[styles.buttonText, titleStyle]}>
            {title}
          </Text>
          {rightImage && (
            <Image
              source={rightImage}
              style={[styles.rightImage, styles.marginLeft]}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
