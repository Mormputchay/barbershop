import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SIZES} from '../temp/SIZES';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {image} from '../constants';
import {COLORS} from '../constants';
const PrivacyScreen = () => {
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
            Privacy
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
  function renderPrivacy() {
    return (
      <View style={styles.MainPrivacy}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: COLORS.Black,
            marginTop: 20,
            marginStart: 15,
          }}>
          Our Privacy
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
          height: 1100,
        }}>
        {renderLogo()}
        {renderPrivacy()}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  MainPrivacy: {
    width: '90%',
    backgroundColor: COLORS.white,
    height: 800,
    borderRadius: 15,
    elevation: 5,
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 20,
    marginTop:20
  },
});
export default PrivacyScreen;
