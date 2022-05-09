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
import {fontFamily} from '../../../Services/utilities';
// import {MyButton} from '../../../Components';
const Splash = props => {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        source={appImages.logo}
        style={{
          height: responsiveHeight(15),
          width: responsiveWidth(90),
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop: responsiveHeight(40),
        }}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Login');
        }}
        style={{
          backgroundColor: '#F03F35',
          height: responsiveHeight(6),
          width: responsiveWidth(45),
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: responsiveWidth(3),
          position: 'absolute',
          bottom: responsiveHeight(5),
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: fontFamily.semiBold,
            fontSize: responsiveFontSize(1.7),
          }}>
          GET STARTED
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
