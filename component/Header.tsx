import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../constants';
import {SIZES} from '../temp/SIZES';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({right}: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={{ backgroundColor: COLORS.Brown, height: 35, justifyContent: 'center', }}>
      <StatusBar backgroundColor={COLORS.Brown}/>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Ionicons name='chevron-back-outline' size={20} color={COLORS.white} style={{marginStart:10}} />
			</TouchableOpacity>
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          flexDirection: 'row',
          backgroundColor: COLORS.white,
					justifyContent:'center'
        }}>
        <Text style={{fontSize: 18, color: COLORS.white,marginTop:-25}}>Customer</Text>
        <StatusBar backgroundColor={COLORS.Brown} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Header;
