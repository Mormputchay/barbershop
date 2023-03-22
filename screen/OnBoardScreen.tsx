import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../temp/colors';
import {useNavigation} from '@react-navigation/native';
import image from '../constants/image';
const OnBoardScreen = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{height: 400, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={image.Logo}
          style={{width: 200, height: 200, resizeMode: 'contain', top: 150}}
        />
      </View>
      <View style={styles.textcontainer}>
        <View>
          <Text
            style={{
              marginTop: 15,
              textAlign: 'center',
              fontSize: 22,
              color: COLORS.Black,
              fontWeight: 'bold',
            }}>
            Book Your Favorite Stylist
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 19,
              marginTop: 10,
              color: COLORS.gray,
            }}>
            The time to relax is when you don't have time for it."
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate('AutoScreen')}>
          <View
            style={{
              width: 180,
              height: 45,
              alignItems: 'center',
              backgroundColor: COLORS.gray,
              justifyContent: 'center',
              borderRadius: 22,
            }}>
            <Text
              style={{color: COLORS.white, fontSize: 15, fontWeight: 'bold'}}>
              Get Start
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textcontainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 55,
  },
});
export default OnBoardScreen;
