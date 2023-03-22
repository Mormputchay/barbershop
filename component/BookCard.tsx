import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS } from '../constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
const BookCard = ({book}:any) => {
	return (
<View style={styles.cartCard}>
			<Image source={book.img} style={styles.imgContainer} />
			<View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
				<Text style={styles.textTitle}>{book.title}</Text>
				<Text style={styles.textsubtitle}>{book.subtitle}</Text>
				<Text style={styles.textprice}>${book.price}</Text>
				<View style={{alignItems:'center',marginTop:-75,alignSelf:'flex-end'}}>
					<AntDesign name='checksquare' size={23} style={{marginLeft:45}} />
					<View style={{backgroundColor:COLORS.Black,top:50,width:78,left:12,borderBottomRightRadius:25,borderTopLeftRadius:25}}>
					<Text style={{color:COLORS.white,textAlign:'center'}}>Add</Text>
				</View>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	cartCard: {
		height: 110,
		elevation:4,
		borderRadius: 15,
		backgroundColor: COLORS.white,
		marginHorizontal: 20,
		marginVertical: 10,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	imgContainer: {
		height: 80,
		width: 80,
		borderRadius: 15
	},
	textTitle: {
		fontWeight: 'bold',
		fontSize: 18, color: 
		COLORS.Black 
	},
	textsubtitle: {
		fontSize: 16,
		color: COLORS.Black
	},
	textprice: {
		fontSize: 17,
		fontWeight: 'bold',
		color: COLORS.Yellow
	}

})
export default BookCard
