
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import AppNavigator from './AppNavigator'
import AuthNavigator from './Screens/AuthNavigator'
import { AuthContext } from './Context/AuthContext'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loader from './Common/Loader'
import auth from '@react-native-firebase/auth';





const Stack = createNativeStackNavigator();

const Navigation = () => {
    const { userToken, setUserToken, isLoggedIn, isLoading } = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true);

    // Handle user state changes
    const onAuthStateChanged = (userToken) => {
        setUserToken(userToken);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;



    // const { userToken, setusertToken } = useContext(AuthContext)
    // // const[d,setd]=useState('jkj')
    // console.log("token in Navigation screen", userToken)
    // //loader
    // if (isLoading) {
    //     <Loader />
    // }
    return (
        <NavigationContainer>

            {/* {userToken !== null ? <AppNavigator /> : <AuthNavigator />} */}
            {userToken ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>



    )
}

export default Navigation

const styles = StyleSheet.create({})
