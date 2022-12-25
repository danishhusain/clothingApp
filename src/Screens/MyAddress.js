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

  const Delete = async () => {
    try {
      await AsyncStorage.removeItem("Address");
      return true;
    }
    catch (exception) {
      return false;
    }
  }

  const getAddress = async () => {
    let mdata = await AsyncStorage.getItem("Address")
    setAdData(JSON.parse(mdata))
  }

  useEffect(() => {
    getAddress()
  }, [isFocused])

  console.log('<<', adData)
  return (
    <View style={{ flex: 1 }}>

      

      <View style={{ width: '100%', height: '8%', backgroundColor: `#6a5acd`, borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>My Address</Text>
        <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 3, paddingTop: 20, fontWeight: '600' }} onPress={() => navigation.navigate(Addaddress)}>Add Address</Button>
      </View>


      <View style={{ flex: 1, borderBottomWidth: 0.2, borderBottomColor: '#000' }}>
        {adData && <FlatList
          data={adData}
          renderItem={({ item }) =>
            <View style={{ width: '100%', backgroundColor: '#B0A0FF', borderBottomWidth: 1, borderBottomColor: 'white' }}>

              <Text style={{ color: "white", fontSize: 16, paddingLeft: 5 }}>City:{item.city}</Text>
              <Text style={{ color: "white", fontSize: 16, paddingLeft: 5 }}>Building:{item.building}</Text>
              <Text style={{ color: "white", fontSize: 16, paddingLeft: 5 }}>Pincode:{item.pincode}</Text>
              <IconButton icon={'delete'} iconColor={'white'} style={{ position: 'absolute', right: 1, top: 10 }}
                onPress={() => Delete()}
              >Delete</IconButton>

            </View>
          }

        />}
      </View>


    </View>
  )
}

export default MyAddress