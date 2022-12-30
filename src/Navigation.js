
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AppNavigator from './AppNavigator'
import AuthNavigator from './Screens/AuthNavigator'
import { AuthContext } from './Context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loader from './Common/Loader'





const Stack = createNativeStackNavigator();

const Navigation = () => {
    const { userToken ,isLoggedIn,isLoading} = useContext(AuthContext)
  
    // const { userToken, setusertToken } = useContext(AuthContext)
    // const[d,setd]=useState('jkj')
    console.log("token in Navigation screen", userToken)
    //loader
    if(isLoading){
        <Loader/>
    }
    return (
        <NavigationContainer>

            {userToken !== null ? <AppNavigator /> : <AuthNavigator />}

        </NavigationContainer>



    )
}

export default Navigation

const styles = StyleSheet.create({})
