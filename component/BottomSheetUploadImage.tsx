import React, {useState} from 'react'
import { View , StyleSheet,Animated,Modal} from 'react-native'
import { COLORS } from '../constants'

const BottomSheetuploadimage = ({ visible, children }: any) => {
	const [showModal, setShowModal] = React.useState(visible)
	const scaleValue = React.useRef(new Animated.Value(0)).current;
	React.useEffect(() => {
		toggleModel();
	}, [visible]);
	const toggleModel = () => {
		if (visible) {
			setShowModal(true);
			Animated.spring(scaleValue, {
				toValue: 1,
				//duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			setTimeout(() => setShowModal(false), 200);
			setShowModal(false);
			Animated.timing(scaleValue, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	};
	return (
		<Modal transparent visible={showModal}>
			<View style={styles.modalBackGround}>
			<Animated.View style={[styles.modalContainer,{transform:[{scale : scaleValue}]}]}>{children}</Animated.View>
			</View>
		</Modal>
	)
}
const styles = StyleSheet.create({
	modalBackGround: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.3)',
		justifyContent: 'flex-end',
		alignItems:'flex-end'
	},
	modalContainer: {
		width:'100%',
		position: 'absolute',
		backgroundColor: COLORS.light,
		top: 500,
		bottom: 0,
		left: 0,
		right: 0,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		elevation:5
	}
})
export default BottomSheetuploadimage