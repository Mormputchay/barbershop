import React, { useRef } from 'react';
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

const RestPassword = () => {
  const confirmpasswordRef = useRef<any>()
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setConfirmPassword] = React.useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.imageContainer}>
        <Image source={image.Logo} style={{width: 150, height: 150}} />
        <Text
          style={{
            marginTop: 25,
            fontSize: 28,
            fontWeight: 'bold',
            color: COLORS.Black,
          }}>
          Reset Password
        </Text>
      </View>
      <View
        style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.inputContainer}>
          <Icons name="lock" size={25} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Password"
            keyboardType="numeric"
            placeholderTextColor={COLORS.gray}
            style={{ paddingStart: 25, fontSize: 16 }}
            onSubmitEditing={()=>confirmpasswordRef.current.focus()}
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
      <View
        style={{marginTop: 15, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.inputContainer}>
          <Icons name="lock" size={25} style={{marginLeft: 20}} />
          <TextInput
            ref={confirmpasswordRef}
            placeholder="Confim password"
            keyboardType="numeric"
            placeholderTextColor={COLORS.gray}
            style={{paddingStart: 25, fontSize: 17}}
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
      <TouchableOpacity
        style={styles.btnConfirm}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{fontSize: 20, color: COLORS.white}}>Confirm</Text>
      </TouchableOpacity>
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
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 25,
    marginEnd: 25,
  },
  btnConfirm: {
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
});
export default RestPassword;
