import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Button, IconButton, } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Offers from '../Screens/Offers'
import MyOrders from '../Screens/MyOrders'
import { useNavigation } from '@react-navigation/native'
import MyAddress from '../Screens/MyAddress'
import Addaddress from '../Screens/AddAddress'


const Profile = () => {

 const navigation=useNavigation();
 
  return (

    <View style={{ flex: 1,  }}>
      <View style={{
        width: '100%', height: 70, justifyContent: 'space-between',
        alignItems: 'center', flexDirection: 'row',
      }}>

        <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', left: 5 }}>Profile</Text>
        <IconButton icon={'home'} size={25} onPress={() => console.log("set")}
          style={{ position: 'absolute', right: 5, top: 5 }}
        ></IconButton>
      </View>
      <Image source={require('../Images/playstore.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />
      
      <Text style={{fontSize:20,color:'black',fontWeight:'600',alignSelf:'center'}}>Danish</Text>
      <View style={{flex:1}}>
      <TouchableOpacity style={{borderBottomWidth:0.2,height:40,width:'90%',left:10,top:10,marginTop:10}}
      onPress={()=>navigation.navigate(MyAddress)}>
        <Text>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth:0.2,height:40,width:'90%',left:10,top:10,marginTop:10}}
      onPress={()=>navigation.navigate(MyOrders)}>
        <Text>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderBottomWidth:0.2,height:40,width:'90%',left:10,top:10,marginTop:10}}
      onPress={()=>navigation.navigate(Offers)}>
        <Text>Offers</Text>
      </TouchableOpacity>
      

      </View>
      
    </View>
  )
}

export default Profile;