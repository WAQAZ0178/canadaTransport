import React from 'react';
import {View, TouchableOpacity, StatusBar, Image, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../Services/index';
import {Icon} from 'react-native-elements';
import {appImages} from '../../Services/utilities';
import {useNavigation} from '@react-navigation/native';

export const MyHeader = props => {
  const {title, subtitle} = props;
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: responsiveWidth(90),
          alignSelf: 'center',
          marginBottom: responsiveHeight(1),
          paddingTop: responsiveHeight(3),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Image
            source={appImages.h1}
            style={{
              height: responsiveFontSize(3),
              width: responsiveFontSize(3),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <Image
          source={appImages.logo}
          style={{
            height: responsiveHeight(8),
            width: responsiveWidth(16),
            resizeMode: 'contain',
          }}
        />
        <View
          style={{height: responsiveFontSize(3), width: responsiveFontSize(3)}}
        />
      </View>
      <Text
        style={{
          color: colors.royalBlue,
          fontFamily: fontFamily.bold,
          fontSize: responsiveFontSize(1.8),
          alignSelf: 'center',
        }}>
        {title}
      </Text>
      <Text
        style={{
          color: colors.royalBlue,
          fontFamily: fontFamily.bold,
          fontSize: responsiveFontSize(1.8),
          alignSelf: 'center',
        }}>
        {subtitle}
      </Text>
    </View>
  );
};
