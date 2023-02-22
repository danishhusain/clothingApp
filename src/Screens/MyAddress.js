import { View, Text, ScrollView, TouchableOpacity, ImageBackground, } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, IconButton } from 'react-native-paper'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import Addaddress from './AddAddress'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Sent } from './AddAddress'
import { CartContext } from '../Context/CartContext'
import { FlatList } from 'react-native-gesture-handler'
import CustomColor from '../CustomComponents/CustomColor'
import { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';







const MyAddress = () => {
  const [adData, setAdData] = useState([])
  const [deleteAdd, setDeleteAdd] = useState([])
  // const{adData,setAdData}=useContext(CartContext)
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const db = firebase.firestore()

  const Delete = async () => {
    // try {
    //   await AsyncStorage.removeItem("Address");
    //   return true;
    // }
    // catch (exception) {
    //   return false;
    // }
    db.collection('users').doc(firebase.auth().currentUser.uid).update({
      myAddressArray: firestore.FieldValue.arrayRemove(deleteAdd)
    })
      .then(() => {
        // console.log('Array element deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting array element: ', error);
      });
  }
  // const getAddress = async () => {
  //   let mdata = await AsyncStorage.getItem("Address")
  //   setAdData(JSON.parse(mdata))
  // }

  // useEffect(() => {
  //   getAddress()
  // }, [isFocused])

  /// Getting the cart from the server
  useEffect(() => {
    db.collection('users').doc(firebase.auth().currentUser.uid).get().then((doc) => {
      if (doc.exists) {
        db.collection('users').doc(firebase.auth().currentUser.uid)
          .onSnapshot(documentSnapshot => {
            // console.log('User data: ', documentSnapshot.data().myAddressArray);
            setAdData(documentSnapshot.data().myAddressArray)
          })
          .then(() => {
            console.log('Got It Whishlist Data!');
          })
          .catch(() => {
            console.log('Error while Getting Whishlist Data!');
          })
      } else {
        console.log('Else-getWhislist')
      }
    })
  }, [])
  return (
    <View style={{ flex: 1 }}>

      <View style={{ width: '100%', height: '6.80%', backgroundColor: CustomColor.AppColor, elevation: 2, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
        <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>My Address</Text>
        <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, paddingTop: 14, fontWeight: '600' }} onPress={() => navigation.navigate(Addaddress)}>Add Address</Button>
      </View>

      <View style={{ flex: 1, borderBottomWidth: 0.2, borderBottomColor: '#000', top: 1 }}>
        {adData && <FlatList
          data={adData}
          renderItem={({ item }) =>
            <View style={{ width: '100%', backgroundColor: '#B0A0FF', borderBottomWidth: 1, borderBottomColor: 'white' }}>

              <Text style={{ color: "white", fontSize: 16, paddingLeft: 5 }}>City:{item.city}</Text>
              <Text style={{ color: "white", fontSize: 16, paddingLeft: 5 }}>Building:{item.building}</Text>
              <Text style={{ color: "white", fontSize: 16, paddingLeft: 5 }}>Pincode:{item.pincode}</Text>
              <IconButton icon={'delete'} iconColor={'white'} style={{ position: 'absolute', right: 1, top: 10 }}
                onPress={() => {Delete(),setDeleteAdd(item)}}
              >Delete</IconButton>

            </View>
          }

        />}
      </View>

    </View>

  )
}

export default MyAddress