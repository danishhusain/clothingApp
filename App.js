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

const App = () => {

  return (
    
    <CartContextProvider>
    <HomeScreen />
    </CartContextProvider>
  )
}

export default App

const styles = StyleSheet.create({})