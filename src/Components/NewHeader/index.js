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
export const NewHeader = props => {
  const navigation = useNavigation();
  const {title, arrow, pink, menu} = props;
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
          {arrow ? (
            <>
              {pink ? (
                <Icon
                  name={'arrow-left'}
                  type={'font-awesome-5'}
                  size={responsiveFontSize(3)}
                  color={colors.white}
                />
              ) : null}
              <Icon
                name={'arrowleft'}
                type={'antdesign'}
                size={responsiveFontSize(3)}
                color={colors.black}
              />
            </>
          ) : (
            <Icon
              name={'chevron-left'}
              type={'feather'}
              size={responsiveFontSize(3)}
              color={colors.black}
            />
          )}
        </TouchableOpacity>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            fontFamily: fontFamily.HelveticaBold,
            color: pink ? colors.white : colors.black,
          }}>
          {title ? title : ''}
        </Text>
        {menu ? (
          <>
            {pink ? (
              <TouchableOpacity>
                <Image
                  source={appImages.menuWhite}
                  style={{
                    height: responsiveFontSize(3),
                    width: responsiveFontSize(3),
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
            ) : (
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
            )}
          </>
        ) : (
          <View style={{width: responsiveFontSize(3)}} />
        )}
      </View>
    </View>
  );
};
