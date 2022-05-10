import React, {useEffect, useState} from 'react';
import {Home} from '../../../Screens/';
import {Icon} from 'react-native-elements';
import {Text, View, Image, Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {appImages} from '../../../Services/utilities/assets';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const Drawer = createDrawerNavigator();
import CustomeDrawar from '../Drawer';

// import {colors} from '../..';
// import LinearGradient from 'react-native-linear-gradient';

// const MainApp = createStackNavigator();
// const tabBarHeight =
//   Platform.OS === 'android' ? responsiveHeight(12) : responsiveHeight(11);
// const HomeStack = createStackNavigator();
// const SearchStack = createStackNavigator();
// const ProfileStack = createStackNavigator();
// const NotificationStack = createStackNavigator();
// const AddStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();
// const MainApp = createStackNavigator();
// const HomeStackScreens = () => {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{headerShown: false, gestureEnabled: false}}
//       showLabel={false}
//       initialRouteName={'Home'}>
//       <HomeStack.Screen name={'Home'} component={Home} />
//     </HomeStack.Navigator>
//   );
// };
// const SearchStackScreens = () => {
//   return (
//     <SearchStack.Navigator
//       screenOptions={{headerShown: false, gestureEnabled: false}}
//       initialRouteName={'Search'}>
//       <SearchStack.Screen name={'Search'} component={Search} />
//     </SearchStack.Navigator>
//   );
// };
// const ProfileStackScreens = () => {
//   return (
//     <ProfileStack.Navigator
//       screenOptions={{headerShown: false, gestureEnabled: false}}
//       initialRouteName={'Profile'}>
//       <ProfileStack.Screen name={'Profile'} component={Profile} />
//     </ProfileStack.Navigator>
//   );
// };
// const NotificationStackScreens = () => {
//   return (
//     <NotificationStack.Navigator
//       screenOptions={{headerShown: false, gestureEnabled: false}}
//       initialRouteName={'Notification'}>
//       <NotificationStack.Screen
//         name={'Notification'}
//         component={Notification}
//       />
//     </NotificationStack.Navigator>
//   );
// };
// const AddStackScreens = () => {
//   return (
//     <AddStack.Navigator
//       screenOptions={{headerShown: false, gestureEnabled: false}}
//       initialRouteName={'Add'}>
//       <AddStack.Screen name={'Add'} component={Add} />
//     </AddStack.Navigator>
//   );
// };
// const MainTabScreens = props => {
//   const [isVisible, setIsVisible] = useState(true);

//   const keyboardWillShow = event => {
//     setIsVisible(false);
//   };

//   const keyboardWillHide = event => {
//     setIsVisible(true);
//   };
//   return (
//     <MainTab.Navigator
//       barStyle={{backgroundColor: 'white'}}
//       screenOptions={{
//         tabBarHideOnKeyboard: true,
//         headerShown: false,
//         activeTintColor: 'white',
//         inactiveTintColor: 'white',
//         allowFontScaling: true,
//         tabBarShowLabel: false,
//         gestureEnabled: false,
//         tabBarStyle: {
//           backgroundColor: 'white',
//           display: 'flex',
//           width: responsiveWidth(100),
//           alignSelf: 'center',
//           height: tabBarHeight,
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 2,
//           },
//           shadowOpacity: 0.25,
//           shadowRadius: 3.84,

//           elevation: 5,
//           borderTopLeftRadius: responsiveWidth(10),
//           borderTopRightRadius: responsiveWidth(10),
//           position: 'absolute',
//           paddingHorizontal: responsiveWidth(5),
//         },
//       }}
//       initialRouteName={'Home'}>
//       <MainTab.Screen
//         name={'Home'}
//         component={HomeStackScreens}
//         initialParams={{chk: false}}
//         options={() => ({
//           tabBarIcon: ({focused, color, size}) => {
//             return focused ? (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={appImages.home}
//                   style={{
//                     height: responsiveHeight(4),
//                     width: responsiveWidth(8),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </View>
//             ) : (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={appImages.home}
//                   style={{
//                     height: responsiveHeight(4),
//                     width: responsiveWidth(8),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </View>
//             );
//           },
//         })}
//       />

//       <MainTab.Screen
//         name={'Search'}
//         component={SearchStackScreens}
//         options={props => ({
//           tabBarIcon: ({focused, color, size}) => {
//             return focused ? (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={appImages.search}
//                   style={{
//                     height: responsiveFontSize(3.5),
//                     width: responsiveFontSize(3.5),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </View>
//             ) : (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={appImages.search}
//                   style={{
//                     height: responsiveFontSize(3.5),
//                     width: responsiveFontSize(3.5),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </View>
//             );
//           },
//         })}
//       />
//       <MainTab.Screen
//         name={'Add'}
//         component={AddStackScreens}
//         options={props => ({
//           tabBarIcon: ({focused, color, size}) => {
//             return focused ? (
//               <LinearGradient
//                 colors={[colors.gradient1, colors.gradient2]}
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: colors.newPinklight,
//                   height: responsiveHeight(7),
//                   width: responsiveWidth(14),
//                   borderRadius: responsiveWidth(4),
//                 }}>
//                 <Image
//                   source={appImages.addBtn}
//                   style={{
//                     height: responsiveFontSize(3),
//                     width: responsiveFontSize(3),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </LinearGradient>
//             ) : (
//               <LinearGradient
//                 colors={['rgb(222,90,200)', 'rgb(248,205,232)']}
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: colors.newPinklight,
//                   height: responsiveHeight(7),
//                   width: responsiveWidth(14),
//                   borderRadius: responsiveWidth(4),
//                 }}>
//                 <Image
//                   source={appImages.addBtn}
//                   style={{
//                     height: responsiveFontSize(3.5),
//                     width: responsiveFontSize(3.5),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </LinearGradient>
//             );
//           },
//         })}
//       />

//       <MainTab.Screen
//         name={'Notifications'}
//         component={NotificationStackScreens}
//         options={props => ({
//           tabBarIcon: ({focused, color, size}) => {
//             return focused ? (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={appImages.notification}
//                   style={{
//                     height: responsiveHeight(4),
//                     width: responsiveWidth(8),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </View>
//             ) : (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={appImages.notification}
//                   style={{
//                     height: responsiveHeight(4),
//                     width: responsiveWidth(8),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </View>
//             );
//           },
//         })}
//       />
//       <MainTab.Screen
//         name={'Profile'}
//         component={ProfileStackScreens}
//         options={props => ({
//           tabBarIcon: ({focused, color, size}) => {
//             return focused ? (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={appImages.profile}
//                   style={{
//                     height: responsiveHeight(4),
//                     width: responsiveWidth(8),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </View>
//             ) : (
//               <View
//                 style={{
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                 }}>
//                 <Image
//                   source={appImages.profile}
//                   style={{
//                     height: responsiveHeight(4),
//                     width: responsiveWidth(8),
//                     resizeMode: 'contain',
//                   }}
//                 />
//               </View>
//             );
//           },
//         })}
//       />
//     </MainTab.Navigator>
//   );
// };

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
    </Drawer.Navigator>
  );
};

export default App;
