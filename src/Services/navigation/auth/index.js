import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../../../Screens/index';

const AuthStack = createStackNavigator();
const AuthScreens = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}
      initialRouteName="Splash">
      <AuthStack.Screen name="Splash" component={Splash} />
    </AuthStack.Navigator>
  );
};
export default AuthScreens;
