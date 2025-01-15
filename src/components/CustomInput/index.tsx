import React, {forwardRef} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';
import {styles} from './styles';
 
import { vh,vw,fonts,images,colors } from '../../constants';

type AutoCapitalize = 'none' | 'sentences' | 'words' | 'characters' | undefined;

interface InputProps {
  value?: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  title?: string;
  isDisable?: boolean;
  isMandatory?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  autoCapitalize?: AutoCapitalize;
  onSubmitEditing?: () => void;
  style?: StyleProp<ViewStyle>;
  majorContainer?: StyleProp<ViewStyle>;
  renderExtra?: () => React.ReactNode;
  renderLeft?: () => React.ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholderTextColor?: string;
  errorMsg?: string | null;
}

const CustomInput = forwardRef((props: InputProps, ref: any) => {
  const {
    value,
    placeholder,
    onChangeText,
    title,
    isDisable,
    isMandatory,
    keyboardType,
    returnKeyType,
    onSubmitEditing,
    autoCapitalize,
    renderExtra,
    renderLeft,
    onFocus,
    onBlur,
    style,
    multiline = false,
    maxLength,
    secureTextEntry,
    placeholderTextColor,
    majorContainer,
    errorMsg,
  } = props;

  const [toggleShow, setToggleShow] = React.useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] =
    React.useState(secureTextEntry);

  const [isFocus, setIsFocus] = React.useState(false);

  const handleToggleText = () => {
    setToggleShow(!toggleShow);
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  const renderPasswordToggle = () => (
    <TouchableOpacity
      onPress={handleToggleText}
      
      style={styles.passwordIconContainer}>
      <Image
        // source={}
        style={styles.passwordToggle}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );

  const removeEmojis = (str: string) => {
    const regex =
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    return str.replace(regex, '');
  };
  const normalizeSpaces = (val: string) => {
    return val.replace('  ', ' ');
  };
  const normalizeFirstSpace = (val: string) => {
    return val.replace(/^\s+/g, '');
  };

  const extraStyle: any = {
    textAlignVertical: multiline ? 'top' : 'auto',
  };

  const getBorderColor = () => {
    if (isFocus) {
      return colors.red;
    } else if (errorMsg) {
      return colors.red;
    } else {
      return colors.primaryColor;
    }
  };

  return (
     
   
    <View style={[styles.InputView, majorContainer]}>
    {title && (
        <Text style={styles.titleStyle}>
          {title}   
        </Text>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          ref?.current.focus();
        }}
        disabled={isDisable}
        style={[
          styles.inputContainer,
          style,
          {
            backgroundColor: isDisable ? colors.F5F5F7 : colors.white,
            borderColor: getBorderColor(),
            height:vh(66)
          },
        ]}>
        {renderLeft ? renderLeft() : null}
        <TextInput
          ref={ref}
          value={value}
          editable={!isDisable}
          maxLength={maxLength}
          multiline={multiline}
          selectionColor={colors.primaryColor}
          placeholder={placeholder}
          style={[
            styles.textInput,
            extraStyle,
            {
              height: multiline ? vh(70) : vh(44),
            },
          ]}
          secureTextEntry={isSecureTextEntry}
          numberOfLines={1}
          placeholderTextColor={placeholderTextColor ?? colors.A9A9A9}
          onChangeText={(val: string) => {
            onChangeText(
              normalizeSpaces(removeEmojis(normalizeFirstSpace(val))),
            );
          }}
          onFocus={() => {
            onFocus && onFocus();
            setIsFocus(true);
          }}
          onBlur={() => {
            onBlur && onBlur();
            setIsFocus(false);
          }}
          autoCapitalize={autoCapitalize ?? 'sentences'}
          keyboardType={keyboardType ?? 'default'}
          returnKeyType={returnKeyType ?? 'done'}
          onSubmitEditing={() => {
            onSubmitEditing && onSubmitEditing();
          }}
        />
        {secureTextEntry && renderPasswordToggle()}
        {renderExtra ? renderExtra() : null}
      </TouchableOpacity>
       
    </View>
     
  );
});

export default CustomInput;
