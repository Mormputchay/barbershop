import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {SIZES} from '../temp/SIZES';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {image} from '../constants';
import {COLORS} from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
const AboutScreen = () => {
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
            About
          </Text>
        </View>
      </View>
    );
  }
  function renderLogo() {
    return (
      <View style={{backgroundColor: COLORS.white, marginTop: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image source={image.Logo} style={{width: 150, height: 150}} />
        </View>
      </View>
    );
  }
  function renderMainInfo() {
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white}}>
        <Text
          style={{
            marginStart: 25,
            fontSize: 24,
            color: COLORS.Black,
            fontWeight: 'bold',
          }}>
          View Feature
        </Text>
        <View style={styles.MainInfo}>
          <Image source={require('../assets/Barbershop.png')} style={{width:300,height:200,borderRadius:20,marginTop:20}} />
          <Text
            style={{
              marginTop: 10,
              fontSize: 23,
              color: COLORS.Black,
              fontWeight: 'bold',
              marginBottom:10
            }}>
            Social Media
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 5,marginBottom:5}}>
            <AntDesign
              name="facebook-square"
              size={25}
              style={{marginLeft: 10}}
            />
            <AntDesign name="instagram" size={25} style={{marginLeft: 10}} />
            <Image
              source={require('../assets/tiktop.png')}
              style={{width: 25, height: 25, marginLeft: 10}}
            />
            <AntDesign name="youtube" size={25} style={{marginLeft: 10}} />
          </View>
        </View>
      </View>
    );
  }
  function renderAboutUs() {
    return (
      <View style={styles.MainAbout}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: COLORS.Black,
          marginTop: 20,
          marginStart: 15,
        }}>
        About Us
      </Text>
      <Text style={{marginStart: 25,marginHorizontal:15,marginVertical:15, fontSize: 18, color: COLORS.gray}}>
        The security of your data is important to us but remember that no
        method of transmission over the Internet, or method of electronic
        storage is 100% secure. While we strive to use commercially acceptable
        means to protect your Personal Data, we cannot guarantee its absolute
        security. Your Data Protection Rights Under General Data Protection
        Regulation (GDPR) If you are a resident of the European Economic Area
        (EEA), you have certain data protection rights. We aim to take
        reasonable steps to allow you to correct, amend, delete, or limit the
        use of your Personal Data. If you wish to be informed what Personal
        Data, we hold about you and if you want it to be removed from our
        systems, please contact us. In certain circumstances, you have the
        following data protection rights: The right to access, update or to
        delete the information we have on you. Whenever made possible, you can
        access, update or request deletion of your Personal Data directly
        within your account settings section. 
      </Text>
    </View>
    )
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
          height: 1350,
        }}>
        {renderLogo()}
        {renderMainInfo()}
        {renderAboutUs()}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  MainInfo: {
    width: '90%',
    backgroundColor: COLORS.white,
    height: 350,
    borderRadius: 15,
    elevation: 5,
    alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 15,
  },
  MainAbout:{
    backgroundColor: COLORS.white,
    height: 755,
    width: '90%',
    marginLeft: 25,
    marginRight:25,
    borderRadius: 20,
    elevation: 10,
    marginTop: 15,
    marginBottom:10
  }
});
export default AboutScreen;
