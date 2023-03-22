import React ,{ useEffect, useRef, useState} from "react";
import { View, Animated, Modal, StyleSheet } from "react-native";
import { COLORS } from "../constants";
const ModelPopUpFailPassword = ({ visible, children }: any) => {
	const [showModal, setShowModelPassword] = React.useState(visible)
	const scaleValue = React.useRef(new Animated.Value(0)).current;
	React.useEffect(() => {
		toggleModel()
	},[visible])
	const toggleModel = () => {
		if (visible) {
			setShowModelPassword(true)
		} else {
			setShowModelPassword(false)
		}
	}
	return (
		<Modal transparent visible={showModal}>
		<View style={styles.modalBackGround}>
				<View style={styles.modalContainer}>
					{children}
					</View>
			</View>
	</Modal>
	)
}
const styles = StyleSheet.create({
	modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
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
export default ModelPopUpFailPassword