import React from 'react'
import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import product from '../constants/product'
import { COLORS } from '../constants'
const ProductCard = ({product}:any) => {
	return (
		<View style={styles.card}>
		<View style={{width:'90%',height:110,backgroundColor:COLORS.white,borderRadius:20,elevation:2}}>
			<View style={{flexDirection:'row'}}>
				<Image source={product.img} style={styles.imgSize} />
				<View style={{marginTop:10,marginLeft:10}}>
					<Text style={styles.texttitle}> {product.title}</Text>
					<Text style={styles.textsubtitle}> • {product.subtitle}</Text>
					<Text style={styles.price}>${product.price}</Text>
					</View>
					<View>
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
		borderRadius:15
	},
	texttitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color:COLORS.Black
	},
	textsubtitle: {
		fontSize: 16,
		color:COLORS.Black
	},
	price: {
		marginTop: 10,
		fontSize: 18,
		color: COLORS.Yellow,
		fontWeight:'bold'
	},

}) 

export default ProductCard
