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
import {
  DateSelect,
  DateSelect1,
  DateSelect2,
} from '../../../Components/dateTimePicker';
const ApplicationScreen = props => {
  const [check, setCheck] = useState(false);
  const [date, setDate] = useState('26-03-22');
  const [date1, setDate1] = useState('26-03-22');
  const [date2, setDate2] = useState('26-03-22');
  const [language, setlanguage] = useState([
    {
      title: 'English',
      flag: false,
    },
    {
      title: 'French',
      flag: false,
    },
  ]);
  const [data, setData] = useState([
    {
      title: 'Nautical Officer',
      flag: false,
    },
    {
      title: 'Engineer Officer',
      flag: false,
    },
    {
      title: 'Other',
      flag: false,
    },
    // {
    //   title: 'Bridge watch rating',
    //   flag: false,
    // },
    // {
    //   title: 'Junior officer to a mate in charge of the deck watch',
    //   flag: false,
    // },
    // {
    //   title: 'Ordinary seaman',
    //   flag: false,
    // },
    // {
    //   title: 'Other (specify) : Specify...',
    //   flag: false,
    // },
  ]);
  return (
    <ScrollView style={styles.container}>
      <MyHeader
        title={'APPLICATION TO BE EXAMINED'}
        subtitle={'FOR A CERTIFICATE OR ENDORSEMENT'}
      />
      <Text style={styles.sentence}>
        The personal information provided on this form is collected under the
        authority of Section 16 of the Canada Shipping Act, 2001. This
        information is required for a Seafarer to obtain an assessment of their
        qualifications against the requirements of the Marine Personnel
        Regulations. The information is then used to issue a Canadian Maritime
        Document and other marine documents in order to comply with the Canada
        Shipping Act, 2001 and the Marine Personnel Regulations. The information
        collected is described in Personal Information Bank entitled Seafarer's
        Certificates and Documents (TC PPU 030). Under the provisions of the
        Privacy Act, individuals have the right of access to, correction of and
        protection of their personal information. Instructions for obtaining
        your personal information are provided in{' '}
        <Text style={{color: colors.royalBlue}}>Info Source.</Text>
      </Text>
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
        <View style={{height: responsiveHeight(2)}} />
        <View style={styles.cardL}>
          <Text style={styles.headings}>Select</Text>
          <FlatList
            data={data}
            numColumns={3}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    let arr = [...data];
                    arr.map(item => {
                      item.flag = false;
                      arr[index].flag = true;
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
      <View style={styles.card}>
        <Text
          style={[
            styles.headings,
            {
              marginLeft: responsiveWidth(3),
              marginBottom: responsiveHeight(1),
            },
          ]}>
          TO BE COMPLETED BY APPLICANT
        </Text>

        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Surname</Text>
            <TextInput placeholder="Surname" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Given name(s)</Text>
            <TextInput placeholder="Given name(s)" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Initial(s)</Text>
            <TextInput placeholder="Initial(s)" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>CDN number</Text>
            <TextInput placeholder="CDN number" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Date of birth (dd-mm-yyyy)</Text>
            <DateSelect1
              //   getDate={date => {
              //     setDate(date);
              //   }}
              value={date}
            />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Nationality</Text>
            <TextInput placeholder="Nationality" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Language preference</Text>
            <FlatList
              data={language}
              numColumns={3}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      let arr = [...language];
                      arr.map(item => {
                        item.flag = false;
                        arr[index].flag = true;
                      });
                      setlanguage(arr);
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
          <View style={styles.cardS}>
            <Text style={styles.headings}>Mailing Address</Text>
            <TextInput placeholder="Mailing Address" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Apartment/unit number</Text>
            <TextInput
              placeholder="Apartment/unit number"
              style={styles.input1}
            />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Street number</Text>
            <TextInput placeholder="Street number" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Street</Text>
            <TextInput placeholder="Street" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Post office box</Text>
            <TextInput placeholder="Post office box" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>City</Text>
            <TextInput placeholder="City" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Province</Text>
            <TextInput placeholder="Province" style={styles.input1} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Postal code</Text>
            <TextInput placeholder="Postal code" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Country</Text>
            <TextInput placeholder="Country" style={styles.input1} />
          </View>
        </View>
        <View style={styles.cardL}>
          <Text style={styles.headings}>
            CERTIFICATE OR ENDORSEMENT APPLIED FOR:
          </Text>
          <TextInput
            placeholder="CERTIFICATE OR ENDORSEMENT APPLIED FOR:"
            style={styles.input1}
          />
        </View>
        <View style={{height: responsiveHeight(2)}} />
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Examination held at</Text>
            <TextInput
              placeholder="Examination held at"
              style={styles.input1}
            />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>
              During the week commencing on Monday
            </Text>
            <DateSelect1 value={date} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text
              style={[styles.headings, {fontSize: responsiveFontSize(1.2)}]}>
              Exam – Date (dd-mm-yyyy){' '}
            </Text>
            <DateSelect1 value={date} />
          </View>
          <View style={styles.cardS}>
            <Text
              style={[styles.headings, {fontSize: responsiveFontSize(1.2)}]}>
              Exam – Date (dd-mm-yyyy)
            </Text>
            <DateSelect1 value={date} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text
              style={[styles.headings, {fontSize: responsiveFontSize(1.2)}]}>
              Exam – Date (dd-mm-yyyy){' '}
            </Text>
            <DateSelect1 value={date} />
          </View>
          <View style={styles.cardS}>
            <Text
              style={[styles.headings, {fontSize: responsiveFontSize(1.2)}]}>
              Exam – Date (dd-mm-yyyy)
            </Text>
            <DateSelect1 value={date} />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text
              style={[styles.headings, {fontSize: responsiveFontSize(1.2)}]}>
              Exam – Date (dd-mm-yyyy){' '}
            </Text>
            <DateSelect1 value={date} />
          </View>
          <View style={styles.cardS}>
            <Text
              style={[styles.headings, {fontSize: responsiveFontSize(1.2)}]}>
              Exam – Date (dd-mm-yyyy)
            </Text>
            <DateSelect1 value={date} />
          </View>
        </View>
      </View>
      <View style={{height: responsiveHeight(2)}} />
      <View style={styles.card}>
        <Text style={[styles.headings, {marginLeft: responsiveWidth(3)}]}>
          DECLARATION OF APPLICANT
        </Text>
        <Text style={[styles.sentence, {width: responsiveWidth(84)}]}>
          I hereby declare that to the best of my knowledge and belief the
          particulars contained in on this form and in the accompanying
          Statement of Qualifying Service are correct and that the supporting
          documents and testimonials submitted with this form are true and
          genuine documents given and signed by the persons whose names appear
          on them.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              marginLeft: responsiveWidth(0.5),
              width: responsiveWidth(26),
              borderBottomWidth: responsiveWidth(0.3),
              borderColor: colors.lighttexts,
            }}
          />
          <View
            style={{
              // marginLeft: responsiveWidth(7),
              marginTop: responsiveHeight(4),
            }}>
            <DateSelect2
              getDate={date => {
                setDate2(date);
              }}
              value={date2}
              datePickerStyle={{width: responsiveWidth(26)}}
            />
          </View>
          <View
            style={{
              marginLeft: responsiveWidth(0.5),
              width: responsiveWidth(26),
              borderBottomWidth: responsiveWidth(0.3),
              borderColor: colors.lighttexts,
            }}
          />
          <View />
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.bottmTwext}>Location</Text>
          <Text style={styles.bottmTwext}>Date (dd-mm-yyyy)</Text>
          <Text style={styles.bottmTwext}>Signature of applicant</Text>
        </View>
        <Text
          style={[
            styles.sentence,
            {width: responsiveWidth(84), marginTop: responsiveHeight(0.5)},
          ]}>
          I hereby certify that the above particulars are correct and that the
          applicant has produced all necessary original documents and
          testimonials in support of this Application.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              marginLeft: responsiveWidth(0.5),
              width: responsiveWidth(26),
              borderBottomWidth: responsiveWidth(0.3),
              borderColor: colors.lighttexts,
            }}
          />
          <View
            style={{
              // marginLeft: responsiveWidth(7),
              marginTop: responsiveHeight(4),
            }}>
            <DateSelect2
              getDate={date => {
                setDate1(date);
              }}
              value={date1}
              datePickerStyle={{width: responsiveWidth(26)}}
            />
          </View>
          <View
            style={{
              marginLeft: responsiveWidth(0.5),
              width: responsiveWidth(26),
              borderBottomWidth: responsiveWidth(0.3),
              borderColor: colors.lighttexts,
            }}
          />
          <View />
        </View>
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.bottmTwext}>Location</Text>
          <Text style={styles.bottmTwext}>Date (dd-mm-yyyy)</Text>
          <Text style={styles.bottmTwext}>Signature of applicant</Text>
        </View>
      </View>
      <MyFooter
        title={'82-0546E (1803-07)'}
        subtitle={'PROTECTED "A" WHEN COMPLETED'}
        text={'Page 1 of 2'}
        continuePress={() => {
          props.navigation.navigate('FarmD2');
        }}
      />
    </ScrollView>
  );
};

export default ApplicationScreen;
