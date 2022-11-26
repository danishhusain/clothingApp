import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton, Button, TextInput ,ActivityIndicator} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../Common/Loader'

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [passward, setPassward] = useState('')
  const [bademail, setBademail] = useState(false)
  const [badpassward, setBadpassward] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false)


  const Validaton_Login = () => {

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
      }, 3000);

    }

  }

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
      <View style={{ marginHorizontal: 10, justifyContent: 'space-between', flex: 0.3 }}>
        <TextInput value={email} style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
          onChangeText={(txt) => setEmail(txt)} />
        {
          bademail && (<Text style={{ color: 'red' }}>Enter email</Text>)
        }
        <TextInput value={passward} style={{ marginVertical: 5 }} mode='outlined' label={"Passward"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
          onChangeText={(txt) => setPassward(txt)} />
        {
          badpassward && (<Text style={{ color: 'red' }}>Enter passward</Text>)
        }
        {error && <Text style={{ color: 'red', margin: 3 }}>Email or Passward does not match</Text>}
        <Button mode='contained' onPress={() => Validaton_Login()}>LogIn</Button>
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