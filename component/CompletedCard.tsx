import React ,{ useState } from 'react'
import { View, Text, Image,StyleSheet, TouchableOpacity, Modal , Animated} from 'react-native'
import { COLORS } from '../constants'
import Feather from 'react-native-vector-icons/Feather'
import {image} from '../constants'
import ModalPopupReport from './ModalPopupReport'
const CompletedCard = ({ completed }: any) => {
	const [visible, setVisible] = React.useState(false);
	return (
		<TouchableOpacity style={styles.cartCard} onPress={()=>setVisible(true)}>
			<ModalPopupReport visible={visible}>
				<View style={{alignItems:'center'}}>
					<View style={styles.header}>
					<Image
                source={image.storytelling}
                style={{width: 110, height: 110}}
                />
                <Text style={{textAlign: 'center', fontSize: 18,fontWeight:'bold',color:COLORS.Black,marginTop:14}}>
                  Do you want to void Customer Report?
						</Text>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableOpacity
                  style={styles.btnYes}
                  onPress={() => setVisible(false)}>
                  <Text style={{color: COLORS.white, fontSize: 18}}>Yes</Text>
							</TouchableOpacity>
							<TouchableOpacity
                  style={styles.btnNO}
                  onPress={() => setVisible(true)}>
                  <Text style={{color: COLORS.Black, fontSize: 18}}>NO</Text>
							</TouchableOpacity>
						</View>
						</View>
				</View>
			</ModalPopupReport>
			<Image source={completed.image} style={styles.imgContainer} />
			<View style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}>
				<Text style={styles.textTitle}>{completed.Name}</Text>
				<Text style={styles.textsubtitle}>{completed.Phone}</Text>
				<Text style={styles.textprice}>${completed.Point}</Text>
				<View style={{alignItems:'center',marginTop:-75,alignSelf:'flex-end'}}>
					<Feather name='more-vertical' size={23} color={COLORS.Black} style={{left:35}} />
					<View style={styles.textBtn}>
					<Text style={{color:COLORS.green,textAlign:'center',fontSize:15}}>Completed</Text>
				</View>
				</View>
			</View>
		</TouchableOpacity>
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
		borderRadius: 40 
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
	},
	textBtn: {
		backgroundColor: '#90EE90',
		width: 100,
		borderBottomRightRadius: 18,
		borderTopLeftRadius: 18,
		height: 41,
		top: 27,
		left:12,
		justifyContent: 'center'
	},
  header: {
    justifyContent: 'center',
    alignItems: 'center',
	},
	btnYes: {
		backgroundColor: COLORS.gray,
		marginTop: 10,
		width: 100,
		justifyContent: 'center',
		alignItems: 'center',
		height: 35,
		borderRadius:20
	},
	btnNO: {
		backgroundColor: COLORS.white,
		marginStart: 10,
		justifyContent: 'center',
		alignItems: 'center',
		height: 35,
		width:100,
		borderColor: COLORS.Black,
		borderWidth: 2,
		marginTop: 10,
		borderRadius:20
	}
})
export default CompletedCard
