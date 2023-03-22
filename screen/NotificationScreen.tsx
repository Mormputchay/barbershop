import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
  Alert,
} from 'react-native';
import {SIZES} from '../temp/SIZES';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {image} from '../constants';
import {COLORS} from '../constants';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import ModalPopupTopUp from '../component/ModalPopupTopUp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheetuploadImage from '../component/BottomSheetUploadImage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { initialWindowMetrics } from 'react-native-safe-area-context';
const NotificationScreen = () => {
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
            Notification
          </Text>
        </View>
      </View>
    );
  }

  function renderTopWalle() {
    const [visible, setVisible] = React.useState(false);
    return (
      <View style={styles.MainWallet}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 29,
          }}>
          <TextInput
            style={{
              borderBottomWidth: 2,
              borderColor: COLORS.white,
              width: 100,
              fontSize: 22,
              fontWeight: 'bold',
              color: COLORS.white,
            }}
            keyboardType="numeric"></TextInput>
          <Text style={{marginTop: 15, fontSize: 19, color: COLORS.white}}>
            Top Wallet
          </Text>
          <View style={{marginTop: 20}}>
            <TouchableOpacity
              style={styles.btnTopup}
              onPress={() => setVisible(true)}>
              <ModalPopupTopUp visible={visible}>
                <View style={{alignItems: 'center'}}>
                  <View style={styles.header}>
                    <Image
                      source={image.moneybag}
                      style={{width: 80, height: 80}}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: COLORS.Black,
                        marginTop: 10,
                      }}>
                      Your Top up is Complete!
                    </Text>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 35,
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: COLORS.gray,
                          marginTop: 10,
                          textAlign: 'center',
                        }}>
                        Do your want to continue top up ?
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 20,
                      }}>
                      <TouchableOpacity
                        style={styles.btnSave}
                        onPress={() => navigation.navigate('NewNotification')}>
                        <Text style={{color: COLORS.white, fontSize: 18}}>
                          Save
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.btnCancel}
                        onPress={() => setVisible(false)}>
                        <Text style={{color: COLORS.Black, fontSize: 18}}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ModalPopupTopUp>
              <Text style={{fontSize: 20, color: COLORS.Black}}>Top up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  function renderUploadImage() {
    const [visible, setVisible] = React.useState(false);
    const [photo, setPhoto] = useState<any>(null)
    const onCamera = (is_camera: any) => {
      if (is_camera) {
        launchCamera(
          {
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 512,
            maxWidth: 512,
          },
          (response: any) => {
            if (response.didCancel) {
              console.log('Use cancelled image picker');
            } else if (response.errorCode) {
              console.log('Imgae Picker Error', response.errorCode);
            } else if (response.errorMessage) {
              console.log('Imgae Picker Error', response.errorMessage);
            } else {
              setPhoto(response.assets[0]);
            }
          }
        )
      }
    }
    const onLibralry = (is_Libraly: any) => {
      if (is_Libraly) {
        launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 512,
            maxWidth:512,
          },
          (response: any) =>{
            if (response.didCancel) {
              console.log('Use cancelled image picker');
            } else if (response.errorCode) {
              console.log('ImgaePicker Error', response.errorCode);
            } else if (response.errorMessage) {
              console.log('ImgaePicker Error', response.errorMessage);
            } else {
              setPhoto(response.assets[0]);
            }
          }
        )
      }
    }
    return (
      <TouchableOpacity
        style={styles.MainInfo}
        onPress={() => setVisible(true)}>
         {photo === null ?
                  (
                    <View style={{ borderWidth: 3, borderColor: '#000' ,justifyContent:'center',}} />
                  ) : (
                    <Image source={{ uri: photo.uri }} style={{width:'100%',height:24,borderRadius:20, justifyContent:'center',}} />
                  )
                }
        <BottomSheetuploadImage visible={visible}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.btnbgUploadImage} onPress={() => { onLibralry(true) }}>
               
                <AntDesign name="picture" size={25} style={{marginRight: 15}} />
                <Text style={{fontSize: 20, color: COLORS.Black}}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnbgUploadImage} onPress={()=>onLibralry(true)}>
                <Ionicons name="camera" size={25} style={{marginRight: 15}} />
                <Text style={{fontSize: 20, color: COLORS.Black}}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnbgUploadImage}>
                <Text
                  style={{fontSize: 20, color: '#EE4B2B'}}
                  onPress={() => setVisible(false)}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheetuploadImage>
        <View>
          <Image
            source={require('../assets/cloud.png')}
            style={{width: 100, height: 100, marginTop: 10}}
          />
        </View>
        <Text style={{fontSize: 19, color: COLORS.Black}}>
          Upload your image
        </Text>
      </TouchableOpacity>
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
          height: 740,
        }}>
        {renderTopWalle()}
        {renderUploadImage()}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  MainWallet: {
    width: '90%',
    backgroundColor: COLORS.Skyblue,
    height: 230,
    borderRadius: 15,
    elevation: 2,
    marginStart: 20,
    marginEnd: 20,
    marginTop: 15,
  },
  btnTopup: {
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center',
    width: 120,
    height: 40,
  },
  MainInfo: {
    width: '90%',
    backgroundColor: COLORS.white,
    height: 220,
    borderRadius: 15,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSave: {
    backgroundColor: COLORS.gray,
    marginTop: 10,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 25,
  },
  btnCancel: {
    backgroundColor: COLORS.white,
    marginStart: 18,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 100,
    borderColor: COLORS.Black,
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 25,
  },
  btnbgUploadImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 250,
    height: 45,
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
});
export default NotificationScreen;
