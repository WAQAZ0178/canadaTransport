import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';
import {NewHeader, MyButton, MyFooter, DailyCard} from '../../../Components';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const Home = props => {
  return (
    <View style={styles.container}>
      <View style={{height: responsiveHeight(6)}} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
