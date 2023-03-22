import React, { useState,useRef,useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import COLORS from '../temp/colors';
import image from '../constants/image';
import Icons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import BottomSheetuploadImage from '../component/BottomSheetUploadImage';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Keyboard } from 'react-native';
const RegisterScreen = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setConfirmPassword] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const usernameRef = useRef<any>()
  const addressRef = useRef<any>()
  const passwordRef = useRef<any>()
  const ConfrimpasswordRef = useRef<any>()
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View>
        <Text
          style={{
            textAlign: 'right',
            marginTop: 10,
            marginRight: 15,
            fontSize: 22,
            color: COLORS.Black,
          }}>
          Skip
        </Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity
          style={styles.imageContainer} onPress={() => setVisible(true)}>
             <BottomSheetuploadImage visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.btnbgUploadImage}>
                <AntDesign name='picture' size={25} style={{marginRight:15}}/>
                <Text style={{fontSize:20,color:COLORS.Black}}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnbgUploadImage}>
          
                <Ionicons name='camera' size={25} style={{marginRight:15}} />
                <Text style={{ fontSize: 20, color: COLORS.Black }}>Camera</Text>
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnbgUploadImage}>
                <Text style={{fontSize:20,color:'#EE4B2B'}}onPress={() => setVisible(false)}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetuploadImage>
          <Image source={image.person} style={{width: 100, height: 100}} />
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <View style={styles.inputContainer}>
            <Icons name="person" size={25} style={{marginLeft: 20}}  color={COLORS.gray}/>
            <TextInput
              placeholder="Username"
              placeholderTextColor={COLORS.gray}
              onSubmitEditing={()=> addressRef.current.focus()}
              style={{fontSize: 14, paddingStart: 15}}
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              size={25}
              style={{ marginLeft: 20 }}
              color={COLORS.gray}
            />
            <TextInput
              placeholder="Address"
              ref={addressRef}
              onSubmitEditing={() => passwordRef.current.focus()}
              placeholderTextColor={COLORS.gray}
              style={{fontSize: 14, paddingStart: 15}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.inputContainer}>
            <Icons name="lock" size={25} style={{marginLeft: 20}}  color={COLORS.gray}/>
            <TextInput
              ref={passwordRef}
              placeholder="Password"
              onSubmitEditing={() => ConfrimpasswordRef.current.focus()}
              placeholderTextColor={COLORS.gray}
              style={{paddingStart: 15, fontSize: 14}}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
                height: 30,
                width: 30,
                marginRight: 10,
              }}
              onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? image.eye : image.hide}
                style={{width: 20, height: 20, marginTop: 4}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.inputContainer}>
            <Icons name="lock" size={25} style={{marginLeft: 20}}  color={COLORS.gray}/>
            <TextInput
              ref={ConfrimpasswordRef}
              placeholder="Confrim Password"
              placeholderTextColor={COLORS.gray}
              style={{paddingStart: 15, fontSize: 14}}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
                height: 30,
                width: 30,
                marginRight: 10,
              }}
              onPress={() => setConfirmPassword(!showPassword)}>
              <Image
                source={showConfirmPassword ? image.eye : image.hide}
                style={{width: 20, height: 20, marginTop: 4}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.btnRegiter} onPress={()=> navigation.navigate('HomeScreen')}>
          <Text style={{fontSize: 20, color: COLORS.white,fontWeight:'bold'}}>Regiter</Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{marginTop: 10, fontSize: 17, color: COLORS.Black}}>
            Don't have account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('AutoScreen')}>
            <Text
              style={{
                fontSize: 17,
                marginTop: 10,
                textDecorationLine: 'underline',
                color: COLORS.Black,
                marginLeft: 10,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: 110,
    height: 110,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: COLORS.gray,
    borderRadius: 50,
    backgroundColor: COLORS.light,
  },
  inputContainer: {
    height: 40,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 25,
    marginEnd: 25,
    marginTop: 20,
  },
  btnbgUploadImage: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 250,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 20
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRegiter: {
    marginTop: 25,
    backgroundColor: COLORS.gray,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 22,
    marginEnd: 22,
    borderRadius: 22,
  },
});
export default RegisterScreen;
