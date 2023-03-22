import React ,{ useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../temp/colors';
import image from '../constants/image';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
const FormNumberScreen = () => {
  const navigation: any = useNavigation();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState({ field: '', message: '' });
  const onSubmit = () => {
    let loginError = { field: '', message: '' };
    if (phone === '') {
      loginError.field = 'phone';
      loginError.message = 'Phone is required';
      setError(loginError);
    }
    else if (phone.trim().length < 8) {
      loginError.field = 'phone';
      loginError.message = 'Phone is required';
      setError(loginError);
    } 
    else {
      setPhone("")
      navigation.navigate('SentphoneNumber')
    }
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{height: 200, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={image.Logo}
          style={{width: 200, height: 200, marginTop: 35}}
        />
        <Text style={{fontSize: 16}}>Hello, nice to meet you!</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: COLORS.Black,
            marginTop: 28,
          }}>
          Get moving with BarberShop
        </Text>
      </View>
      <View
        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.inputContainer}>
          <Image
            source={image.country}
            style={{width: 18, height: 18, marginStart: 15}}
          />
          <Text style={{marginStart: 15,color:COLORS.gray}}>+855</Text>
          <Icon name="down" />
          <TextInput
            placeholder="Enter your mobile number"
            placeholderTextColor={COLORS.gray}
            value={phone}
            onChangeText={(text)=>setPhone(text)}
            style={{paddingStart: 13, fontSize: 14}}
            keyboardType="numeric"
          />
        </View>
      </View>
      {error.field === 'phone' && (
     <Text style={styles.texterror}>{error.message}</Text>)}
      <View style={styles.textcontainer}>
        <View>
          <Text style={{textAlign: 'center', marginTop: 10, fontSize: 15}}>
            By creating an account, you agreen to our
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: COLORS.Black,
                fontSize: 15,
              }}>
              Terms of Service
            </Text>
            <Text style={{fontSize: 15}}> and </Text>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: COLORS.Black,
                  fontSize: 15,
                }}>
                Privacy Policy
              </Text>
            </View>
          </View>
          
          <TouchableOpacity  onPress={() => onSubmit()}
            style={styles.btnSend}>
            <Text style={{fontSize:16,color:COLORS.white,fontWeight:'bold'}}>Send code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 25,
    marginEnd: 25,
  },
  textcontainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  btnSend: {
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: COLORS.gray,
    borderRadius:40,
    height: 45,
  },
  texterror: {
    fontSize: 12,
    color: '#FF0000',
    marginStart: 25,
  },
});
export default FormNumberScreen;
