import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../Services';
export const MyButton = props => {
  const {onPress, title, myStyles, itsTextstyle, loading} = props;

  const showConent = () => {
    return (
      <>{title && <Text style={[styles.title, itsTextstyle]}>{title}</Text>}</>
    );
  };
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.Button, myStyles]}>
      {loading ? <ActivityIndicator color="red" size="small" /> : showConent()}
    </TouchableOpacity>
  );
};
export const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'blue',
    width: responsiveWidth(86),
    height: responsiveHeight(5),
    alignSelf: 'center',
    borderRadius: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontSize: responsiveFontSize(1.9),
    fontFamily:
      Platform.OS === 'android'
        ? fontFamily.helveticaroundedbold
        : fontFamily.HelveticaBold,
  },
});
