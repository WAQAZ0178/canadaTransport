import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import Auth from './auth';

import {createStackNavigator} from '@react-navigation/stack';
const AppStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <>
        <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        <AppStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Auth">
          <AppStack.Screen name="App" component={App} />
          <AppStack.Screen name="Auth" component={Auth} />
        </AppStack.Navigator>
      </>
    </NavigationContainer>
  );
};

export default AppNavigation;
