import { Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IconButton, Button, TextInput, ActivityIndicator } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../Common/Loader'
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import HomeScreen from './HomeScreen'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
// import { GoogleSignin } from '@react-native-community/google-signin' //g3





const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [passward, setPassward] = useState('')
  const [bademail, setBademail] = useState(false)
  const [badpassward, setBadpassward] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false)
  const {isSignedIn,setisSignedIn}=useContext(CartContext)

 //google
 useEffect(()=> {
  GoogleSignin.configure({
    webClientId: ''
    // webClientId: '<25645624812-g7tv0leasve9869e8etu18ro38ss0oav.apps.googleusercontent.com>'
  });
},[])
// Somewhere in your code
signIn = async () => {
try {
  await GoogleSignin.hasPlayServices();
  //Google service are available
  console.log("Google service are available")
  const userInfo = await GoogleSignin.signIn();
  // this.setState({ userInfo });
  console.log("info",userInfo)
  setisSignedIn(true)
  navigation.navigate(HomeScreen)
} catch (error) {
  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    // user cancelled the login flow
  console.log("user cancelled the login flow")
  } else if (error.code === statusCodes.IN_PROGRESS) {
    // operation (e.g. sign in) is in progress already
  console.log(" operation (e.g. sign in) is in progress already")

  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    // play services not available or outdated
  console.log(" play services not available or outdated")

  } else {
    // some other error happened
  console.log("some other error happened")
  Alert.alert("Please Restart the app")

  }
}
};
// //getCurrenyUser
// getCurrentUser = async () => {
// const currentUser = await GoogleSignin.getCurrentUser();
// // this.setState({ currentUser });
// console.log("currentUser",currentUser)
// };
// //signOut
// signOut = async () => {
// try {
//   await GoogleSignin.signOut();
//   // this.setState({ user: null }); // Remember to remove the user from your app's state as well
// console.log("signOut",{user:null})
// } catch (error) {
//   console.error(error);
// }
// };


  // validation Email & passward
  const Validation_Login = () => {
    setModalVisible(true)
    if (email.length == 0) {
      setModalVisible(false)
      setBademail(true)
    }
    else {
      setBademail(false)
    }
    if (passward.length == 0) {
      setModalVisible(false)
      setBadpassward(true)
    } else {
      setBadpassward(false)
      setTimeout(() => {
        getData();
      }, 300);

    }

  }
  //get Data from async storage
  const getData = async () => {
    const gEmail = await AsyncStorage.getItem("Email")
    const gPass = await AsyncStorage.getItem("Passward")
    if (email == gEmail && passward == gPass) {

      setModalVisible(false)
      navigation.navigate('HomeScreen')
    }
    else {

      setModalVisible(false)
      console.log(gEmail, gPass)
      setError(true)
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>LogIn</Text>
      <View style={{ marginHorizontal: 10, justifyContent: 'space-between', marginBottom: 10 }}>
        <TextInput value={email} style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
          onChangeText={(txt) => setEmail(txt)} />
        {
          bademail && (<Text style={{ color: 'red' }}> Enter email</Text>)
        }
        <TextInput value={passward} style={{ marginVertical: 5 }} mode='outlined' label={"Passward"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
          onChangeText={(txt) => setPassward(txt)} />
        {badpassward && (<Text style={{ color: 'red' }}> Enter passward</Text>)}
        {error && <Text style={{ color: 'red', margin: 3 }}>Email or Passward  not matched</Text>}
      </View>

      <View style={{ alignContent: 'center', justifyContent: 'center', }}>
        <Button mode='contained' onPress={() => Validation_Login()} style={{ marginBottom: 10 }}>LogIn</Button>

        <GoogleSigninButton 
        style={{ width: "100%" , height: 48 ,}}
        onPress={() => signIn()}
        />

        <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline' }}
          onPress={() => navigation.navigate('SignIn')}>Create New Account</Text>

        {/* < Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}


      </View>
      {modalVisible == true && < Loader />}



    </View>
  )
}

export default LogIn

// const styles = StyleSheet.create({})