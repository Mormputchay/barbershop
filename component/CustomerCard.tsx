import React from 'react'
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import customer from '../constants/customer'
import Feather from 'react-native-vector-icons/Feather'
import { COLORS } from '../constants'
const CustomerCard = ({customer}:any) => {
	return (
		<View style={styles.card}>
		<View style={{width:'90%',height:110,backgroundColor:COLORS.white,borderRadius:20,elevation:2}}>
				<View style={{ flexDirection: 'row' }}>
				<Image source={customer.image} style={styles.imgSize} />
				<View style={{marginTop:10,marginLeft:10}}>
					<Text style={styles.textName}> Name : {customer.Name}</Text>
					<Text style={styles.textPhone}>Phone : {customer.Phone}</Text>
						<Text style={styles.textPoint}>Point {customer.Point}</Text>
					</View>
					<View style={{alignItems:'flex-end',left:28,top:10}}>
						<Feather name='more-vertical' size={20} color={COLORS.Black} />
						</View>
				</View>
		</View>
	</View>
	)
}
const styles = StyleSheet.create({
	card: {
		width: '97%',
		marginVertical:12,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection:'row'
	},
	imgSize: {
		justifyContent: 'center',
		marginLeft: 13,
		marginTop:10,
		height: 90,
		width: 90,
		borderRadius:55
	},
	textName: {
		fontSize: 18,
		fontWeight: 'bold',
		color:COLORS.Black
	},
	textPhone: {
		fontSize: 15,
		color:COLORS.Black
	},
	textPoint: {
		marginTop: 10,
		fontSize: 18,
		color: COLORS.Yellow,
		fontWeight:'bold'
	},
})
export default CustomerCard