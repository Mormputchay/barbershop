import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardScreen from '../screen/OnBoardScreen';
import AutoScreen from '../screen/AutoScreen';
import FormNumberScreen from '../screen/FormNumberScreen';
import SentphoneNumber from '../screen/SentphoneNumber';
import RegisterScreen from '../screen/RegisterScreen';
import ForgetPassword from '../screen/ForgetPassword';
import SentphoneNumberforget from '../screen/SentphoneNumberforget';
import RestPassword from '../screen/RestPassword';
import BottomNavigation from './BottomNavigator';
import WalletScreen from '../screen/WalletScreen';
import NotificationScreen from '../screen/NotificationScreen';
import EditProfile from '../screen/EditProfile';
import AboutScreen from '../screen/AboutScreen';
import PrivacyScreen from '../screen/PrivacyScreen';
import NewNotification from '../screen/NewNotification';
import NewEditProfile from '../screen/NewEditProfile';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        //animation: 'fade_from_bottom',
      }}>
      <Stack.Screen component={OnBoardScreen} name="OnBoardScreen" />
      <Stack.Screen component={AutoScreen} name="AutoScreen" />
      <Stack.Screen component={FormNumberScreen} name="FormNumberScreen" />
      <Stack.Screen component={SentphoneNumber} name="SentphoneNumber" />
      <Stack.Screen component={RegisterScreen} name="RegisterScreen" />
      <Stack.Screen component={ForgetPassword} name="ForgetPassword" />
      <Stack.Screen component={SentphoneNumberforget} name="SentphoneNumberforget"/>
      <Stack.Screen component={RestPassword} name="RestPassword" />
      <Stack.Screen component={BottomNavigation} name="HomeScreen" />
      <Stack.Screen component={WalletScreen} name="WalletScreen" />
      <Stack.Screen component={NotificationScreen} name="NotificationScreen" />
      <Stack.Screen component={NewNotification} name="NewNotification"/>
      <Stack.Screen component={EditProfile} name="EditProfile" />
      <Stack.Screen component={NewEditProfile} name="NewEditProfile" />
      <Stack.Screen component={AboutScreen} name="AboutScreen" />
      <Stack.Screen component={PrivacyScreen} name="PrivacyScreen" />
    </Stack.Navigator>
  );
};
export default MainStack;
