import { View, Text, ScrollView, TouchableOpacity,} from 'react-native'
import React, { useContext, useEffect , useState } from 'react'
import { Button, IconButton } from 'react-native-paper'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import Addaddress from './AddAddress'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Sent } from './AddAddress'
import { CartContext } from '../Context/CartContext'
import { FlatList } from 'react-native-gesture-handler'







const MyAddress = () => {
  const [adData,setAdData]=useState([])
  const navigation = useNavigation()
  const Focused = useIsFocused()

  const getAddress=async()=>{
   let  data=await AsyncStorage.getItem("Address")
 
  setAdData(JSON.parse(data))  }  

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

useEffect(()=>{getAddress()

},[])
console.log('ad>>>', adData.shift())
  return (
    <View style={{ flex: 1}}>
      

        <View style={{
          width: '100%', height: 70, justifyContent: 'space-between',
          alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2, left: 5
        }}>
          <Text style={{ fontSize: 22, fontWeight: '600', color: '#000' }}>My Address</Text>
          <Button onPress={() => navigation.navigate("Addaddress",
            {
              refresh:getAddress,
    
            })}>Add Address</Button>
        </View>
        <View style={{flex:1}}>
{adData &&<FlatList

data={adData.shift()}
renderItem={({item})=>
  <View >
     <Text style={{color:"black"}}>city:{item.city}</Text>
        <Text style={{color:"black"}}>building:{item.building}</Text>
        <Text style={{color:"black"}}>pincode:{ item.pincode}</Text>
  </View>
}
/>}
</View>
        {/* <Text>city: {adData&& adData.city}</Text>
        <Text>building:{adData&& adData.building}</Text>
        <Text>pincode:{adData&& adData.pincode}</Text> */}

     
    </View>
  )
}

export default MyAddress