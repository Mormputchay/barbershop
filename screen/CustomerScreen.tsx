import React from 'react'
import {View, Text,ScrollView,Image,TouchableOpacity,StyleSheet,FlatList,TextInput,StatusBar,SafeAreaView} from 'react-native'
import { COLORS,} from '../constants'
import Header from '../component/Header'
import image from '../constants/image';
import Icon from 'react-native-vector-icons/AntDesign';
import customer from '../constants/customer'
import CustomerCard from '../component/CustomerCard'
const CustomerScreen = () => {
	function renderHearch() {
		return (
			<View style={{flex:1}}>
				<Header />
			</View>
		)
	}
	function renderSearch() {
		return (
			<View
			style={{marginTop: 22, flexDirection: 'row', justifyContent: 'center'}}>
			<View style={styles.inputContainer}>
				<Image
					source={image.country}
					style={{width: 18, height: 18, marginStart: 15}}
				/>
				<Text style={{ marginStart: 15 }}>+855</Text>
				<Icon name = 'down'/>
				<TextInput
						placeholder="Enter your mobile number"
						placeholderTextColor={COLORS.gray}
					style={{ paddingStart: 13, fontSize: 14 }}
						keyboardType="numeric"
					/>
			</View>
		</View>
		)
	}
	function renderCustomer() {
		return (
			<ScrollView showsVerticalScrollIndicator={true}>
				<FlatList 
					data={customer}
					//vertical 
					pagingEnabled
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <CustomerCard customer={item} />
					}
				/>
			</ScrollView>
		)
	}
	return (
		<ScrollView style={{ backgroundColor: COLORS.white}} showsVerticalScrollIndicator={false}>
			{renderHearch()}
			<View style={{ flex: 1, backgroundColor: COLORS.white,marginTop:10, borderTopLeftRadius: 20,height:800,borderTopRightRadius:20}}>
				{renderSearch()}
				{renderCustomer()}
			</View>
		</ScrollView>
	)
}
const styles = StyleSheet.create({
	screen:{
		borderTopEndRadius: 25,
		elevation: 4,
		borderTopRightRadius: 25,
		position: 'absolute',
		backgroundColor:COLORS.white
	},
	inputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 25,
    marginEnd: 25,
	},
})
export default CustomerScreen
