import { Text, View, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { IconButton, Button, TextInput, } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {  statusCodes } from '@react-native-google-signin/google-signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [passward, setPassward] = useState("")
  const [name, setName] = useState("")
  const [confirmpassward, setConfirmpassward] = useState("")
  const [bademail, setBademail] = useState(false)
  const [badpassward, setBadpassward] = useState(false)
  const [badconfirmpassward, setBadconfirmpassward] = useState(false)
  const [badname, setbadName] = useState(false)



// validation
  const Validation = (txt) => {
    if (name.length == 0) {
      setbadName(true)
    } else {
      setbadName(false)
    }
    if (email.length == 0) {
      setBademail(true)

    } else {
      setBademail(false)
    }
    if (passward.length == 0) {
      setBadpassward(true)

    } else {
      setBadpassward(false)
    }
    if (confirmpassward.length == 0) {
      setBadconfirmpassward(true)

    } else {
      setBadconfirmpassward(false)
      saveData()
      // AuthsignIn()


    }

  }
  // save in async storage
  const saveData = async () => {
    // console.log("ok")
    if (badname === false && bademail === false && badpassward === false && badconfirmpassward === false) {
      await AsyncStorage.setItem('Name', name)
      await AsyncStorage.setItem('Email', email)
      await AsyncStorage.setItem('Passward', passward)
      navigation.goBack();
      // AuthsignIn()

    }
  }

  // GoogleSignin.configure({
  //   webClientId: '662105668477-jg2e8sg8vfvph07meoof2ap6fpntpmqe.apps.googleusercontent.com',
  // });

  // AuthsignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     await GoogleSignin.signOut()
  //     const userInfo = await GoogleSignin.signIn();
  //     // this.setState({ userInfo });
  //     console.log("UserInfo",userInfo)
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  //   // console.log(">")
  // };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>

      <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>SignIn</Text>
      <View style={{ marginHorizontal: 10, justifyContent: 'space-between' }}>
        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Name"} left={<TextInput.Icon icon={"home"} />}
          value={name}
          onChangeText={(txt) => { setName(txt) }} />
        {badname && <Text style={{ color: 'red' }}>enter name</Text>}

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
          value={email}
          onChangeText={(txt) => { setEmail(txt) }} />
        {bademail && <Text style={{ color: 'red' }}>enter email</Text>}

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Passward"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
          value={passward}
          onChangeText={(txt) => { setPassward(txt) }} />
        {badpassward && <Text style={{ color: 'red' }}>enter passward</Text>}

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={" Confirm Passward"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
          value={confirmpassward}
          onChangeText={(txt) => { setConfirmpassward(txt) }} />
        {badconfirmpassward && <Text style={{ color: 'red' }}>enter confirm passward</Text>}

        <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => Validation()}>Sign In</Button>

        <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline' }}
          value={email}
          onPress={() => navigation.goBack()}>Alredy have Account</Text>

      </View>
    </View>

  )
}

export default SignIn
// const styles = StyleSheet.create({})