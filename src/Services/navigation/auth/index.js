import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Signup} from '../../../Screens/index';

const AuthStack = createStackNavigator();
const AuthScreens = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}
      initialRouteName="Splash">
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};
export default AuthScreens;
