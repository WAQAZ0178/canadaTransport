import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
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
  const {title} = props;
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: responsiveWidth(90),
          alignSelf: 'center',
          marginBottom: responsiveHeight(1),
        }}>
        <TouchableOpacity>
          <Image
            source={appImages.menu}
            style={{
              height: responsiveFontSize(3),
              width: responsiveFontSize(3),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: colors.black,
            fontSize: responsiveFontSize(2),
            fontFamily: fontFamily.HelveticaBold,
          }}>
          {title}
        </Text>
        <TouchableOpacity>
          <Icon
            name={'chevron-up'}
            type={'feather'}
            size={responsiveFontSize(4)}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
