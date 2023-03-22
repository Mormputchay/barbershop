import React ,{useState, useEffect,useRef}  from 'react'
import {View,Image,StyleSheet,Text,TextInput,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import image from '../constants/image'
import COLORS from '../temp/colors'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const ForgetPassword = () => {
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
      navigation.navigate("SentphoneNumberforget")
    }
  }
	return (
		<SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
			<View style={{height:200,justifyContent:'center',alignItems:'center',marginTop:20}}>
				<Image source={image.Logo} style={{ width: 200, height: 200, justifyContent: 'center' }} />
			</View>
			<View style={styles.textcontiner}>
        <View>
          <Text
            style={{
              marginTop: 15,
              textAlign: 'center',
              fontSize: 22,
              color: COLORS.Black,
              fontWeight: 'bold',
            }}>
            Forget Password?
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              marginTop: 10,
							color: COLORS.Black,
							fontWeight:'bold'
            }}>
          Don't worry! Please enter the associated with your phone number
          </Text>
				</View>
      </View>
      <View
        style={{marginTop: 22, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={styles.inputContainer}>
          <Image
            source={image.country}
            style={{width: 18, height: 18, marginStart: 15}}
          />
          <Text style={{ marginStart: 15 }}>+855</Text>
          <Icon name = 'down'/>
          <TextInput
            placeholder="Enter your mobile number"
            placeholderTextColor={COLORS.gray}
            value={phone}
            onChangeText={(text)=>setPhone(text)}
            style={{paddingStart: 13, fontSize: 14 }}
            keyboardType ="numeric"
          />
        </View>
      </View>
      {error.field === 'phone' && (
     <Text style={styles.texterror}>{error.message}</Text>)}
      <TouchableOpacity style={styles.btnSend} onPress={()=> onSubmit()}>
        <Text style={{fontSize:18,color:COLORS.white}}>Send</Text>
      </TouchableOpacity>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	textcontiner: {
		justifyContent: 'center',
		alignItems: 'center',
		marginStart: 20,
		marginEnd:20
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
	btnSend: {
		backgroundColor: COLORS.gray,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		height: 45,
		borderRadius: 25,
		marginHorizontal:25
  },
  texterror: {
    fontSize: 12,
    color: '#FF0000',
    marginStart: 25,
  },
})
export default ForgetPassword