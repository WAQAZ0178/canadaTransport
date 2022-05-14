import React, {useEffect, useState} from 'react';
import {
  Home,
  SeaService,
  Steering,
  FarmD2,
  ApplicationScreen,
} from '../../../Screens/';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import CustomeDrawar from '../Drawer';

const App = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: '#c6cbef',
          //   width: 380,
        },
      }}
      drawerContent={props => <CustomeDrawar {...props} />}
      initialRouteName="Home">
      <Drawer.Screen name={'Home'} component={Home} />
      <Drawer.Screen name={'SeaService'} component={SeaService} />
      <Drawer.Screen name={'Steering'} component={Steering} />
      <Drawer.Screen name={'FarmD2'} component={FarmD2} />
      <Drawer.Screen name={'ApplicationScreen'} component={ApplicationScreen} />
    </Drawer.Navigator>
  );
};

export default App;
