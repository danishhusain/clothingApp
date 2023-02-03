// import { View, Text, Alert } from 'react-native'
// import React, { useState ,useEffect} from 'react'
// import { Button, TextInput } from 'react-native-paper'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { useNavigation } from '@react-navigation/native'
// // import MyAddress from './MyAddress'
// import HomeScreen from './HomeScreen'
// import Main from '../Bottom/Main'


// const Addaddress = () => {


//   const navigation = useNavigation();

//   const [city, setCity] = useState("")
//   const [building, setBuilding] = useState("")
//   const [pincode, setPincode] = useState("")
//   const [badcity, setBadCity] = useState(false)
//   const [badbuilding, setBadBuilding] = useState(false)
//   const [badpincode, setBadPincode] = useState(false)
//   const [adstate,setAdstate]=useState([])

// const data={
//   "city":city,
// "building":building,
// "pincode":pincode
// }
// const getAddress=async()=>{
//   let  data=await AsyncStorage.getItem("Address")

//   setAdstate(JSON.parse(data))  }  

//   const Validation = (txt) => {
//     if (city.length == 0) {
//       setBadCity(true)
//     } else {
//       setBadCity(false)
//     }
//     if (building.length == 0) {
//       setBadBuilding(true)
//     } else {
//       setBadBuilding(false)
//     }
//     if (pincode.length == 0) {
//       setBadPincode(true)
//     } else {
//       setBadPincode(false)
//       saveAddress();
//     }
//   }
//   const saveAddress = async () => {
//     if (badcity === false && badbuilding === false && badpincode === false) {
//    if(adstate!=null){
//         await AsyncStorage.setItem('Address',JSON.stringify( [data,...adstate]))
//    }else{
//     await AsyncStorage.setItem('Address',JSON.stringify( [data]))
//    }

//       navigation.goBack()

//     }
//   }
//   useEffect(()=>{
//     getAddress()
//   },[])

//   return (
//     <View style={{ flex: 1, }}>

//       <View style={{
//         width: '100%', height: 60, justifyContent: 'space-between',
//         alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2, left: 5, backgroundColor: `#6a5acd`
//       }}>
//         <Text style={{ fontSize: 22, fontWeight: '600', color: '#000' }}> Fill Address</Text>
//         <Button onPress={() => navigation.navigate(HomeScreen)}>Go Home</Button>
//       </View>



//       <View style={{ marginHorizontal: 10, justifyContent: 'space-between', }}>
//         <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Enter city name"} left={<TextInput.Icon icon={"home"} />}
//           value={city}
//           onChangeText={(txt) => setCity(txt)} />
//         {badcity && <Text style={{ color: 'red' }}>Enter city name</Text>}

//         <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Enter building name"} left={<TextInput.Icon icon={"home"} />}
//           value={building}
//           onChangeText={(txt) => setBuilding(txt)} />
//         {badbuilding && <Text style={{ color: 'red' }}>Enter building name</Text>}

//         <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Enter Pincode name"} left={<TextInput.Icon icon={"home"} />}
//           value={pincode}
//           onChangeText={(txt) => setPincode(txt)} />
//         {badpincode && <Text style={{ color: 'red' }}>Enter pincode</Text>}
//         <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => Validation()}>Save Address</Button>

//       </View>



//     </View>
//   )
// }

// export default Addaddress



//////////////////////////////////////////////
import { View, Text, Alert, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import Geolocation from '@react-native-community/geolocation'
import Geocoder from 'react-native-geocoding';
import CustomColor, { theme } from '../CustomComponents/CustomColor'



const Addaddress = () => {


  const navigation = useNavigation();

  const [city, setCity] = useState("")
  const [building, setBuilding] = useState("")
  const [pincode, setPincode] = useState("")
  const [badcity, setBadCity] = useState(false)
  const [badbuilding, setBadBuilding] = useState(false)
  const [badpincode, setBadPincode] = useState(false)
  const [adstate, setAdstate] = useState([])

  const data = {
    "city": city,
    "building": building,
    "pincode": pincode
  }
  const getAddress = async () => {
    let data = await AsyncStorage.getItem("Address")

    setAdstate(JSON.parse(data))
  }

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
      if (adstate != null) {
        hey = await AsyncStorage.setItem('Address', JSON.stringify([data, ...adstate]))
      } else {
        await AsyncStorage.setItem('Address', JSON.stringify([data]))
      }

      navigation.goBack()

    }
  }
  useEffect(() => {
    getAddress()
  }, [])

  //Get Latitude & Longitude of user
  const getLatLong = () => {
    Geolocation.getCurrentPosition((data) => console.log("geolocation", data))
  }

  //Get Address From Latitude & Longitude  
  const getAddFromLatLong = () => {
    // initialize the library with your API key
    Geocoder.init("YOUR_API_KEY");
    // use the library to convert coordinates to an address
    const lat = 37.422;
    const lng = -122.084;

    Geocoder.from({ lat, lng })
      .then(json => {
        var addressComponent = json.results[0].formatted_address;
        console.log(addressComponent);
      })
      .catch(error => console.warn(error));

  }

  //Get Latitude & Longitude From Address
  const getLatLongFromAdd = () => {
    // initialize the library with your API key
    Geocoder.init("YOUR_API_KEY");

    // use the library to convert an address to coordinates
    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    Geocoder.from(address)
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log(location.lat, location.lng);
      })
      .catch(error => console.warn(error));
    // Note: To use this library, you will need to get an API key from a geocoding service such as Google Maps or OpenCage Data.
    //   Alternatively, you can use native modules for android & ios platforms for geocoding react - native - geolocation - service, react - native - geocoder etc as well.
  }


  return (
    <ImageBackground source={require('../Images/AllBg.png')} resizeMode='cover' style={{ flex: 1, justifyContent: 'center' }}>

      <View style={{ flex: 1, }}>

        <View style={{ width: '100%', height: '6.80%', backgroundColor: CustomColor.AppColor, elevation: 2, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
          <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}> Fill Address</Text>
          <Button style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, paddingTop: 14, fontWeight: '600' }} onPress={() => navigation.navigate(HomeScreen)}>Go Home</Button>
        </View>

        <View style={{ marginHorizontal: 10, marginTop: 30 }}>
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
          {/* <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => getLatLong()}>Save Address</Button>
        <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => getLatLongFromAdd()}>Save Address</Button>
        <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => getAddFromLatLong()}>Save Address</Button> */}


        </View>


      </View>
    </ImageBackground>

  )
}

export default Addaddress