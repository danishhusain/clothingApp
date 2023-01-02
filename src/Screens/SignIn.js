// import { Text, View, } from 'react-native'
// import React, { useState } from 'react'
// import { IconButton, Button, TextInput, } from 'react-native-paper'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
// import { useEffect } from 'react'


// const SignIn = ({ navigation }) => {
//   const [email, setEmail] = useState("")
//   const [password, setpassword] = useState("")
//   const [name, setName] = useState("")
//   const [confirmpassword, setConfirmpassword] = useState("")
//   const [bademail, setBademail] = useState(false)
//   const [badpassword, setBadpassword] = useState(false)
//   const [badconfirmpassword, setBadconfirmpassword] = useState(false)
//   const [badname, setbadName] = useState(false)
//   const [passwordconfirmpassword, setpasswordconfirmpassword] = useState(false)



// // //Camera  permissions
// // const requestCameraPermission = ()=> {
// //   request(PERMISSIONS.ANDROID.CAMERA).then((response)=>{
// //       console.log(response)
// //   })
// // }
// // //Camera  permissions useEffect
// // useEffect(()=> {
// //   requestCameraPermission()
// // },[])
// // //Location  permissions
// // const requestLocationPermission = ()=> {
// //   request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((response)=>{
// //       console.log(response)
// //   })
// // }
// // //Location  permissions useEffect
// // useEffect(()=> {
// //   requestLocationPermission()
// // },[])
// // //Storage  permissions
// // const requestStoragePermission = ()=> {
// //   request(PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION).then((response)=>{
// //       console.log(response)
// //   })
// // }
// // //Storage  permissions useEffect
// // useEffect(()=> {
// //   requestStoragePermission()
// // },[])
// // //check  camera Permissions
// // const checkPermission=()=> {
// //   check(PERMISSIONS.ANDROID.CAMERA)
// //   .then((result) => {
// //     switch (result) {
// //       case RESULTS.UNAVAILABLE:
// //         console.log('This feature is not available (on this device / in this context)');
// //         break;
// //       case RESULTS.DENIED:
// //         console.log('The permission has not been requested / is denied but requestable');
// //         break;
// //       case RESULTS.LIMITED:
// //         console.log('The permission is limited: some actions are possible');
// //         break;
// //       case RESULTS.GRANTED:
// //         console.log('The permission is granted');
// //         break;
// //       case RESULTS.BLOCKED:
// //         console.log('The permission is denied and not requestable anymore');
// //         break;
// //     }
// //   })
// //   .catch((error) => {
// //     // …
// //   });
// // }

//   // validation
//   const Validation = (txt) => {
//     if (name.length == 0) {
//       setbadName(true)
//     } else {
//       setbadName(false)
//     }
//     if (email.length == 0) {
//       setBademail(true)

//     } else {
//       setBademail(false)
//     }
//     if (password.length == 0) {
//       setBadpassword(true)

//     } else {
//       setBadpassword(false)
//     }
//     if (confirmpassword.length == 0) {
//       setBadconfirmpassword(true)

//     } else {
//       setBadconfirmpassword(false)
//       passwordNotMatched()
//     }
    
//   }

//   //password not matched
//   const passwordNotMatched=()=> {
//     if (password !== confirmpassword) {
//       setpasswordconfirmpassword(true)
//     }
//       else {
//       saveData()
//       }
//   }
//   // save in async storage
//   const saveData = async () => {
//     // console.log("ok")
//     if (badname === false && bademail === false && badpassword === false && badconfirmpassword === false) {
//       await AsyncStorage.setItem('Name', name)
//       await AsyncStorage.setItem('Email', email)
//       await AsyncStorage.setItem('password', password)
//       navigation.goBack();
     

//     }
//   }


//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>

//       <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>SignIn</Text>
//       <View style={{ marginHorizontal: 10, justifyContent: 'space-between' }}>
//         <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Name"} left={<TextInput.Icon icon={"home"} />}
//           value={name}
//           onChangeText={(txt) => { setName(txt) }} />
//         {badname && <Text style={{ color: 'red' }}>enter name</Text>}

//         <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
//           value={email}
//           onChangeText={(txt) => { setEmail(txt) }} />
//         {bademail && <Text style={{ color: 'red' }}>enter email</Text>}

//         <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
//           value={password}
//           onChangeText={(txt) => { setpassword(txt) }} />
//         {badpassword && <Text style={{ color: 'red' }}>enter password</Text>}

//         <TextInput style={{ marginVertical: 5 }} mode='outlined' label={" Confirm password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
//           value={confirmpassword}
//           onChangeText={(txt) => { setConfirmpassword(txt) }} />
//         {badconfirmpassword && <Text style={{ color: 'red' }}>enter confirm password</Text>}
//         {passwordconfirmpassword && <Text style={{ color: 'red' }}>password does not matched</Text>}

//         <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => Validation()}>Sign In</Button>

//         <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline' }}
//           value={email}
//           onPress={() => navigation.goBack()}>Alredy have Account</Text>
//       </View>

//       {/* /for testing */}
//       {/* <View>
//         <Button mode='contained' onPress={()=>requestCameraPermission()}>Camera</Button>
//         <Button mode='contained' onPress={()=>requestLocationPermission()}>Location</Button>
//         <Button mode='contained' onPress={()=>requestStoragePermission()}>Storage</Button>
//         <Button mode='contained' onPress={()=>checkPermission()}>CP</Button>
//       </View> */}
//     </View>

//   )
// }

// export default SignIn



import { Text, View, } from 'react-native'
import React, { useContext, useState } from 'react'
import { IconButton, Button, TextInput, } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';


const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [name, setName] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [bademail, setBademail] = useState(false)
  const [badpassword, setBadpassword] = useState(false)
  const [badconfirmpassword, setBadconfirmpassword] = useState(false)
  const [badname, setbadName] = useState(false)
  const [passwordconfirmpassword, setpasswordconfirmpassword] = useState(false)
  const {register,ResetEmailVerification}=useContext(AuthContext)


  // // validation
  // const Validation = (txt) => {
  //   if (name.length == 0) {
  //     setbadName(true)
  //   } else {
  //     setbadName(false)
  //   }
  //   if (email.length == 0) {
  //     setBademail(true)

  //   } else {
  //     setBademail(false)
  //   }
  //   if (password.length == 0) {
  //     setBadpassword(true)

  //   } else {
  //     setBadpassword(false)
  //   }
  //   if (confirmpassword.length == 0) {
  //     setBadconfirmpassword(true)

  //   } else {
  //     setBadconfirmpassword(false)
  //     passwordNotMatched()
  //   }
    
  // }

  // //password not matched
  // const passwordNotMatched=()=> {
  //   if (password !== confirmpassword) {
  //     setpasswordconfirmpassword(true)
  //   }
  //     else {
  //     saveData()
  //     }
  // }
  // // save in async storage
  // const saveData = async () => {
  //   // console.log("ok")
  //   if (badname === false && bademail === false && badpassword === false && badconfirmpassword === false) {
  //     await AsyncStorage.setItem('Name', name)
  //     await AsyncStorage.setItem('Email', email)
  //     await AsyncStorage.setItem('password', password)
  //     navigation.goBack();
     

  //   }
  // }


  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>

      <Text style={{ alignSelf: 'center', fontSize: 25, fontWeight: '600' }}>SignIn</Text>
      <View style={{ marginHorizontal: 10, justifyContent: 'space-between' }}>
        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Name"} left={<TextInput.Icon icon={"home"} />}
          value={name}
          autoComplete='name'
          onChangeText={(txt) => { setName(txt) }} />
        {/* {badname && <Text style={{ color: 'red' }}>enter name</Text>} */}

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"Email"} left={<TextInput.Icon icon={"email"} />}
          value={email} keyboardType='email-address'
          autoComplete='email'
          onChangeText={(txt) => { setEmail(txt) }} />
        {/* {bademail && <Text style={{ color: 'red' }}>enter email</Text>} */}

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={"password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
          value={password}
          autoComplete='password'
          onChangeText={(txt) => { setpassword(txt) }} />
        {/* {badpassword && <Text style={{ color: 'red' }}>enter password</Text>} */}

        <TextInput style={{ marginVertical: 5 }} mode='outlined' label={" Confirm password"} secureTextEntry left={<TextInput.Icon icon={"key"} />}
          value={confirmpassword}
          autoComplete='password'
          onChangeText={(txt) => { setConfirmpassword(txt) }} />
        {/* {badconfirmpassword && <Text style={{ color: 'red' }}>enter confirm password</Text>}
        {passwordconfirmpassword && <Text style={{ color: 'red' }}>password does not matched</Text>} */}

{/* org */}
        {/* <Button style={{ marginVertical: 5 }} mode='contained' onPress={() => Validation()}>Sign In</Button> */}
        <Button style={{ marginVertical: 5 }} mode='contained' onPress={() =>register(email,password) }>Sign In</Button>

        <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center', textDecorationLine: 'underline' }}
          value={email}
          onPress={() => navigation.goBack()}>Alredy have Account</Text>
      </View>

      {/* /for testing */}
      {/* <View>
        <Button mode='contained' onPress={()=>requestCameraPermission()}>Camera</Button>
        <Button mode='contained' onPress={()=>requestLocationPermission()}>Location</Button>
        <Button mode='contained' onPress={()=>requestStoragePermission()}>Storage</Button>
        <Button mode='contained' onPress={()=>checkPermission()}>CP</Button>
      </View> */}
    </View>

  )
}

export default SignIn
