import { View, Text } from 'react-native'
import React, { useState ,useEffect} from 'react'
import { Button, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import MyAddress from './MyAddress'
import HomeScreen from './HomeScreen'
import Main from '../Bottom/Main'
import { pinchHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/PinchGestureHandler'


const Addaddress = ({route}) => {
  const { refresh } = route.params;
 
  const navigation = useNavigation();

  const [city, setCity] = useState("")
  const [building, setBuilding] = useState("")
  const [pincode, setPincode] = useState("")
  const [badcity, setBadCity] = useState(false)
  const [badbuilding, setBadBuilding] = useState(false)
  const [badpincode, setBadPincode] = useState(false)
  const [showCity, setShowCity] = useState("")
  const [showBuilding, setShowBuilding] = useState("")
  const [showPincode, setShowPincode] = useState("")
  const [adstate,setAdstate]=useState([])
const data={
  "city":city,
"building":building,
"pincode":pincode
}
const getAddress=async()=>{
  let  data=await AsyncStorage.getItem("Address")

  setAdstate([JSON.parse(data)])  }  

  const Validation = (txt) => {
    if (city.length == 0) {
      setBadCity(true)
    } else {
      setBadCity(false)
    }
    if (building.length == 0) {
      setBadBuilding(true)
    } else {
      setBadBuilding(false)
    }
    if (pincode.length == 0) {
      setBadPincode(true)
    } else {
      setBadPincode(false)
      saveAddress();
    }
  }
  const saveAddress = async () => {
    if (badcity === false && badbuilding === false && badpincode === false) {
      if(adstate!=null){
      await AsyncStorage.setItem('Address',JSON.stringify( [...adstate,data]))}
      else{
        await AsyncStorage.setItem('Address',JSON.stringify( [data]))
      }
      navigation.goBack()
      refresh()

    }
  }
  useEffect(()=>{getAddress()

  },[])

  return (
    <View style={{ flex: 1, }}>

      <View style={{
        width: '100%', height: 60, justifyContent: 'space-between',
        alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2, left: 5,
      }}>
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#000' }}> Fill Address</Text>
        <Button onPress={() => navigation.navigate(HomeScreen)}>Go Home</Button>
      </View>



      <View style={{ marginHorizontal: 10, justifyContent: 'space-between', }}>
        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Enter city name"} left={<TextInput.Icon icon={"home"} />}
          value={city}
          onChangeText={(txt) => setCity(txt)} />
        {badcity && <Text style={{ color: 'red' }}>Enter city name</Text>}

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Enter building name"} left={<TextInput.Icon icon={"home"} />}
          value={building}
          onChangeText={(txt) => setBuilding(txt)} />
        {badbuilding && <Text style={{ color: 'red' }}>Enter building name</Text>}

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Enter Pincode name"} left={<TextInput.Icon icon={"home"} />}
          value={pincode}
          onChangeText={(txt) => setPincode(txt)} />
        {badpincode && <Text style={{ color: 'red' }}>Enter pincode</Text>}
        <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => Validation()}>Save Address</Button>

      </View>

      

    </View>
  )
}

export default Addaddress