import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  IconButton,
  Badge,
  Appbar,
  Drawer,
  Menu,
  Divider,
  Provider,
  Modal,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Offers from '../Screens/Offers';
import MyOrders from '../Screens/MyOrders';
import {useNavigation} from '@react-navigation/native';
import MyAddress from '../Screens/MyAddress';
import Addaddress from '../Screens/AddAddress';
import LogoutScreen from '../Screens/LogoutScreen';
import LogIn from '../Screens/LogIn';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import Navigation from '../Navigation';
import {firebase} from '@react-native-firebase/auth';
import Camera from '../Common/LaunchCamera';



const Profile = () => {
  const navigation = useNavigation();
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
  const {logout2, logout_g} = useContext(AuthContext);
  const user = firebase.auth().currentUser;

  //signOut
  signOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log('signOut', {user: null});
      navigation.navigate(LogIn);
    } catch (error) {
      console.error(error);
    }
  };

  // console
  // console.log("profile",logout2)

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: `#6a5acd`,
        }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            color: '#000',
            left: 5,
            color: 'white',
            left: 15,
          }}>
          Profile
        </Text>
        <IconButton
          icon={MORE_ICON}
          size={25}
          onPress={() => console.log('boom')}
          style={{position: 'absolute', right: 5, top: 5}}
          iconColor={'white'}></IconButton>
      </View>
      {/* //image Component */}
      <View style={{height:250,width:'100%'}}>
      {/* <Image source={require('../Images/playstore.png')} style={{width: 150, height: 150, alignSelf: 'center'}}/>
     
      <Text
        style={{fontSize: 20,color: `#6a5acd`, fontWeight: '1000', fontWeight: '600', alignSelf: 'center',}}>
        {user ? user.displayName : null}
      </Text> */}
      <Camera/>
      </View>

      {/* //other Component */}
      <View style={{flex: 1, alignContent: 'center'}}>
        <TouchableOpacity
          style={{
            borderBottomWidth: 0.2,
            height: 40,
            width: '90%',
            left: 10,
            top: 10,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate(MyAddress)}>
          <Text style={{color: `#6a5acd`, fontWeight: '600'}}>My Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomWidth: 0.2,
            height: 40,
            width: '90%',
            left: 10,
            top: 10,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate(MyOrders)}>
          <Text style={{color: `#6a5acd`, fontWeight: '600'}}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomWidth: 0.2,
            height: 40,
            width: '90%',
            left: 10,
            top: 10,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate(Offers)}>
          <Text style={{color: `#6a5acd`, fontWeight: '600'}}>Offers</Text>
        </TouchableOpacity>
      </View>
  
    <View style={{flex: 2.1, alignItems: 'center'}}>
        <IconButton
          icon={'logout'}
          size={30}
          onPress={() => {
            logout_g();
          }}></IconButton>
        <Text
          onPress={() => {
            logout_g();
          }}
          style={{fontWeight: '500', size: 20, color: `#6a5acd`}}>
          Logout
        </Text>
      </View>
    </View>
  );
};

export default Profile;
