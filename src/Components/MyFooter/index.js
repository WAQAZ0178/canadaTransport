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

export const MyFooter = props => {
  const {title, subtitle, text, continuePress} = props;
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
          marginBottom: responsiveHeight(3),
          marginTop: responsiveHeight(5),
        }}>
        <View>
          {title ? (
            <Text
              style={{
                color: colors.black,
                fontSize: responsiveFontSize(1.5),
                fontFamily: fontFamily.regular,
              }}>
              {title}
            </Text>
          ) : null}
          {subtitle ? (
            <Text
              style={{
                color: colors.black,
                fontSize: responsiveFontSize(1.5),
                fontFamily: fontFamily.regular,
              }}>
              {subtitle}
            </Text>
          ) : null}
          {text ? (
            <Text
              style={{
                color: colors.black,
                fontSize: responsiveFontSize(1.5),
                fontFamily: fontFamily.regular,
              }}>
              {text}
            </Text>
          ) : null}
        </View>
        <Image
          source={appImages.logo}
          style={{
            height: responsiveHeight(6),
            width: responsiveWidth(12),
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: responsiveWidth(94),
          alignSelf: 'center',
          marginBottom: responsiveHeight(3),
        }}>
        <TouchableOpacity
          style={{
            width: responsiveWidth(22),
            marginRight: responsiveWidth(2),
            backgroundColor: colors.red,
            borderRadius: responsiveWidth(2),
            alignItems: 'center',
            height: responsiveHeight(4),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: responsiveFontSize(1.5),
              fontFamily: fontFamily.extraBold,
            }}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(22),
            marginRight: responsiveWidth(2),
            backgroundColor: colors.green,
            borderRadius: responsiveWidth(2),
            alignItems: 'center',
            height: responsiveHeight(4),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: responsiveFontSize(1.5),
              fontFamily: fontFamily.extraBold,
            }}>
            Print
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(22),
            marginRight: responsiveWidth(2),
            backgroundColor: colors.purple,
            borderRadius: responsiveWidth(2),
            alignItems: 'center',
            height: responsiveHeight(4),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: responsiveFontSize(1.5),
              fontFamily: fontFamily.extraBold,
            }}>
            Send
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={continuePress}
          style={{
            width: responsiveWidth(22),
            marginRight: responsiveWidth(2),
            backgroundColor: colors.royalBlue,
            borderRadius: responsiveWidth(2),
            alignItems: 'center',
            height: responsiveHeight(4),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: responsiveFontSize(1.4),
              fontFamily: fontFamily.bold,
              textAlign: 'center',
            }}>
            Save & Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: colors.royalBlue,
          paddingVertical: responsiveHeight(2),
          paddingHorizontal: responsiveWidth(10),
        }}>
        <Text
          style={{
            color: colors.white,
            fontSize: responsiveFontSize(1.6),
            fontFamily: fontFamily.semiBold,
          }}>{`Email: questions@tc.gc     Call:1-866-995-9793`}</Text>
      </View>
    </View>
  );
};
