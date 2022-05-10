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
import {appImages, colors, fontFamily} from '../../utilities';
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
      <View style={styles.drawerHeader}>
        <TouchableOpacity>
          <Image source={appImages.profile} style={styles.picture} />
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>{`Jhon Smith`}</Text>
          <Text style={styles.email}>{`jhonsmith@gmail.com`}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.Buttons}>
        <Image source={appImages.d1} style={styles.icons} />
        <Text style={styles.ButtonsText}>Testimonial of sea service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttons}>
        <Image source={appImages.d2} style={styles.icons} />
        <Text style={styles.ButtonsText}>Statement of sea service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttons}>
        <Image source={appImages.d3} style={styles.icons} />
        <Text style={styles.ButtonsText}>Steering Testimonial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttons}>
        <Image source={appImages.d4} style={styles.icons} />
        <Text style={styles.ButtonsText}>Application for Certificate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttons}>
        <Image source={appImages.d5} style={styles.icons} />
        <Text style={styles.ButtonsText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Buttons}>
        <Image source={appImages.d6} style={styles.icons} />
        <Text style={styles.ButtonsText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.semiBold,
  },
  email: {
    color: 'white',
    fontSize: responsiveFontSize(1.5),
    fontFamily: fontFamily.regular,
  },
  picture: {
    height: responsiveHeight(7),
    width: responsiveWidth(14),
    borderRadius: responsiveWidth(7),
    resizeMode: 'contain',
    marginRight: responsiveWidth(3),
  },
  ButtonsText: {
    color: colors.greyText,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.8),
    marginLeft: responsiveWidth(3),
  },

  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.royalBlue,
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2),
  },
  icons: {
    height: responsiveFontSize(3),
    width: responsiveFontSize(3),
    resizeMode: 'contain',
    marginLeft: responsiveWidth(5),
  },
  Buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
});
export default CustomDrawer;
