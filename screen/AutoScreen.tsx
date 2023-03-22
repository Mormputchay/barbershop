import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../temp/colors';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import image from '../constants/image';
import ModelPopupFailPhoneNumber from '../component/ModelPopupFailPhoneNumber';
import ModelPopUpFailPassword from '../component/ModelPopUpFailPassword';
const AutoScreen = ({userpermission}: any) => {
  const navigation: any = useNavigation();
  const passwordRef = useRef<any>();
  const [showPassword, setShowPassword] = React.useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ field: '', message: '' });
  const [visible, setVisible] = React.useState(false);
  const onSubmit = () => {
    let loginError = { field: '', message: '' };
    if (phone === '') {
      loginError.field = 'phone';
      loginError.message = 'Phone is required';
      setError(loginError);
      setVisible(true);
    } else if (phone.trim().length < 8) {
      loginError.field = 'phone';
      loginError.message = 'Phone is required';
      setError(loginError);
      setVisible(true);
    } else if (password === '') {
      loginError.field = 'password';
      loginError.message = 'password is required';
      setError(loginError);
      setVisible(true);
    } else { 
      setPhone("")
      setPassword("")
      navigation.navigate("HomeScreen")
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.imageContainer}>
        <Image source={image.Logo} style={{width: 150, height: 150}} />
      </View>
      <View
        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.inputContainer}>
          <Icons name="phone" size={25} style={{ marginLeft: 20 }} color={COLORS.gray} />
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={COLORS.gray}
            keyboardType="numeric"
            value={phone}
            onChangeText={(value) => setPhone(value)}
            onSubmitEditing={() => passwordRef.current.focus()}
            style={{paddingStart: 25, fontSize: 15, color: COLORS.Black}}
          />
        </View>
      </View>
      {error.field === 'phone' && (
        <View>
          {/*<Text style={styles.texterror}>{error.message}</Text>*/}
          <ModelPopupFailPhoneNumber visible={visible} >
            <View style={{alignItems:'center'}}>
              <View style={styles.header}>
                <Image source={image.rejected} style={{ width: 90, height: 90 }} />
                <Text style={{ marginTop: 15, fontSize: 16, color: '#FF0000' ,textAlign:'center'}}>please input your phone again</Text>
                <TouchableOpacity style={styles.btnOK}   onPress={() => setVisible(false)}>
                  <Text style={{fontSize:16,color:COLORS.white,fontWeight:'bold'}}>OK</Text>
                </TouchableOpacity>
                </View>
            </View>
          </ModelPopupFailPhoneNumber>
        </View>
      )}
      <View
        style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.inputContainer}>
          <Icons name="lock" size={25} style={{marginLeft: 20}}  color={COLORS.gray}/>
          <TextInput
            ref={passwordRef}
            placeholderTextColor={COLORS.gray}
            placeholder="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            style={{paddingStart: 25, fontSize: 15}}
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
      {error.field === 'password' && (
        <View>
          {/*<Text style={styles.texterror}>{error.message}</Text>*/}
          <ModelPopUpFailPassword visible={visible} >
            <View style={{alignItems:'center'}}>
              <View style={styles.header}>
                <Image source={image.resetpassword} style={{ width: 90, height: 90 }} />
                <Text style={{ marginTop: 15, fontSize: 16,  color:'#FF0000',textAlign:'center' }}>please input your password again</Text>
                <TouchableOpacity style={styles.btnOK} onPress={()=>setVisible(false)}>
                  <Text style={{fontSize:16,color:COLORS.white,fontWeight:'bold'}}>Ok</Text>
                </TouchableOpacity>
                </View>
            </View>
          </ModelPopUpFailPassword>
        </View>
      )}
      <TouchableOpacity
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('ForgetPassword')}>
        <Text
          style={{
            textAlign: 'right',
            marginRight: 27,
            color: COLORS.Black,
            fontSize: 15,
          }}>
          Forget password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin} onPress={() => onSubmit()}>
    
        <Text style={{fontSize: 18, color: COLORS.white, fontWeight: 'bold'}}>
          Login
        </Text>
     
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{fontSize: 16, textAlign: 'center', color: COLORS.Black}}>
            Don't have account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FormNumberScreen')}>
            <Text
              style={{
                fontSize: 16,
                marginLeft: 10,
                color: COLORS.Black,
                textDecorationLine: 'underline',
              }}>
              Regiter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65,
  },
  inputContainer: {
    height: 45,
    backgroundColor: COLORS.light,
    borderRadius: 18,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
  },
  btnLogin: {
    marginTop: 20,
    backgroundColor: COLORS.gray,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 22,
    marginEnd: 22,
    borderRadius: 22,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
  },
  texterror: {
    fontSize: 12,
    color: '#FF0000',
    marginStart: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOK: {
    marginTop:18,
    backgroundColor: '#e51b1b',
    width: 120,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20
  },
  btnOpen: {
    marginTop:18,
    backgroundColor: COLORS.green,
    width: 120,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20
  }
});
export default AutoScreen;
