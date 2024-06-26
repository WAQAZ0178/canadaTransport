import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {appImages} from '../../../Services/index';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../Services/utilities';
import {Icon} from 'react-native-elements';
// import {MyButton} from '../../../Components';
const Signup = props => {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.royalBlue}
        translucent={false}
      />
      <View
        style={{
          backgroundColor: colors.royalBlue,
          width: responsiveWidth(100),
          paddingHorizontal: responsiveWidth(5),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: responsiveHeight(1.5),
        }}>
        <TouchableOpacity>
          <Image
            source={appImages.arrowback}
            style={{
              height: responsiveHeight(2.5),
              width: responsiveWidth(5),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontSize: responsiveFontSize(1.9),
            fontFamily: fontFamily.bold,
          }}>
          Create Account
        </Text>
        <View style={{width: responsiveWidth(5)}} />
      </View>
      <Image
        source={appImages.logo}
        style={{
          height: responsiveHeight(8),
          width: responsiveWidth(70),
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop: responsiveHeight(3),
          marginBottom: responsiveHeight(7),
        }}
      />
      <Text
        style={{
          color: colors.royalBlue,
          fontSize: responsiveFontSize(1.9),
          fontFamily: fontFamily.bold,
          marginLeft: responsiveWidth(8),
        }}>
        Full Name
      </Text>
      <View
        style={{
          backgroundColor: '#F6F6F6',
          width: responsiveWidth(90),
          alignSelf: 'center',
          paddingHorizontal: responsiveWidth(3),
          paddingVertical: responsiveHeight(0.5),
          marginTop: responsiveHeight(1.5),
          borderRadius: responsiveWidth(2),
        }}>
        <TextInput
          placeholder="Full Name"
          style={{padding: 0, margin: 0, fontFamily: fontFamily.semiBold}}
        />
      </View>
      <Text
        style={{
          color: colors.royalBlue,
          fontSize: responsiveFontSize(1.9),
          fontFamily: fontFamily.bold,
          marginLeft: responsiveWidth(8),
          marginTop: responsiveHeight(2.5),
        }}>
        Email
      </Text>
      <View
        style={{
          backgroundColor: '#F6F6F6',
          width: responsiveWidth(90),
          alignSelf: 'center',
          paddingHorizontal: responsiveWidth(3),
          paddingVertical: responsiveHeight(0.5),
          marginTop: responsiveHeight(1.5),
          borderRadius: responsiveWidth(2),
        }}>
        <TextInput
          placeholder="Email Address"
          style={{padding: 0, margin: 0, fontFamily: fontFamily.semiBold}}
        />
      </View>
      <Text
        style={{
          color: colors.royalBlue,
          fontSize: responsiveFontSize(1.9),
          fontFamily: fontFamily.bold,
          marginLeft: responsiveWidth(8),
          marginTop: responsiveHeight(2.5),
        }}>
        Password
      </Text>
      <View
        style={{
          backgroundColor: '#F6F6F6',
          width: responsiveWidth(90),
          alignSelf: 'center',
          paddingHorizontal: responsiveWidth(3),
          paddingVertical: responsiveHeight(0.5),
          marginTop: responsiveHeight(1.5),
          borderRadius: responsiveWidth(2),
        }}>
        <TextInput
          placeholder="Password (Atleast 8 Characters)"
          style={{padding: 0, margin: 0, fontFamily: fontFamily.semiBold}}
        />
      </View>
      <View
        style={{
          width: responsiveWidth(90),
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(2),
        }}>
        {check ? (
          <TouchableOpacity
            onPress={() => setCheck(!check)}
            style={{
              backgroundColor: colors.royalBlue,
              height: responsiveWidth(5),
              width: responsiveWidth(5),
            }}>
            <Icon
              name="check"
              type={'antdesign'}
              color={colors.white}
              size={responsiveFontSize(2.5)}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setCheck(!check)}
            style={{
              backgroundColor: colors.lightsilver,
              height: responsiveWidth(5),
              width: responsiveWidth(5),
            }}
          />
        )}
        <Text
          style={{
            color: colors.greyText,
            textAlign: 'justify',
            marginLeft: responsiveWidth(3),
            fontSize: responsiveFontSize(1.5),
            fontFamily: fontFamily.medium,
          }}>
          By creating an account, you agree to our{' '}
          <Text style={{color: colors.royalBlue}}>Terms and Conditions</Text>{' '}
          and acknowledge our{' '}
          <Text style={{color: colors.royalBlue}}>Privacy Policy.</Text>
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.royalBlue,
          height: responsiveHeight(7),
          width: responsiveWidth(50),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: responsiveWidth(5),
          marginVertical: responsiveHeight(5),
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: fontFamily.semiBold,
            fontSize: responsiveFontSize(2),
          }}>
          REGISTER
        </Text>
      </TouchableOpacity>
      {/* <View
        style={{
          width: responsiveWidth(30),
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: responsiveHeight(5),
        }}>
        <TouchableOpacity
          style={{
            width: responsiveWidth(14),
            height: responsiveWidth(14),
            borderRadius: responsiveWidth(7),
            backgroundColor: colors.blue,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={appImages.fb}
            style={{
              height: responsiveHeight(2),
              width: responsiveWidth(4),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: responsiveWidth(14),
            height: responsiveWidth(14),
            borderRadius: responsiveWidth(7),
            backgroundColor: colors.red,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={appImages.google}
            style={{
              height: responsiveHeight(2),
              width: responsiveWidth(4),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View> */}
      <Text
        style={{
          color: 'gray',
          fontSize: responsiveFontSize(1.9),
          alignSelf: 'center',
          fontFamily: fontFamily.medium,
        }}>
        Already have an account?{' '}
        <Text
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          style={{color: colors.royalBlue}}>
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Signup;
