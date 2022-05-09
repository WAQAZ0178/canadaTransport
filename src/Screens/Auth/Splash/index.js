import React, {useEffect, useState} from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import {styles} from './style';
// import {appImages} from '../../../Services/index';
// import {MyButton} from '../../../Components';
const Splash = props => {
  const [email, setEmail] = useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      {/* <TextInput />
      <MyButton title={'login'} /> */}
      <Text>Chika boom</Text>
    </View>
  );
};

export default Splash;
