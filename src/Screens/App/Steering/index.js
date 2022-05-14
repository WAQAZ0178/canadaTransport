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
const Steering = props => {
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
      <MyHeader title={'STEERING TESTIMONIAL'} />
      <Text style={styles.copyText}>Skip</Text>
      <View style={styles.card}>
        <View style={styles.cardL}>
          <Text style={styles.headings}>Name and address of vessel owner</Text>
          <TextInput
            placeholder="Name and address of vessel owner"
            style={styles.inputs}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
        </View>
      </View>
      <Text style={styles.sentence}>
        I certify that the following is a full and true statement of the sea
        service performed under my supervision by:{' '}
      </Text>
      <View style={styles.card}>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Name</Text>
            <TextInput placeholder="Name" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>CDN Number</Text>
            <TextInput placeholder="CDN Number" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>On board (name of vessel)</Text>
            <TextInput placeholder="Name of vessel" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Port of registry</Text>
            <TextInput placeholder="Port of registry" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Official number</Text>
            <TextInput placeholder="Number" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Type of vessel</Text>
            <TextInput placeholder="Type of vessel" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Cargo</Text>
            <TextInput placeholder="Cargo" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Gross tonnage</Text>
            <TextInput placeholder="Gross tonnage" style={styles.input1} />
          </View>
        </View>
        {/* <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>
              Participation in transfer operations?
            </Text>
            <View style={{height: responsiveHeight(0.5)}} />
            <View style={styles.rowViewS}>
              <TouchableOpacity
                onPress={() => {
                  setCheck(true);
                }}
                style={[styles.rowViewS, {marginRight: responsiveWidth(5)}]}>
                <Icon
                  name={check ? 'radio-button-on' : 'radio-button-off'}
                  type="ionicon"
                  color={colors.black}
                  size={responsiveFontSize(2)}
                />
                <Text style={styles.labels}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setCheck(false);
                }}
                style={[styles.rowViewS, {marginRight: responsiveWidth(20)}]}>
                <Icon
                  name={!check ? 'radio-button-on' : 'radio-button-off'}
                  type="ionicon"
                  color={colors.black}
                  size={responsiveFontSize(2)}
                />
                <Text style={styles.labels}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
  
        </View> */}
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Voyage classification</Text>
            <TextInput placeholder="Voyage" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Rank and seniority</Text>
            <TextInput placeholder="Rank" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Date signed off (dd-mm-yyyy)</Text>
            <DateSelect1 value={date} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Date signed off (dd-mm-yyyy)</Text>
            <DateSelect1 value={date} />
          </View>
        </View>
      </View>
      <Text style={styles.sentence}>
        I certify that the above-named seafarer stood regular watches for a
        total of _______ hours at the wheel serving under my command and I am
        satisfied that the seafarer is competent to steer a vessel.
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: responsiveWidth(0.3),
            backgroundColor: colors.lightsilver,
            width: responsiveWidth(35),
            marginTop: responsiveHeight(6),
            marginLeft: responsiveWidth(8),
          }}
        />
        <Text style={[styles.headings, {marginTop: responsiveHeight(6)}]}>
          {'\t\t'}
          On{'\t\t'}
        </Text>
        <View
          style={{
            height: responsiveWidth(0.3),
            backgroundColor: colors.lightsilver,
            width: responsiveWidth(35),
            marginTop: responsiveHeight(6),
          }}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: responsiveWidth(37),
            marginTop: responsiveHeight(2),
            marginLeft: responsiveWidth(8),
          }}>
          <Text
            style={[
              styles.headings,
              {textAlign: 'center', fontSize: responsiveFontSize(1.2)},
            ]}>
            Signature of master
          </Text>
        </View>
        <View
          style={{
            width: responsiveWidth(37),
            marginTop: responsiveHeight(2),
            marginLeft: responsiveWidth(8),
          }}>
          <Text
            style={[
              styles.headings,
              {textAlign: 'center', fontSize: responsiveFontSize(1.2)},
            ]}>
            Date (dd-mm-yyyy)
          </Text>
        </View>
      </View>
      <MyFooter title={'82-0546E (1803-07)'} />
    </ScrollView>
  );
};

export default Steering;
