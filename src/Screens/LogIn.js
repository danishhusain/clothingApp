import { Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IconButton, Button, TextInput, ActivityIndicator } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../Common/Loader'
import Firebase from '../FireBase/Firebase'

import { GoogleSignin,statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [passward, setPassward] = useState('')
  const [bademail, setBademail] = useState(false)
  const [badpassward, setBadpassward] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false)


  //UseEffect Google SignIn
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1095484900051-gk2nijhng0cvs6vuurbb011he0ns0ljm.apps.googleusercontent.com',
    });
  }, [])

  // // Google SignIn
  // const googleSihnIn = async () => {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // Get the users ID token
  //   // const { idToken } = await GoogleSignin.signIn();
  //   const { idToken } = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }


  // Somewhere in your code
  const googleSihnIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log("userInfo", userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error)
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)

        // play services not available or outdated
      } else {
        console.log(error)

        // some other error happened
      }
    }
  };



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
        <Button mode='contained' onPress={() => {
          googleSihnIn()
            // .then(res => { console.log("res", res) })
            // .catch(error => { console.log(">>", error) })
        }
        }>SignIn in with Google</Button>
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