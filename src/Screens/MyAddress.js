import { View, Text, ScrollView, TouchableOpacity, useState } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button, IconButton } from 'react-native-paper'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import Addaddress from './AddAddress'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Sent } from './AddAddress'
import { CartContext } from '../Context/CartContext'







const MyAddress = () => {
  const navigation = useNavigation()
  const Focused = useIsFocused()

  const { city, setCity } = useContext(CartContext)
  const { building, setBuilding } = useContext(CartContext)
  const { pincode, setPincode } = useContext(CartContext)

  // console.log("city", city)
  // console.log("building",building)
  // console.log("pincode",pincode)

  // const list = (city,building,pincode) => {
  //   console.log("city", city)
  //   console.log("building", building)
    // console.log("pincode", pincode)
  // }

  // console.log({city})



  return (
    <View style={{ flex: 1, }}>
      <ScrollView style={{}}>

        <View style={{
          width: '100%', height: 70, justifyContent: 'space-between',
          alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2, left: 5
        }}>
          <Text style={{ fontSize: 22, fontWeight: '600', color: '#000' }}>My Address</Text>
          <Button onPress={() => navigation.navigate(Addaddress)}>Add Address</Button>
        </View>

        <Text>city, {city}</Text>
        <Text>building, {building}</Text>
        <Text>pincode, {pincode}</Text>

      </ScrollView>
    </View>
  )
}

export default MyAddress