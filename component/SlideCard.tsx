import React from "react";
import { View, Image, StyleSheet,Dimensions,Animated,ScrollView } from 'react-native'
import slides from "../constants/slides";
import COLORS from "../temp/colors";
const { width } = Dimensions.get('screen');
import SPACING from "../constants/SPACING";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../temp/SIZES";
const SlideCard = () => {
	const scrollx = new Animated.Value(0);

	function renderContent() {
		return (
			<Animated.ScrollView
				horizontal
				pagingEnabled
				scrollEnabled
				decelerationRate={0}
				scrollEventThrottle={16}
			snapToAlignment="center"
				showsHorizontalScrollIndicator={false}
				onScroll={Animated.event([
					{nativeEvent: {contentOffset : { x : scrollx}}},
				],{useNativeDriver:false})}
			style={{ flex: 1, backgroundColor: COLORS.white, marginTop: 10 }} 
		>
			{slides.map((item, index) => (
				<View key={index}
					style={{width}}
				>
					<View>
						<Image source={item.img} 
							resizeMode="cover"
							style={styles.imgContainer} />
					</View>
				</View>
			))}
		</Animated.ScrollView>
		)
	}
	function renderDots() {
		const dotPosition = Animated.divide(scrollx, SIZES.width);
		return (
			<View style={styles.dotContents}>
				{slides.map((item, index) => {
			   const opacity = dotPosition.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange: [0.3, 1, 0.3],
					extrapolate: "clamp"
			})
			const dotSize = dotPosition.interpolate({
					inputRange: [index - 1, index, index + 1],
					outputRange:[SIZES.base, 15, SIZES.base],
					extrapolate: "clamp"
			})
			const dotColor = dotPosition.interpolate({
				inputRange: [index - 1, index, index + 1],
				outputRange: [COLORS.light, COLORS.Yellow, COLORS.light],
				extrapolate: "clamp"
		})

					return (
						<Animated.View
							key={`dot-${index}`}
							//opacity={opacity}
							style={[styles.dots,{width:dotSize, height:dotSize, backgroundColor: dotColor}]}
						>
							</Animated.View>
					)
				})}
			</View>
		)
	}
	return (
		<SafeAreaView style={styles.container}>
			<View>
			{renderContent()}
			</View>
			<View style={styles.dotsRootContainer}>
				{renderDots()}
			</View>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
		justifyContent: "center",
		alignItems:"center"
	},
	imgContainer: {
		marginTop:10,
    width: width - SPACING,
    height: 200,
    borderRadius: 15,
    marginRight:15,
    overflow: 'hidden',
				position: 'relative',
				marginLeft:15
	},
	dots: {
		borderRadius: SIZES.radius,
		backgroundColor: COLORS.Yellow,
		marginHorizontal: SIZES.radius / 2,
		
	},
	dotContents: {
		flexDirection: "row",
		height: SIZES.padding,
		alignItems: "center",
		justifyContent:"center"
	},
	dotsRootContainer: {
		position: "absolute",
		bottom:5
	}
})
export default SlideCard