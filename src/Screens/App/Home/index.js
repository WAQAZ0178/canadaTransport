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
const Home = props => {
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
      <Text style={styles.copyText}>*Copy 1</Text>
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
            <Text style={styles.headings}>Name of vessel</Text>
            <TextInput placeholder="Name of vessel" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Gross tonnage</Text>
            <TextInput placeholder="Gross tonnage" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Port of registry</Text>
            <TextInput placeholder="Port of registry" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Type of vessel</Text>
            <TextInput placeholder="Type of vessel" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Official number</Text>
            <TextInput placeholder="Official number" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>
              Cargoes carried during period of service
            </Text>
            <TextInput placeholder="Cargoes carried" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
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
          <View style={styles.cardS}>
            <Text style={styles.headings}>Voyage classification</Text>
            <TextInput placeholder="Voyage" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>
              Number of participations in emergency drills:
            </Text>
            <TextInput
              placeholder="Number of participations"
              style={styles.input1}
            />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Extreme ports of call</Text>
            <TextInput
              placeholder="Extreme ports of call"
              style={styles.input1}
            />
          </View>
        </View>
        <View style={styles.cardL}>
          <Text style={styles.headings}>
            Total amount of time, during the applicant's period of service, that
            the vessel was engaged on voyages outside the Great Lakes Basin and
            where the distance between extreme ports called at during those
            voyages is more than 500 nautical miles:{' '}
          </Text>
          <TextInput placeholder="Total Days" style={styles.input1} />
        </View>
        <View style={{height: responsiveHeight(2)}} />
        <View style={styles.cardL}>
          <Text style={styles.headings}>
            Total amount of time, during the applicant's period of service, that
            the vessel was engaged on voyages within polar waters:
          </Text>
          <TextInput placeholder="Total Days" style={styles.input1} />
        </View>
        <View style={{height: responsiveHeight(2)}} />
        <View style={styles.cardL}>
          <Text style={styles.headings}>
            Total amount of time, during the applicant's period of service, that
            the vessel was engaged on voyages within waters with acceptable ice
            conditions ¹ :
          </Text>
          <TextInput placeholder="Total Days" style={styles.input1} />
        </View>
        <View style={styles.rowView}>
          <DateSelect
            getDate={date => {
              setDate(date);
            }}
            value={date}
          />
          <DateSelect
            getDate={date => {
              setDate1(date);
            }}
            value={date1}
          />
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Rank and seniority</Text>
            <TextInput placeholder="Rank" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Number of days underway</Text>
            <TextInput placeholder="Days" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Number of days worked</Text>
            <TextInput placeholder="Days" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Watch 8h / 12h</Text>
            <TextInput placeholder="Watch" style={styles.input1} />
          </View>
        </View>
        <View style={styles.cardL}>
          <Text style={styles.headings}>
            Type of service (A separate testimonial should be used for each type
            of service)
          </Text>
          <FlatList
            data={data}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    let arr = [...data];
                    data.map(item => {
                      item.flag = false;
                      data[index].flag = true;
                    });
                    setData(arr);
                  }}
                  style={styles.rowViewF}>
                  <Icon
                    name={item.flag ? 'radio-button-on' : 'radio-button-off'}
                    type="ionicon"
                    color={colors.black}
                    size={responsiveFontSize(2)}
                  />
                  <Text style={styles.labels1}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <Text style={[styles.sentence, {marginLeft: responsiveWidth(5)}]}>
        Fitting out, laying up or overhauling
      </Text>
      <View style={{height: responsiveHeight(2)}} />
      <View style={styles.card}>
        <View style={styles.cardL}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: responsiveHeight(0.5),
            }}>
            <Text style={[styles.headings, {color: 'white'}]}>
              {'Commenced \n(dd-mm-yyyy)'}
            </Text>
            <Text style={styles.headings}>Fitting out</Text>
            <Text style={styles.headings}>Laying up</Text>
            <Text style={styles.headings}>Overhauling</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: responsiveHeight(0.5),
            }}>
            <Text style={styles.headings}>{'Commenced \n(dd-mm-yyyy)'}</Text>
            <DateSelect1
              //   getDate={date => {
              //     setDate(date);
              //   }}
              value={date}
            />
            <DateSelect1
              //   getDate={date => {
              //     setDate(date);
              //   }}
              value={date}
            />
            <DateSelect1
              //   getDate={date => {
              //     setDate(date);
              //   }}
              value={date}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: responsiveHeight(1),
            }}>
            <Text style={styles.headings}>{'Commenced \n(dd-mm-yyyy)'}</Text>
            <DateSelect1
              //   getDate={date => {
              //     setDate(date);
              //   }}
              value={date}
            />
            <DateSelect1
              //   getDate={date => {
              //     setDate(date);
              //   }}
              value={date}
            />
            <DateSelect1
              //   getDate={date => {
              //     setDate(date);
              //   }}
              value={date}
            />
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            height: responsiveWidth(0.3),
            backgroundColor: colors.lightsilver,
            width: responsiveWidth(40),
            marginTop: responsiveHeight(6),
            marginLeft: responsiveWidth(8),
          }}
        />
        <View
          style={{
            height: responsiveWidth(0.3),
            backgroundColor: colors.lightsilver,
            width: responsiveWidth(32),
            marginTop: responsiveHeight(6),
            marginLeft: responsiveWidth(10),
          }}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: responsiveWidth(50),
            marginTop: responsiveHeight(2),
            marginLeft: responsiveWidth(8),
          }}>
          <Text
            style={[
              styles.headings,
              {textAlign: 'center', fontSize: responsiveFontSize(1.2)},
            ]}>
            <Text style={{color: colors.greyText}}>PRINT NAME{'\n'}</Text>
            Signature of authorized representative
          </Text>
        </View>
        <View
          style={{
            width: responsiveWidth(32),
            marginTop: responsiveHeight(3),
            // marginLeft: responsiveWidth(10),
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
      <Text style={styles.sentence}>
        ¹ Acceptable ice conditions means: Ice
        <Text style={{fontFamily: fontFamily.regular}}>
          {' '}
          conditions that require the vessel to make manoeuvers to avoid
          concentrations of ice that might endanger the vessel or affect its
          progression.
        </Text>
      </Text>
      <MyFooter title={'82-0546E (1803-07)'} />
    </ScrollView>
  );
};

export default Home;
