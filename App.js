import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppNavigator from './src/AppNavigator'
import LogIn from './src/Screens/LogIn'
import SplashScreen from './src/Screens/SplashScreen'
import Loader from './src/Common/Loader'
import HomeScreen from './src/Screens/HomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Profile from './src/Bottom/Profile'
import CartContextProvider from './src/Context/CartContext'
import MyAddress from './src/Screens/MyAddress'
import Addaddress from './src/Screens/AddAddress'
import { StatusBar } from 'react-native'
import { AuthContext, AuthProvider } from './src/Context/AuthContext'
import AuthNavigator from './src/Screens/AuthNavigator'
import { useContext } from 'react'
import Navigation from './src/Navigation'


const App = () => {
  // const {userToken}=useContext(AuthContext)
  // console.log("kk",userToken)
  return (

    <CartContextProvider>
      <AuthProvider>
        {/* <HomeScreen /> */}
        {/* <LogIn/> */}
        {/* <AppNavigator/> */}
        <Navigation />
        {/* <AuthNavigator/> */}
        {/* <Profile/> */}
        {/* <MyAddress/> */}
        {/* <Addaddress/> */}
      </AuthProvider>
    </CartContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})



// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AppNavigator from './src/AppNavigator'
// import LogIn from './src/Screens/LogIn'
// import SplashScreen from './src/Screens/SplashScreen'
// import Loader from './src/Common/Loader'
// import HomeScreen from './src/Screens/HomeScreen'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import Profile from './src/Bottom/Profile'
// import CartContextProvider from './src/Context/CartContext'
// import MyAddress from './src/Screens/MyAddress'
// import Addaddress from './src/Screens/AddAddress'
// import { StatusBar } from 'react-native'
// import {  AuthContext, AuthProvider } from './src/Context/AuthContext'
// import AuthNavigator from './src/Screens/AuthNavigator'
// import { useContext } from 'react'






// const App = () => {
//   // const { userToken } = useContext(AuthContext)
//   const {userToken,setusertToken}=useContext(AuthContext)
//   // const[d,setd]=useState('jkj')
// console.log("token",userToken)
//   return (
//     <AuthProvider>

//     <CartContextProvider>

//         {
//           userToken == null ? <><AuthNavigator /></> :
//             <> <AppNavigator /></>
//         }

//     </CartContextProvider>
//     </AuthProvider>

//   )
// }

// export default App

// const styles = StyleSheet.create({})
