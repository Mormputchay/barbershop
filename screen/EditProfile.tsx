import React ,{ useRef } from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SIZES} from '../temp/SIZES';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {image} from '../constants';
import {COLORS} from '../constants';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { Center } from 'native-base';
const EditProfile = () => {
  const phoneRef = useRef<any>()
  const addressRef = useRef<any>()
  const passwordRef = useRef<any>()
  const navigation: any = useNavigation();
  function renderHearch() {
    return (
      <View
        style={{
          backgroundColor: COLORS.Brown,
          height: 35,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-outline"
            size={20}
            color={COLORS.white}
            style={{marginStart: 10}}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, color: COLORS.white, marginTop: -25}}>
            Edit Profile
          </Text>
        </View>
      </View>
    );
  }
  function renderProfile() {
    return (
      <View style={{backgroundColor: COLORS.white, marginTop: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={image.customer4}
            style={{width: 90, height: 90, borderRadius: 45}}
          />
          <View style={styles.camera}>
            <Ionicons
              name="camera-sharp"
              size={20}
              color={COLORS.Black}
              style={{alignItems: 'center', left: 6}}
            />
          </View>
          <Text
            style={{
              marginTop: -20,
              fontSize: 25,
              fontWeight: 'bold',
              color: COLORS.Black,
            }}>
            Hel Sreyet
          </Text>
        </View>
      </View>
    );
  }
  function renderInfo() {
    return (
      <View style={styles.MainInfo}>
        <View
          style={{
            marginTop: 15,
            borderBottomWidth: 1,
            borderColor: COLORS.gray,
            marginStart: 20,
            marginEnd: 20,
            flexDirection: 'row',
          }}>
          <Ionicons name="person" size={20} style={{marginTop: 15}}  color={COLORS.gray}/>
          <TextInput
            onSubmitEditing={()=> phoneRef.current.focus()}
            placeholder="Hel Sreyet"
            placeholderTextColor={COLORS.gray}
            style={{
              fontSize: 14,
              marginTop: 5,
              marginStart: 5,
              color: COLORS.gray,
            }}></TextInput>
        </View>
        <View
          style={{
            marginTop: 15,
            borderBottomWidth: 1,
            borderColor: COLORS.gray,
            marginStart: 20,
            marginEnd: 20,
            flexDirection: 'row',
          }}>
          <Feather name="phone" size={20} style={{marginTop: 15}}  color={COLORS.gray}/>
          <TextInput
            ref={phoneRef}
            placeholder="015 916 299"
            placeholderTextColor={COLORS.gray}
            keyboardType="numeric"
            onSubmitEditing={()=> addressRef.current.focus()}
            style={{
              fontSize: 14,
              marginTop: 5,
              marginStart: 5,
              color: COLORS.gray,
            }}></TextInput>
        </View>
        <View
          style={{
            marginTop: 15,
            borderBottomWidth: 1,
            borderColor: COLORS.gray,
            marginStart: 20,
            marginEnd: 20,
            flexDirection: 'row',
          }}>
          <Feather name="map-pin" size={20} style={{marginTop: 15}}  color={COLORS.gray}/>
          <TextInput
            ref={addressRef}
            placeholder="Khan Toul Kork, Phnom Penh"
            placeholderTextColor={COLORS.gray}
            onSubmitEditing={()=> passwordRef.current.focus()}
            style={{
              fontSize: 14,
              marginTop: 5,
              marginStart: 5,
              color: COLORS.gray,
            }}></TextInput>
				</View>
				<TouchableOpacity onPress={()=>navigation.navigate("NewEditProfile")}>
				<View
          style={{
            marginTop: 15,
            borderBottomWidth: 1,
            borderColor: COLORS.gray,
            marginStart: 20,
            marginEnd: 20,
            flexDirection: 'row',
          }}>
            <Fontisto name="locked" size={20} style={{ marginTop: 15 }} color={COLORS.gray} />
            <View style={{flexDirection:'row', justifyContent:'space-between', flex:1}}>
            <TextInput
              ref={passwordRef}
              placeholder="**********"
              placeholderTextColor={COLORS.gray}
              secureTextEntry
            style={{
              fontSize: 14,
              marginTop: 5,
              marginStart: 5,
              color: COLORS.gray,
              }} />
            
            <Fontisto name='angle-right' style={{ marginTop: 20, alignItems: 'flex-end', justifyContent: 'flex-end',  }} color={COLORS.gray} size={ 15} />
            </View>
           
          </View>
					</TouchableOpacity>
        <View style={{justifyContent: 'center',marginTop:80}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
							backgroundColor: COLORS.gray,
							height: 45,
							marginLeft: 20,
							marginRight: 20,
							borderRadius:20
            }}>
            <Text style={{fontSize:18,color:COLORS.white,fontWeight:'bold'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.Brown}} showsVerticalScrollIndicator={false}>
      {renderHearch()}
      <StatusBar backgroundColor={COLORS.Brown} />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          marginTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 800,
        }}>
        {renderProfile()}
        {renderInfo()}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  camera: {
    bottom: 30,
    backgroundColor: COLORS.light,
    marginStart: 75,
    width: 35,
    height: 35,
    alignSelf: 'center',
    borderRadius: 55,
    justifyContent: 'center',
  },
  MainInfo: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    elevation: 5,
    width: '90%',
    marginStart: 20,
    marginTop: 15,
    marginEnd: 20,
    marginBottom: 190,
  },
});

export default EditProfile;
