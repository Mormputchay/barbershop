import React from 'react'
import { View, TouchableOpacity, StyleSheet, Animated, Modal } from 'react-native'
import { COLORS } from '../constants';
const ModelPopupLogout = ({visible, children}: any) => {
	const [showModal, setShowModal] = React.useState(visible);
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
			<Animated.View style={styles.modalBackGround}>
				<Animated.View
					style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
					{children}
				</Animated.View>
			</Animated.View>
		</Modal>
	);
};
const styles = StyleSheet.create({
	modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 15,
  },
})
export default ModelPopupLogout
