import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import {COLORS} from '../constants';
import {SIZES} from '../temp/SIZES';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import customer from '../constants/customer';
import CustomerCard from '../component/CustomerCard';
import CompletedCard from '../component/CompletedCard';
import VoidCard from '../component/VoidCard';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const ResportScreentsx = () => {
  const navigation: any = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate1, setSelectedDate1] = useState('Select Date')
  const [selectedDate2, setSelectedDate2] = useState('Select Date')
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:any) => {
    console.warn("A date has been picked: ", date);
    const dt = new Date(date)
    const x = dt.toISOString().split("T");
    const x1 = x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setSelectedDate1(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setSelectedDate2(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };
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
            Report
          </Text>
          <StatusBar backgroundColor={COLORS.Brown} />
        </View>
      </View>
    );
  }
  function renderData() {
    return (
      <View style={styles.formdate}>
        <TouchableOpacity style={{justifyContent:'flex-start',alignItems:'flex-start'}} onPress={showDatePicker} >
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
          <Fontisto
            name="date"
            size={27}
            style={{marginLeft: 15, marginTop: 25, justifyContent: 'flex-start',
            alignItems: 'flex-start',}}
            color={COLORS.gray}
          />
        </TouchableOpacity>

        <View style={{marginTop: 20, marginStart: 15}}>
          <Text style={{fontSize: 16, color: COLORS.Black}}>Form date</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.Black}}>
           {selectedDate1}
          </Text>
        </View>
        <TouchableOpacity style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }} onPress={showDatePicker}>
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
          <Fontisto
            name="date"
            size={27}
            style={{
              marginLeft: 15,
              marginTop: 25,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
            color={COLORS.gray}
          />
        </TouchableOpacity>

        <View style={{marginTop: 20, marginStart: 15}}>
          <Text style={{fontSize: 16, color: COLORS.Black}}>Form date</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: COLORS.Black}}>
          {selectedDate2}
          </Text>
        </View>
      </View>
    );
  }
  function renderMainWallet() {
    return (
      <View style={styles.MainWallet}>
        <Text
          style={{
            marginTop: 15,
            fontSize: 22,
            fontWeight: 'bold',
            color: COLORS.Black,
          }}>
          Main Wallet{' '}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 25,
            fontWeight: 'bold',
            color: COLORS.Black,
          }}>
          10.59 USD{' '}
        </Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View
            style={{
              alignSelf: 'flex-start',
              backgroundColor: COLORS.light,
              width: 130,
              height: 60,
              marginStart: 15,
              justifyContent: 'center',
              marginTop: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.Black,
                textAlign: 'center',
              }}>
              $0.00
            </Text>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 12,
                color: COLORS.gray,
                textAlign: 'center',
              }}>
              Active Wallet
            </Text>
          </View>
          <View
            style={{
              alignSelf: 'flex-start',
              backgroundColor: COLORS.light,
              width: 130,
              height: 60,
              marginStart: 15,
              justifyContent: 'center',
              marginTop: 10,
              borderRadius: 10,
              elevation: 2,
            }}>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: COLORS.Black,
                textAlign: 'center',
              }}>
              $0.00
            </Text>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 12,
                color: COLORS.gray,
                textAlign: 'center',
              }}>
              Product
            </Text>
          </View>
        </View>
      </View>
    );
  }
  function renderCompleted() {
    return (
      <View style={{marginTop: 10}}>
        <FlatList
          data={customer}
          //vertical
          pagingEnabled
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CompletedCard completed={item} />}
        />
      </View>
    );
  }
  function renderVoid() {
    return (
      <View>
        <Text
          style={{
            marginStart: 19,
            fontSize: 20,
            fontWeight: 'bold',
            color: COLORS.Black,
          }}>
          Void
        </Text>
        <FlatList
          data={customer}
          //vertical
          pagingEnabled
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <VoidCard Void={item} />}
        />
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
          height: '100%',
        }}>
        {renderData()}
        {renderMainWallet()}
        {renderCompleted()}
        {renderVoid()}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  formdate: {
    backgroundColor: COLORS.white,
    width: '90%',
    height: 100,
    flexDirection: 'row',
    borderRadius: 15,
    elevation: 4,
    alignContent: 'center',
    marginStart: 20,
    marginEnd: 30,
    marginTop: 15,
  },
  MainWallet: {
    backgroundColor: COLORS.white,
    width: '90%',
    height: 180,
    elevation: 4,
    borderRadius: 15,
    marginStart: 20,
    marginEnd: 30,
    marginTop: 15,
    alignItems: 'center',
  },
});
export default ResportScreentsx;
