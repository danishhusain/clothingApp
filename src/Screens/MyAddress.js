import { View, Text, ScrollView, TouchableOpacity, } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, IconButton } from 'react-native-paper'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import Addaddress from './AddAddress'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Sent } from './AddAddress'
import { CartContext } from '../Context/CartContext'
import { FlatList } from 'react-native-gesture-handler'







const MyAddress = () => {
  const [adData, setAdData] = useState([])
  // const{adData,setAdData}=useContext(CartContext)
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const Delete = () => {
    return (
      adData !== adData
    )
  }

  const getAddress = async () => {
    let mdata = await AsyncStorage.getItem("Address")
    setAdData(JSON.parse(mdata))
  }

  useEffect(() => {
    getAddress()
  }, [isFocused])

  console.log('maindata', adData)
  return (
    <View style={{ flex: 1 }}>

      <View style={{
        width: '100%', height: 70, justifyContent: 'space-between',
        alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2, left: 5
      }}>
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#000' }}>My Address</Text>
        <Button onPress={() => navigation.navigate(Addaddress)}>Add Address</Button>
      </View>

      <View style={{ flex: 1, borderBottomWidth: 0.2, borderBottomColor: '#000' }}>
        {adData && <FlatList
          data={adData}
          renderItem={({ item }) =>
            <View style={{ width: '100%', backgroundColor: 'grey' }}>

              <Text style={{ color: "black", fontSize: 16 }}>City:{item.city}</Text>
              <Text style={{ color: "black", fontSize: 16 }}>Building:{item.building}</Text>
              <Text style={{ color: "black", fontSize: 16 }}>Pincode:{item.pincode}</Text>
              <Button mode='outlined' textColor='white' style={{ position: 'absolute', right: 1, top: 10 }}
                onPress={() => Delete()}
              >Delete</Button>

            </View>
          }

        />}
      </View>


    </View>
  )
}

export default MyAddress