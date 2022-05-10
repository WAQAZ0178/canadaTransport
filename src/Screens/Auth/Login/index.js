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
// import {MyButton} from '../../../Components';
const Login = props => {
  const [email, setEmail] = useState('');
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
          Login
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
          placeholder="Password"
          style={{padding: 0, margin: 0, fontFamily: fontFamily.semiBold}}
        />
      </View>
      <Text
        style={{
          color: colors.lighttexts,
          alignSelf: 'flex-end',
          marginRight: responsiveWidth(5),
          marginTop: responsiveHeight(2),
        }}>
        Forgot Password ?
      </Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('App');
        }}
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
          LOGIN
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
        Don’t have an account?{' '}
        <Text
          style={{color: colors.royalBlue}}
          onPress={() => {
            props.navigation.navigate('Signup');
          }}>
          Register
        </Text>
      </Text>
    </View>
  );
};

export default Login;
