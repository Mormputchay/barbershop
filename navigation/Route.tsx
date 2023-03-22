import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import { View, Text, StatusBar } from 'react-native'
import COLORS from '../temp/colors';
const Route = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
			<MainStack />
		</NavigationContainer>
	)
}
const styles = StyleSheet.create({});
export default Route