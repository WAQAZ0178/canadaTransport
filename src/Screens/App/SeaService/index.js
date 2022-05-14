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
const SeaService = props => {
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
        title={'EXN 2 - STATEMENT OF SEA'}
        subtitle={'SERVICE FOR A CERTIFICATE'}
      />
      <View style={{height: responsiveHeight(2)}} />
      <View style={styles.card}>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Name of Applicant</Text>
            <TextInput
              placeholder="John Smith"
              style={styles.input1}
              placeholderTextColor={colors.royalBlue}
            />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Surname</Text>
            <TextInput
              placeholder="Smith"
              style={styles.input1}
              placeholderTextColor={colors.royalBlue}
            />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Given Names</Text>
            <TextInput
              placeholder="John, Smith"
              style={styles.input1}
              placeholderTextColor={colors.royalBlue}
            />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>CDN Number</Text>
            <TextInput
              placeholder="250-555-0199"
              style={styles.input1}
              placeholderTextColor={colors.royalBlue}
            />
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Certificate applied for</Text>
            <TextInput
              placeholder="Vessel"
              style={styles.input1}
              placeholderTextColor={colors.royalBlue}
            />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>
              Certificate held -Date (dd-mm-yyyy)
            </Text>
            <TextInput
              placeholder="10-05-2022"
              style={styles.input1}
              placeholderTextColor={colors.royalBlue}
            />
          </View>
        </View>
      </View>

      <View style={{height: responsiveHeight(2)}} />
      <View style={styles.card}>
        <Text
          style={[
            styles.sentence,
            {
              marginLeft: responsiveWidth(8),
              marginBottom: responsiveHeight(0.5),
            },
          ]}>
          Blocks to complete
        </Text>
        <View style={styles.cardL}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: responsiveHeight(0.5),
            }}>
            <Text
              style={[
                [
                  styles.headings,
                  {
                    width: responsiveWidth(40),
                    fontSize: responsiveFontSize(1.3),
                  },
                ],
              ]}>
              {'\u2022'}{' '}
              {'\tDeck Department \n\t\tA, B, C, D, G, H, I, J, K, L, M'}
            </Text>
            <Text
              style={[
                [
                  styles.headings,
                  {
                    width: responsiveWidth(40),
                    fontSize: responsiveFontSize(1.3),
                    // marginTop: responsiveHeight(2),
                  },
                ],
              ]}>
              {'\u2022'}{' '}
              {'\tEngine Department \n\t\tA, B, C, D, E, F, I, J, K, L, M'}
            </Text>
          </View>
          <Text
            style={[
              [
                styles.headings,
                {
                  width: responsiveWidth(44),
                  fontSize: responsiveFontSize(1.3),
                  marginBottom: responsiveHeight(1),
                  marginTop: responsiveHeight(2),
                },
              ],
            ]}>
            {'\u2022'} {'\tStudent - workshop  A, B, K, L'}
          </Text>
        </View>
      </View>
      <View style={{height: responsiveHeight(2)}} />
      <View style={styles.card}>
        <View style={styles.cardL}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>Rank or Rating </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Vessel / School / Workhop{' '}
            </Text>
            <Text style={styles.headings1}>Official number </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>A </Text>
            <Text style={styles.headings1}>B </Text>
            <Text style={styles.headings1}>c </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Rank or Rating </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Vessel / School / Workhop{' '}
            </Text>
            <Text style={styles.headings2}>Official number </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Rank or Rating </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Vessel / School / Workhop{' '}
            </Text>
            <Text style={styles.headings2}>Official number </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Rank or Rating </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Vessel / School / Workhop{' '}
            </Text>
            <Text style={styles.headings2}>Official number </Text>
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
            <Text style={styles.headings1}>Type of vessel </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Main Engine Power (KW)
            </Text>
            <Text style={styles.headings1}>Propulsion moteur/vapeur </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>D </Text>
            <Text style={styles.headings1}>E </Text>
            <Text style={styles.headings1}>F </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Type of vessel </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Main Engine Power (KW)
            </Text>
            <Text style={styles.headings2}>Propulsion </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Type of vessel </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Main Engine Power (KW)
            </Text>
            <Text style={styles.headings2}>Propulsion </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Type of vessel </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Main Engine Power (KW)
            </Text>
            <Text style={styles.headings2}>Propulsion </Text>
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
            <Text style={styles.headings1}>Gross tonnage </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Class of voyage
            </Text>
            <Text style={styles.headings1}>Port of Registry</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>G </Text>
            <Text style={styles.headings1}>H </Text>
            <Text style={styles.headings1}>I </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Gross tonnage </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Class of voyage
            </Text>
            <Text style={styles.headings2}>Port of Registry </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Gross tonnage </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Class of voyage
            </Text>
            <Text style={styles.headings2}>Port of Registry </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Gross tonnage</Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Class of voyage
            </Text>
            <Text style={styles.headings2}>Port of Registry </Text>
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
            <Text style={styles.headings1}>8 or 12 hours/day </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              Date of engagement
            </Text>
            <Text style={styles.headings1}>Date of Discharge </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>J </Text>
            <Text style={styles.headings1}>K </Text>
            <Text style={styles.headings1}>L </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>8 or 12 hours/day </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Date of engagement
            </Text>
            <Text style={styles.headings2}>Date of Discharge </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>8 or 12 hours/day</Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Date of engagement
            </Text>
            <Text style={styles.headings2}>Date of Discharge </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>8 or 12 hours/day </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Date of engagement
            </Text>
            <Text style={styles.headings2}>Date of Discharge </Text>
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
            <Text style={styles.headings1}>Days at sea </Text>
            <Text style={[styles.headings1, {width: responsiveWidth(34)}]}>
              For official use Final Rate
            </Text>
            <Text style={styles.headings1}>
              For official use Qualifying service{' '}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings1}>M </Text>
            <Text style={styles.headings1}>{''} </Text>
            <Text style={styles.headings1}>{''} </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Days at sea </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Final Rate
            </Text>
            <Text style={styles.headings2}>Qualifying service </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Days at sea </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Final Rate
            </Text>
            <Text style={styles.headings2}>Qualifying service </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.headings2}>Days at sea </Text>
            <Text style={[styles.headings2, {width: responsiveWidth(34)}]}>
              Final Rate
            </Text>
            <Text style={styles.headings2}>Qualifying service </Text>
          </View>
        </View>
        <View style={{height: responsiveHeight(2)}} />
        <View style={styles.rowView}>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Remarks</Text>
            <TextInput placeholder="Remarks" style={styles.input1} />
          </View>
          <View style={styles.cardS}>
            <Text style={styles.headings}>Total</Text>
            <TextInput placeholder="Total" style={styles.input1} />
          </View>
        </View>
      </View>
      <Text style={[styles.sentence, {width: responsiveWidth(90)}]}>
        I certify that, to the best of my knowledge, the above entries made by
        me are true and complete. I understand that if any of this information
        is found to be incorrect, my application for examination / evaluation of
        service may be rejected.
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
        <View
          style={{
            height: responsiveWidth(0.3),
            backgroundColor: colors.lightsilver,
            width: responsiveWidth(35),
            marginTop: responsiveHeight(6),
            marginLeft: responsiveWidth(8),
          }}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: responsiveWidth(35),
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
        <View
          style={{
            width: responsiveWidth(35),
            marginTop: responsiveHeight(2),
            marginLeft: responsiveWidth(8),
          }}>
          <Text
            style={[
              styles.headings,
              {textAlign: 'center', fontSize: responsiveFontSize(1.2)},
            ]}>
            Signature of Applicant
          </Text>
        </View>
      </View>
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
        <View
          style={{
            height: responsiveWidth(0.3),
            backgroundColor: colors.lightsilver,
            width: responsiveWidth(35),
            marginTop: responsiveHeight(6),
            marginLeft: responsiveWidth(8),
          }}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: responsiveWidth(35),
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
        <View
          style={{
            width: responsiveWidth(35),
            marginTop: responsiveHeight(2),
            marginLeft: responsiveWidth(8),
          }}>
          <Text
            style={[
              styles.headings,
              {textAlign: 'center', fontSize: responsiveFontSize(1.2)},
            ]}>
            Approved by
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: responsiveWidth(10),
          marginTop: responsiveHeight(3),
        }}>
        <Text style={styles.headings}>Page </Text>
        <View
          style={{
            height: responsiveWidth(0.3),
            backgroundColor: colors.lightsilver,
            width: responsiveWidth(10),
            marginTop: responsiveHeight(1.5),
          }}
        />
        <Text style={styles.headings}> of </Text>
        <View
          style={{
            height: responsiveWidth(0.3),
            backgroundColor: colors.lightsilver,
            width: responsiveWidth(10),
            marginTop: responsiveHeight(1.5),
          }}
        />
      </View>
      <MyFooter
        title={'82-0546E (1803-07)'}
        subtitle={'PROTECTED "A" WHEN COMPLETED'}
      />
    </ScrollView>
  );
};

export default SeaService;
