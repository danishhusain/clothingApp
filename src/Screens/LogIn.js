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
import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { IconButton, Button, TextInput, ActivityIndicator } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from '../Common/Loader'
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import HomeScreen from './HomeScreen'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { AuthContext } from '../Context/AuthContext'
// import { GoogleSignin } from '@react-native-community/google-signin' //g3





const LogIn = ({ navigation, }) => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [bademail, setBademail] = useState(false)
  const [badpassword, setBadpassword] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false)
  const { isSignedIn, setisSignedIn } = useContext(CartContext)
  const { d, setd } = useContext(AuthContext)
  const { login2, logout2, signIn_g, ResetEmailVerification } = useContext(AuthContext)
  const [hidePassword, setHidePassword] = useState(true);

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

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>LogIn </Text>
      <View style={{ marginHorizontal: 10, justifyContent: 'space-between', marginBottom: 10 }}>
        <TextInput keyboardType='email-address' autoComplete='email' value={email} style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
          onChangeText={(txt) => setEmail(txt)} />
        {/* {
          bademail && (<Text style={{ color: 'red' }}> Enter email</Text>)
        } */}
        <TextInput autoComplete='password' value={password} style={{ marginVertical: 5 }} mode='outlined' label={"password"} secureTextEntry={hidePassword} left={<TextInput.Icon icon={"key"} />}
          right={<TextInput.Icon onPress={() => togglePasswordVisibility()} icon='eye'  />}

          onChangeText={(txt) => setpassword(txt)} />
        {/* {badpassword && (<Text style={{ color: 'red' }}> Enter password</Text>)}
        {error && <Text style={{ color: 'red', margin: 3 }}>Email or password  not matched</Text>} */}
        <TouchableOpacity style={{ alignItems: 'flex-end', }} onPress={() => { ResetEmailVerification(email) }}>
          <Text style={{ color: 'blue' }} onPress={() => { ResetEmailVerification(email) }}>Forget? </Text >
        </TouchableOpacity>
      </View>

      <View style={{ alignContent: 'center', justifyContent: 'center', }}>
        {/* <Button mode='contained' onPress={() => Validation_Login()} style={{ marginBottom: 10 }}>LogIn</Button> */}
        {/* <Button mode='contained' onPress={() => login2()} style={{ marginBottom: 10 }}>LogIn2</Button> */}

        <Button mode='contained' onPress={() => { login2(email, password) }} style={{ marginBottom: 10 }} >LogIn2</Button>

        <GoogleSigninButton
          style={{ width: "100%", height: 48, }}
          onPress={() => signIn_g()}
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