import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
// import {appImages} from '../../globals/utilities/assets';
// import {colors} from '../../globals/utilities/colors';
// import {fontFamily} from '../../globals/utilities/fonts';
// import {logout} from '../../Backend/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getData} from '../../Backend/utility';
// import {getCurrentUserId} from '../../Backend/auth';
const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          //   props.navigation.navigate('Profile');
        }}>
        {/* <Image source={{uri: data.profilePicture}} style={styles.picture} /> */}
      </TouchableOpacity>
      <Text style={styles.name}>{`name`}</Text>
      <Text style={styles.email}>{`${email}`}</Text>
      <TouchableOpacity
        onPress={() => {
          //   props.navigation.navigate('Rekit', {
          //     item: data.type === 'OFFER A SERVICE AS' ? data : [],
          //     type: data.type,
          //   });
        }}>
        <Text style={styles.Buttons}>My Kits</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //   props.navigation.navigate('MyAnnoucement');
        }}>
        <Text style={styles.Buttons}>My Annoucements</Text>
      </TouchableOpacity>
      <View style={{height: responsiveHeight(30)}} />
      <TouchableOpacity
        onPress={async () => {
          //   await logout().then(async () => {
          //     await AsyncStorage.clear();
          //     props.navigation.navigate('Login');
          //   });
        }}>
        <Text style={styles.ButtonLogout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  name: {
    color: 'white',
    marginTop: responsiveHeight(2.5),
    fontSize: responsiveFontSize(2.8),
    textAlign: 'center',
    // fontFamily: fontFamily.PoppinsSemiBold,
  },
  email: {
    color: 'white',
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    // fontFamily: fontFamily.PoppinsMedium,
    marginBottom: responsiveHeight(4),
  },
  picture: {
    height: responsiveHeight(14),
    width: responsiveWidth(28),
    borderRadius: responsiveWidth(14),
    alignSelf: 'center',
    marginTop: responsiveHeight(8),
  },
  Buttons: {
    color: 'white',
    marginLeft: responsiveWidth(5),
    // fontFamily: fontFamily.PoppinsMedium,
    fontSize: responsiveFontSize(2.5),
    marginTop: responsiveHeight(4),
  },
  ButtonLogout: {
    color: 'white',
    marginLeft: responsiveWidth(5),
    // fontFamily: fontFamily.PoppinsSemiBold,
    fontSize: responsiveFontSize(2.5),
  },
});
export default CustomDrawer;
