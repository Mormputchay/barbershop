import React from 'react';
import {View, Text,TextInput,StyleSheet,ScrollView,FlatList,StatusBar,Animated} from 'react-native';
import COLORS from '../temp/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SlideCard from '../component/SlideCard';
import services from '../constants/service';
import ServiceCard from '../component/ServiceCard';
import product from '../constants/product';
import ProductCard from '../component/ProductCard';
const HomeScreen = () => {
	function renderSearch() {
		return (
			<View
			style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
			<View style={styles.inputContainer}>
				<Icon name="search" size={20} style={{marginLeft: 20}}  color={COLORS.gray}/>
				<TextInput
						placeholder="Search"
						placeholderTextColor={COLORS.gray}
					style={{ paddingStart: 15, fontSize: 16 }}
				/>
			</View>
		</View>
		)
	}
	function renderimgSlide() {
		return (
			<SlideCard />
		)
	}
	
	function renderService() {
		return (
			<View style={{flex:1,backgroundColor:COLORS.white}}>
				<Text style={styles.textTitle}>Services</Text>
				<ScrollView showsVerticalScrollIndicator = {true}>
					<FlatList 
						data={services}
						//vertical 
						pagingEnabled
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => <ServiceCard service ={item} />
						}
					/>
				</ScrollView>
			</View>
		)
	}
	function renderProduct() {
		return (
			<View style={{ flex: 1, backgroundColor: COLORS.white }}>

				<Text style={styles.textTitle}>Product</Text>
				<ScrollView showsVerticalScrollIndicator={true}>
					<FlatList
						data={product}
						//vertical 
						pagingEnabled
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => <ProductCard product={item} />
						}
					/>
				</ScrollView>
			</View>
		)
	}
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<StatusBar backgroundColor={COLORS.white}/>
			<View style={{flex:1,backgroundColor:COLORS.white}}>
				{renderSearch()}
				{renderimgSlide()}
				{renderService()}
				{renderProduct()}
			</View>
		</ScrollView>
	)
};
const styles = StyleSheet.create({
	inputContainer: {
    height: 45,
    backgroundColor: COLORS.light,
    borderRadius: 22,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 25,
    marginEnd: 25,
	},
	textTitle:{
		fontSize: 22,
		marginLeft: 15,
		fontWeight: 'bold',
		marginTop: 10,
		color: COLORS.Black,
	
	}
})
export default HomeScreen;
