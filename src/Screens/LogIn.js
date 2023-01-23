import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, TextInput, } from 'react-native-paper';
import Loader from '../Common/Loader';
import { GoogleSignin, GoogleSigninButton, } from '@react-native-google-signin/google-signin';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import auth from '@react-native-firebase/auth';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { login, ResetEmailVerification, } = useContext(AuthContext);
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  ////UseEfffect for google signIn
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '662105668477-jg2e8sg8vfvph07meoof2ap6fpntpmqe.apps.googleusercontent.com',
      offlineAccess: true,
      // accountName:true,

    });
  });

  //Google LogIn with Token
  const onGoogleButtonPress = async () => {
    // setIsLoading(true)
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    console.log('Id Token 1', idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('Succesfuuly Create a Google credential with the token  token:', googleCredential);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    // const user_signin_in = auth().signInWithCredential(googleCredential);
    // console.log('Sign-in the user with the credential');

    // user_signin_in
    //   .then(user => {
    //     console.log('userInffo', user);
    //   })
    //   .then(e => {
    //     console.log('userInfo error', e);
    //   });
    // setIsLoading(false)

  };

  //validation
  const handleSubmit = () => {
    if (!email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
    } else if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters');
    } else {
      setErrorMessage('');
      // submit form data
      login2(email, password);
    }
  };

  //Togal Password
  const togglePasswordVisibility = () => {
    setHidePassword(hidePassword => !hidePassword);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {/* <ImageBackground source={require('../Images/bgImage.webp')}  resizeMode='stretch' style={{ flex: 1, justifyContent: 'center' }}> */}
      
      <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>
        LogIn{' '}
      </Text>

      {/* EmailInput ,PasswordInput and toggle */}
      <View
        style={{ marginHorizontal: 10, justifyContent: 'space-between', marginBottom: 10, }}>
        <TextInput keyboardType="email-address" autoComplete="email" value={email} style={{ marginVertical: 5 }} mode="outlined" label={'Email'} left={<TextInput.Icon icon={'email'} />} onChangeText={txt => setEmail(txt)} />
        <TextInput autoComplete="password" value={password} style={{ marginVertical: 5 }} mode="outlined" label={'password'} secureTextEntry={hidePassword} left={<TextInput.Icon icon={'key'} />} right={
          <TextInput.Icon onPress={() => togglePasswordVisibility()} icon="eye" />}
          onChangeText={txt => setpassword(txt)} />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => { ResetEmailVerification(email); }}>
          <Text style={{ color: 'blue' }} onPress={() => { ResetEmailVerification(email); }}>Forget?{' '}  </Text>
        </TouchableOpacity>
      </View>

      {/* LogIn,LogIn with Google and create new acc */}
      <View style={{ alignContent: 'center', justifyContent: 'center' }}>
        <Button mode="contained" onPress={() => { handleSubmit(email, password); }} style={{ marginBottom: 10 }}>LogIn</Button>

        <GoogleSigninButton style={{ width: '100%', height: 48 }} onPress={() => onGoogleButtonPress()} />

        <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline', }} onPress={() => navigation.navigate('SignIn')}>  Create New Account  </Text>
      </View>
      {/* </ImageBackground> */}

    </View>
  );
};

export default LogIn;
