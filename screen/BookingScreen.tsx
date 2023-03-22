import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {COLORS} from '../constants';
import {SIZES} from '../temp/SIZES';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Booking from '../constants/Booking';
import BookCard from '../component/BookCard';
import { image } from '../constants';
import ModalPopup from '../component/ModalPopup ';
const BookingScreen = () => {
  const navigation: any = useNavigation();
  function renderHearch() {
    return (
      <View
        style={{
          backgroundColor: COLORS.Brown,
          height: 35,
          justifyContent: 'center',
        }}>
        <StatusBar backgroundColor={COLORS.Brown} />
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
            Booking Detail
          </Text>
          <StatusBar backgroundColor={COLORS.Brown} />
        </View>
      </View>
    );
  }
  function renderBooking() {
    return (
      <View style={{marginTop:15}}>
        <FlatList
          data={Booking}
          //vertical
          pagingEnabled
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <BookCard book={item} />}
        />
      </View>
    );
  }
  function renderCard() {
    const [visible, setVisible] = React.useState(false);
    return (
      <View style={{flex: 1, backgroundColor: COLORS.white, marginTop: 10}}>
        <View
          style={{
            width: '90%',
            height: 190,
            backgroundColor: COLORS.white,
            borderRadius: 20,
            left: 20,
            right: 10,
            elevation: 5,
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                marginTop: 15,
                marginLeft: 10,
                fontSize: 22,
                color: COLORS.gray,
              }}>
              Hair cute :
            </Text>
            <Text style={{marginLeft: 10, fontSize: 22, color: COLORS.gray}}>
              Discount :
            </Text>

            <Text style={{marginLeft: 10, fontSize: 22, color: COLORS.gray}}>
              Grand Total :
            </Text>
            <Text style={{marginLeft: 10, fontSize: 22, color: COLORS.gray}}>
              Total Points :
            </Text>
            <View
              style={{
                marginTop: 10,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.gray,
                width: '250%',
              }}
            />
            <Text style={{marginLeft: 10, fontSize: 22, color: COLORS.gray}}>
              Total :
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', left: 80, top: 20}}>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.gray,
              }}>
              USD 10.00
            </Text>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.gray,
              }}>
              USD 0.00
            </Text>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.gray,
              }}>
              USD 10.00
            </Text>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.gray,
              }}>
              4 pts
            </Text>
            <Text
              style={{
                marginTop: 20,
                textAlign: 'right',
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.gray,
              }}>
              USD 10.00
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 55,
            justifyContent: 'center',
            backgroundColor: COLORS.Brown,
            height: 45,
            marginStart: 20,
            marginEnd: 20,
            borderRadius: 30,
          }}
          onPress={() => setVisible(true)}>
          <ModalPopup visible={visible}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.header}>
                <Image
                  source={image.storytelling}
                  style={{width: 110, height: 110}}
                />
                <Text
                  style={{
                    marginTop: 10,
                    marginStart: 5,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: COLORS.Black,
                  }}>
                  Add Confirm!
                </Text>
                <Text style={{textAlign: 'center', fontSize: 16}}>
                  Your Add has been successfully Confirmed!
                </Text>
                <TouchableOpacity
                  style={styles.btnOk}
                  onPress={() => setVisible(false)}>
                  <Text style={{color: COLORS.white, fontSize: 18}}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ModalPopup>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: COLORS.white}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ScrollView style={{backgroundColor: COLORS.Brown}} showsVerticalScrollIndicator={false}>
      {renderHearch()}
      <StatusBar backgroundColor={COLORS.Brown} />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          marginTop: 10,
          borderTopLeftRadius: 20,
          height: 700,
          borderTopRightRadius: 20,
        }}>
        {renderBooking()}
        {renderCard()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 15,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOk: {
    backgroundColor: COLORS.gray,
    width: 250,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 25,
  },
});
export default BookingScreen;
