import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../Services';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  copyText: {
    color: colors.red,
    fontFamily: fontFamily.regular,
    fontSize: responsiveFontSize(1.4),
    textAlign: 'right',
    marginRight: responsiveWidth(3),
  },
  card: {
    backgroundColor: 'white',
    width: responsiveWidth(94),
    alignSelf: 'center',
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
    borderWidth: responsiveWidth(0.3),
    borderColor: colors.lightsilver,
  },
  cardS: {
    backgroundColor: 'white',
    width: responsiveWidth(43),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    // borderWidth: responsiveWidth(0.3),
    // borderColor: colors.lightsilver,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardL: {
    backgroundColor: 'white',
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    // borderWidth: responsiveWidth(0.3),
    // borderColor: colors.lightsilver,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headings: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.4),
  },
  labels: {
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    fontSize: responsiveFontSize(1.4),
  },
  labels1: {
    color: colors.greyText,
    fontFamily: fontFamily.semiBold,
    fontSize: responsiveFontSize(1.4),
    marginLeft: responsiveWidth(1),
    width: responsiveWidth(40),
    marginRight: responsiveWidth(5),
  },
  inputs: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.45),
    padding: 0,
    margin: 0,
    marginVertical: responsiveHeight(1),
  },
  input1: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.45),
    padding: 0,
    margin: 0,
    // marginVertical: responsiveHeight(1),
  },
  sentence: {
    color: colors.black,
    fontFamily: fontFamily.bold,
    fontSize: responsiveFontSize(1.3),
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(0.5),
    width: responsiveWidth(94),
    alignSelf: 'center',
  },
  rowView: {
    width: responsiveWidth(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(1.5),
    // alignItems: 'center',
  },
  rowViewS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowViewF: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(1),
  },
});
