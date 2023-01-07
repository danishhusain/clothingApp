// import { Text, View } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { IconButton, Button, TextInput, ActivityIndicator } from 'react-native-paper'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Loader from '../Common/Loader'
// import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import HomeScreen from './HomeScreen'
// import { useContext } from 'react'
// import { CartContext } from '../Context/CartContext'
// import { AuthContext } from '../Context/AuthContext'
// // import { GoogleSignin } from '@react-native-community/google-signin' //g3

// const LogIn = ({ navigation }) => {
//   const [email, setEmail] = useState('')
//   const [password, setpassword] = useState('')
//   const [bademail, setBademail] = useState(false)
//   const [badpassword, setBadpassword] = useState(false)
//   const [modalVisible, setModalVisible] = useState(false);
//   const [error, setError] = useState(false)
//   const {isSignedIn,setisSignedIn}=useContext(CartContext)
//   const {d,setd}=useContext(AuthContext)

//  //google
//  useEffect(()=> {
//   GoogleSignin.configure({
//     webClientId: ''
//     // webClientId: '<25645624812-g7tv0leasve9869e8etu18ro38ss0oav.apps.googleusercontent.com>'
//   });
// },[])
// // Somewhere in your code
// signIn = async () => {
// try {
//   await GoogleSignin.hasPlayServices();
//   //Google service are available
//   console.log("Google service are available")
//   const userInfo = await GoogleSignin.signIn();
//   // this.setState({ userInfo });
//   console.log("info",userInfo)
//   setisSignedIn(true)
//   navigation.navigate(HomeScreen)
// } catch (error) {
//   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//     // user cancelled the login flow
//   console.log("user cancelled the login flow")
//   } else if (error.code === statusCodes.IN_PROGRESS) {
//     // operation (e.g. sign in) is in progress already
//   console.log(" operation (e.g. sign in) is in progress already")

//   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//     // play services not available or outdated
//   console.log(" play services not available or outdated")

//   } else {
//     // some other error happened
//   console.log("some other error happened")
//   Alert.alert("Please Restart the app")

//   }
// }
// };

//   // validation Email & password
//   const Validation_Login = () => {
//     setModalVisible(true)
//     if (email.length == 0) {
//       setModalVisible(false)
//       setBademail(true)
//     }
//     else {
//       setBademail(false)
//     }
//     if (password.length == 0) {
//       setModalVisible(false)
//       setBadpassword(true)
//     } else {
//       setBadpassword(false)
//       setTimeout(() => {
//         getData();
//       }, 300);

//     }

//   }
//   //get Data from async storage
//   const getData = async () => {
//     const gEmail = await AsyncStorage.getItem("Email")
//     const gPass = await AsyncStorage.getItem("password")
//     if (email == gEmail && password == gPass) {

//       setModalVisible(false)
//       navigation.navigate('HomeScreen')
//     }
//     else {

//       setModalVisible(false)
//       console.log("Email,Pass of Async ST",gEmail,gPass)
//       setError(true)
//       // console.log("Error",error)
//     }
//   }
//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//       <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>LogIn</Text>
//       <View style={{ marginHorizontal: 10, justifyContent: 'space-between', marginBottom: 10 }}>
//         <TextInput value={email} style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
//           onChangeText={(txt) => setEmail(txt)} />
//         {
//           bademail && (<Text style={{ color: 'red' }}> Enter email</Text>)
//         }
//         <TextInput value={password} style={{ marginVertical: 5 }} mode='outlined' label={"password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
//           onChangeText={(txt) => setpassword(txt)} />
//         {badpassword && (<Text style={{ color: 'red' }}> Enter password</Text>)}
//         {error && <Text style={{ color: 'red', margin: 3 }}>Email or password  not matched</Text>}
//       </View>

//       <View style={{ alignContent: 'center', justifyContent: 'center', }}>
//         <Button mode='contained' onPress={() => Validation_Login()} style={{ marginBottom: 10 }}>LogIn</Button>

//         <GoogleSigninButton
//         style={{ width: "100%" , height: 48 ,}}
//         onPress={() => signIn()}
//         />

//         <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline' }}
//           onPress={() => navigation.navigate('SignIn')}>Create New Account</Text>

//         {/* < Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}

//       </View>
//       {modalVisible == true && < Loader />}

//     </View>
//   )
// }

// export default LogIn

// // const styles = StyleSheet.create({})
// import { Text, View } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { IconButton, Button, TextInput, ActivityIndicator } from 'react-native-paper'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Loader from '../Common/Loader'
// import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import HomeScreen from './HomeScreen'
// import { useContext } from 'react'
// import { CartContext } from '../Context/CartContext'
// import { AuthContext } from '../Context/AuthContext'
// // import { GoogleSignin } from '@react-native-community/google-signin' //g3

// const LogIn = ({ navigation }) => {
//   const [email, setEmail] = useState('')
//   const [password, setpassword] = useState('')
//   const [bademail, setBademail] = useState(false)
//   const [badpassword, setBadpassword] = useState(false)
//   const [modalVisible, setModalVisible] = useState(false);
//   const [error, setError] = useState(false)
//   const {isSignedIn,setisSignedIn}=useContext(CartContext)
//   const {d,setd}=useContext(AuthContext)
//   const {login2,logout2}=useContext(AuthContext)

//  //google
//  useEffect(()=> {
//   GoogleSignin.configure({
//     webClientId: ''
//     // webClientId: '<25645624812-g7tv0leasve9869e8etu18ro38ss0oav.apps.googleusercontent.com>'
//   });
// },[])
// // Somewhere in your code
// signIn = async () => {
// try {
//   await GoogleSignin.hasPlayServices();
//   //Google service are available
//   console.log("Google service are available")
//   const userInfo = await GoogleSignin.signIn();
//   // this.setState({ userInfo });
//   console.log("info",userInfo)
//   setisSignedIn(true)
//   navigation.navigate(HomeScreen)
// } catch (error) {
//   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//     // user cancelled the login flow
//   console.log("user cancelled the login flow")
//   } else if (error.code === statusCodes.IN_PROGRESS) {
//     // operation (e.g. sign in) is in progress already
//   console.log(" operation (e.g. sign in) is in progress already")

//   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//     // play services not available or outdated
//   console.log(" play services not available or outdated")

//   } else {
//     // some other error happened
//   console.log("some other error happened")
//   Alert.alert("Please Restart the app")

//   }
// }
// };

//   // validation Email & password
//   const Validation_Login = () => {
//     setModalVisible(true)
//     if (email.length == 0) {
//       setModalVisible(false)
//       setBademail(true)
//     }
//     else {
//       setBademail(false)
//     }
//     if (password.length == 0) {
//       setModalVisible(false)
//       setBadpassword(true)
//     } else {
//       setBadpassword(false)
//       setTimeout(() => {
//         getData();
//       }, 300);

//     }

//   }
//   //get Data from async storage
//   const getData = async () => {
//     const gEmail = await AsyncStorage.getItem("Email")
//     const gPass = await AsyncStorage.getItem("password")
//     if (email == gEmail && password == gPass) {

//       setModalVisible(false)
//       navigation.navigate('HomeScreen')
//     }
//     else {

//       setModalVisible(false)
//       console.log("Email,Pass of Async ST",gEmail,gPass)
//       setError(true)
//       // console.log("Error",error)
//     }
//   }
//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//       <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>LogIn </Text>
//       <View style={{ marginHorizontal: 10, justifyContent: 'space-between', marginBottom: 10 }}>
//         <TextInput value={email} style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
//           onChangeText={(txt) => setEmail(txt)} />
//         {
//           bademail && (<Text style={{ color: 'red' }}> Enter email</Text>)
//         }
//         <TextInput value={password} style={{ marginVertical: 5 }} mode='outlined' label={"password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
//           onChangeText={(txt) => setpassword(txt)} />
//         {badpassword && (<Text style={{ color: 'red' }}> Enter password</Text>)}
//         {error && <Text style={{ color: 'red', margin: 3 }}>Email or password  not matched</Text>}
//       </View>

//       <View style={{ alignContent: 'center', justifyContent: 'center', }}>
//         {/* <Button mode='contained' onPress={() => Validation_Login()} style={{ marginBottom: 10 }}>LogIn</Button> */}
//         <Button mode='contained' onPress={() => login2()} style={{ marginBottom: 10 }}>LogIn2</Button>

//         <GoogleSigninButton
//         style={{ width: "100%" , height: 48 ,}}
//         onPress={() => signIn()}
//         />

//         <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline' }}
//           onPress={() => navigation.navigate('SignIn')}>Create New Account</Text>

//         {/* < Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}

//       </View>
//       {modalVisible == true && < Loader />}

//     </View>
//   )
// }

// export default LogIn

// const styles = StyleSheet.create({})
// import { Text, View } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { IconButton, Button, TextInput, ActivityIndicator } from 'react-native-paper'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Loader from '../Common/Loader'
// import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
// import HomeScreen from './HomeScreen'
// import { useContext } from 'react'
// import { CartContext } from '../Context/CartContext'
// import { AuthContext } from '../Context/AuthContext'
// // import { GoogleSignin } from '@react-native-community/google-signin' //g3

// const LogIn = ({ navigation }) => {
//   const [email, setEmail] = useState('')
//   const [password, setpassword] = useState('')
//   const [bademail, setBademail] = useState(false)
//   const [badpassword, setBadpassword] = useState(false)
//   const [modalVisible, setModalVisible] = useState(false);
//   const [error, setError] = useState(false)
//   const {isSignedIn,setisSignedIn}=useContext(CartContext)
//   const {d,setd}=useContext(AuthContext)

//  //google
//  useEffect(()=> {
//   GoogleSignin.configure({
//     webClientId: ''
//     // webClientId: '<25645624812-g7tv0leasve9869e8etu18ro38ss0oav.apps.googleusercontent.com>'
//   });
// },[])
// // Somewhere in your code
// signIn = async () => {
// try {
//   await GoogleSignin.hasPlayServices();
//   //Google service are available
//   console.log("Google service are available")
//   const userInfo = await GoogleSignin.signIn();
//   // this.setState({ userInfo });
//   console.log("info",userInfo)
//   setisSignedIn(true)
//   navigation.navigate(HomeScreen)
// } catch (error) {
//   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//     // user cancelled the login flow
//   console.log("user cancelled the login flow")
//   } else if (error.code === statusCodes.IN_PROGRESS) {
//     // operation (e.g. sign in) is in progress already
//   console.log(" operation (e.g. sign in) is in progress already")

//   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//     // play services not available or outdated
//   console.log(" play services not available or outdated")

//   } else {
//     // some other error happened
//   console.log("some other error happened")
//   Alert.alert("Please Restart the app")

//   }
// }
// };

//   // validation Email & password
//   const Validation_Login = () => {
//     setModalVisible(true)
//     if (email.length == 0) {
//       setModalVisible(false)
//       setBademail(true)
//     }
//     else {
//       setBademail(false)
//     }
//     if (password.length == 0) {
//       setModalVisible(false)
//       setBadpassword(true)
//     } else {
//       setBadpassword(false)
//       setTimeout(() => {
//         getData();
//       }, 300);

//     }

//   }
//   //get Data from async storage
//   const getData = async () => {
//     const gEmail = await AsyncStorage.getItem("Email")
//     const gPass = await AsyncStorage.getItem("password")
//     if (email == gEmail && password == gPass) {

//       setModalVisible(false)
//       navigation.navigate('HomeScreen')
//     }
//     else {

//       setModalVisible(false)
//       console.log("Email,Pass of Async ST",gEmail,gPass)
//       setError(true)
//       // console.log("Error",error)
//     }
//   }
//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//       <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>LogIn</Text>
//       <View style={{ marginHorizontal: 10, justifyContent: 'space-between', marginBottom: 10 }}>
//         <TextInput value={email} style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
//           onChangeText={(txt) => setEmail(txt)} />
//         {
//           bademail && (<Text style={{ color: 'red' }}> Enter email</Text>)
//         }
//         <TextInput value={password} style={{ marginVertical: 5 }} mode='outlined' label={"password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
//           onChangeText={(txt) => setpassword(txt)} />
//         {badpassword && (<Text style={{ color: 'red' }}> Enter password</Text>)}
//         {error && <Text style={{ color: 'red', margin: 3 }}>Email or password  not matched</Text>}
//       </View>

//       <View style={{ alignContent: 'center', justifyContent: 'center', }}>
//         <Button mode='contained' onPress={() => Validation_Login()} style={{ marginBottom: 10 }}>LogIn</Button>

//         <GoogleSigninButton
//         style={{ width: "100%" , height: 48 ,}}
//         onPress={() => signIn()}
//         />

//         <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline' }}
//           onPress={() => navigation.navigate('SignIn')}>Create New Account</Text>

//         {/* < Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}

//       </View>
//       {modalVisible == true && < Loader />}

//     </View>
//   )
// }

// export default LogIn

// const styles = StyleSheet.create({})
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import {IconButton,Button,TextInput,ActivityIndicator,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../Common/Loader';
import {GoogleSignin,statusCodes,GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import HomeScreen from './HomeScreen';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { AuthContext } from '../Context/AuthContext';
import Profile from '../Bottom/Profile';
import auth from '@react-native-firebase/auth';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const { isSignedIn, setisSignedIn } = useContext(CartContext);
  const { login2, ResetEmailVerification, isLoading, setIsLoading, } = useContext(AuthContext);
  const [hidePassword, setHidePassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  //  //google
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '662105668477-jg2e8sg8vfvph07meoof2ap6fpntpmqe.apps.googleusercontent.com',
      offlineAccess: true,
      // accountName:true,

    });
  });
  //Google LogIn
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

  //   // validation Email & password
  //   const Validation_Login = () => {
  //     setModalVisible(true)
  //     if (email.length == 0) {
  //       setModalVisible(false)
  //       setBademail(true)
  //     }
  //     else {
  //       setBademail(false)
  //     }
  //     if (password.length == 0) {
  //       setModalVisible(false)
  //       setBadpassword(true)
  //     } else {
  //       setBadpassword(false)
  //       setTimeout(() => {
  //         getData();
  //       }, 300);

  //     }

  //   }
  //   //get Data from async storage
  //   const getData = async () => {
  //     const gEmail = await AsyncStorage.getItem("Email")
  //     const gPass = await AsyncStorage.getItem("password")
  //     if (email == gEmail && password == gPass) {

  //       setModalVisible(false)
  //       navigation.navigate('HomeScreen')
  //     }
  //     else {

  //       setModalVisible(false)
  //       console.log("Email,Pass of Async ST",gEmail,gPass)
  //       setError(true)
  //       // console.log("Error",error)
  //     }
  //   }

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
      <View
        style={{
          marginHorizontal: 10,
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
        <TextInput
          keyboardType="email-address"
          autoComplete="email"
          value={email}
          style={{ marginVertical: 5 }}
          mode="outlined"
          label={'Email'}
          left={<TextInput.Icon icon={'email'} />}
          onChangeText={txt => setEmail(txt)}
        />
        <TextInput
          autoComplete="password"
          value={password}
          style={{ marginVertical: 5 }}
          mode="outlined"
          label={'password'}
          secureTextEntry={hidePassword}
          left={<TextInput.Icon icon={'key'} />}
          right={
            <TextInput.Icon
              onPress={() => togglePasswordVisibility()}
              icon="eye"
            />
          }

          onChangeText={txt => setpassword(txt)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <TouchableOpacity
          style={{ alignItems: 'flex-end' }}
          onPress={() => {
            ResetEmailVerification(email);
          }}>
          <Text
            style={{ color: 'blue' }}
            onPress={() => {
              ResetEmailVerification(email);
            }}>
            Forget?{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignContent: 'center', justifyContent: 'center' }}>
        <Button
          mode="contained"
          onPress={() => {
            handleSubmit(email, password);
          }}
          style={{ marginBottom: 10 }}>
          LogIn2
        </Button>

        <GoogleSigninButton
          style={{ width: '100%', height: 48 }}
          onPress={() => onGoogleButtonPress()}
        />

        <Text
          style={{
            fontSize: 25,
            fontWeight: '400',
            alignSelf: 'center',
            textDecorationLine: 'underline',
          }}
          onPress={() => navigation.navigate('SignIn')}>
          Create New Account
        </Text>

        {/* < Loader modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
      </View>
      {modalVisible == true && <Loader />}
      {/* </ImageBackground> */}

    </View>
  );
};

export default LogIn;

// const styles = StyleSheet.create({})
