import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../temp/colors';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import BookingScreen from '../screen/BookingScreen';
import SettingScreen from '../screen/SettingScreen';
import ResportScreen from '../screen/ResportScreen';
import CustomerScreen from '../screen/CustomerScreen';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
				tabBarStyle: styles.tabBar,
				tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ props }: any) => (
						<View style={{justifyContent:'center',alignItems:'center'}}>
							<Icon name='home' color={COLORS.white} size={25} />
							<Text style={{color:COLORS.white,textAlign:'center'}}>Home</Text>
						</View>
					)
				}}
			/>
			<Tab.Screen name="ServerScreen" component={ResportScreen}
				options={{
					tabBarIcon: ({ props }: any) => (
						<View style={{justifyContent:'center',alignItems:'center'}}>
							<Icon name="clock-time-two-outline" color={COLORS.white} size={25} />
							<Text style={{color:COLORS.white,textAlign:'center'}}>Server</Text>
						</View>
					)
				}}
			/>
		<Tab.Screen name="add" component={CustomerScreen}
				options={{
					tabBarIcon: ({ props }: any) => (
						<View style={{
							height: 60,
							width: 60,
							borderWidth:3,
							justifyContent: 'center',
							borderColor: COLORS.Black,
							backgroundColor: COLORS.white,
							alignItems: 'center',
							borderRadius: 30,
							top:-20
						}}>
							<MaterialIcons name="add" size={25} color={COLORS.Black} />
					</View>
					)
				}}
			/>
			<Tab.Screen name="BookingScreen" component={BookingScreen} 
				options={{
					tabBarIcon: ({ props }: any) => (
						<View style={{justifyContent:'center',alignItems:'center'}}>
							<Icon name="book-open-outline" color={COLORS.white} size={25} />
							<Text style={{color:COLORS.white,textAlign:'center'}}>Booking</Text>
						</View>
					)
				}}
			/>
			<Tab.Screen name="SettingScreen" component={SettingScreen}
				options={{
					tabBarIcon: ({ props }: any) => (
						<View style={{justifyContent:'center',alignItems:'center'}}>
							<Ionicons name="settings-sharp" color={COLORS.white} size={25} />
							<Text style={{color:COLORS.white,textAlign:'center'}}>Setting</Text>
						</View>
					)
				}}
			/>
    </Tab.Navigator>
	
  );
};
const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    borderTopWidth: 1,
    elevation: 0,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		backgroundColor:COLORS.Black
  },
});
export default BottomNavigation;
