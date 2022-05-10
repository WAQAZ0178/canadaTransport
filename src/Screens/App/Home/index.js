import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './style';
import {MyHeader} from '../../../Components';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const Home = props => {
  return (
    <View style={styles.container}>
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
            <TextInput placeholder="Participation" style={styles.input1} />
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
      </View>
    </View>
  );
};

export default Home;
