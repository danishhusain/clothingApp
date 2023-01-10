import { Text, View, } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, TextInput, } from 'react-native-paper'
import { AuthContext } from '../Context/AuthContext';


const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { register, } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState('');

  // Handle submit Validation
  const handleSubmit = () => {
    if (!name) {
      setErrorMessage('Please enter your name');
    } else if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage('');
      // submit form data
      register(email, password, name)

    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>SignIn</Text>
      {/* Name, Email, Password,Confirm Pssword */}
      <View style={{ marginHorizontal: 10, justifyContent: 'space-between' }}>
        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Name"} left={<TextInput.Icon icon={"home"} />}
          value={name}
          autoComplete='name'
          onChangeText={(txt) => { setName(txt) }} />

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
          value={email} keyboardType='email-address'

          autoComplete='email'
          onChangeText={(txt) => { setEmail(txt) }} />

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
          value={password}
          autoComplete='password'

          onChangeText={(txt) => { setpassword(txt) }} />

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={" Confirm password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
          value={confirmPassword}
          autoComplete='password'
          onChangeText={(txt) => { setConfirmPassword(txt) }} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => handleSubmit(email, password, name)}>Sign In</Button>

        <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline' }}
          value={email}
          onPress={() => navigation.goBack()}>Alredy have Account</Text>
      </View>
    </View>

  )
}

export default SignIn
