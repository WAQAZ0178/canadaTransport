import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './style';
import {MyHeader, MyFooter} from '../../../Components';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements';
import {colors, fontFamily} from '../../../Services';
import {DateSelect, DateSelect1} from '../../../Components/dateTimePicker';
const FarmD2 = props => {
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState('26-03-22');
  const [date1, setDate1] = useState('26-03-22');
  const [data, setData] = useState([
    {
      title: 'Master in command of the vessel',
      flag: false,
    },
    {
      title: 'Chief mate',
      flag: false,
    },
    {
      title: 'Officer in charge of the deck watch',
      flag: false,
    },
    {
      title: 'Bridge watch rating',
      flag: false,
    },
    {
      title: 'Junior officer to a mate in charge of the deck watch',
      flag: false,
    },
    {
      title: 'Ordinary seaman',
      flag: false,
    },
    {
      title: 'Other (specify) : Specify...',
      flag: false,
    },
  ]);
  return (
    <ScrollView style={styles.container}>
      <MyHeader
        title={'TESTIMONAL OF SEA SERVICE'}
        subtitle={'(DECK DEPARTMENT)'}
      />
      <View style={{height: responsiveHeight(2)}} />
      <View style={styles.card}>
        <View style={styles.cardL}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings}>School or Institution</Text>
            <Text style={[styles.headings, {width: responsiveWidth(34)}]}>
              Course
            </Text>
            <Text style={styles.headings}>From (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>School or Institution</Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Course
            </Text>
            <Text style={styles.headings1}>From (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>School or Institution</Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Course
            </Text>
            <Text style={styles.headings1}>From (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>School or Institution</Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Course
            </Text>
            <Text style={styles.headings1}>From (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>School or Institution</Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Course
            </Text>
            <Text style={styles.headings1}>From (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>School or Institution</Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Course
            </Text>
            <Text style={styles.headings1}>From (dd-mm-yyyy) </Text>
          </View>
        </View>
        <View style={{height: responsiveHeight(2)}} />
        <View style={styles.cardL}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings}>To (dd-mm-yyyy) </Text>
            <Text style={[styles.headings, {width: responsiveWidth(34)}]}>
              Training certificate {'\n'}number
            </Text>
            <Text style={styles.headings}>Date (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>To (dd-mm-yyyy) </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Training certificate {'\n'}number
            </Text>
            <Text style={styles.headings1}>Date (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>To (dd-mm-yyyy) </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Training certificate {'\n'}number
            </Text>
            <Text style={styles.headings1}>Date (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>To (dd-mm-yyyy) </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Training certificate {'\n'}number
            </Text>
            <Text style={styles.headings1}>Date (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>To (dd-mm-yyyy) </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Training certificate {'\n'}number
            </Text>
            <Text style={styles.headings1}>Date (dd-mm-yyyy) </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>To (dd-mm-yyyy) </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Training certificate {'\n'}number
            </Text>
            <Text style={styles.headings1}>Date (dd-mm-yyyy) </Text>
          </View>
        </View>
      </View>

      <MyFooter
        title={'82-0546E (1803-07)'}
        subtitle={'PROTECTED "A" WHEN COMPLETED'}
        text={'Page 2 of 2'}
      />
    </ScrollView>
  );
};

export default FarmD2;
