import React from 'react'
import { Text, View, ScrollView, StatusBar , TouchableOpacity,Image} from 'react-native'
import {SIZES} from '../temp/SIZES';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { image} from '../constants';
import {COLORS} from '../constants';

const NewNotification = () => {
	const navigation: any = useNavigation();
	function renderHearch() {
    return (
      <View
        style={{
          backgroundColor: COLORS.Brown,
          height: 35,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={20}
            color={COLORS.white}
            style={{marginStart: 10}}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, color: COLORS.white, marginTop: -25}}>
            Notification
          </Text>
        </View>
      </View>
    );
	}
	function renderNotifications() {
		return (
			<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
				<Image source={image.notification} style={{ width: 90, height: 90 }} />
				<Text style={{marginTop:10,fontSize:20,fontWeight:'bold',color:COLORS.Black}}>No Notification Yes!</Text>
				<Text style={{marginTop:10,fontSize:17,color:COLORS.gray}}>We 'll notify when something arrives</Text>
			</View>
		)
	}
	return (
		<ScrollView style={{flex: 1, backgroundColor: COLORS.Brown}}>
		{renderHearch()}
		<StatusBar backgroundColor={COLORS.Brown} />
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
				marginTop: 10,
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
				height: 980,
			}}>
				{renderNotifications()}
		</View>
	</ScrollView>
	)
}
export default NewNotification
