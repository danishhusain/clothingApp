import { View, Text, Image, } from 'react-native'
import React from 'react'
import { useState, useEffect } from "react"
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }) => {

    // const navigation=useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("LogIn")
            getData();
        }, 3000)
    }, [])

    const getData = async () => {
        // console.log("hi")
        const email = await AsyncStorage.getItem("Email")
        if (email.length !== 0) {
            //for test
            navigation.navigate("LogIn")

            // navigation.navigate("HomeScreen")
        } else {
            navigation.navigate("LogIn")
            // console.log("if")



        }
    }
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Image source={require('../Images/playstore.png')} style={{ width: 200, height: 200 }} />


        </View>
    )
}

export default SplashScreen;