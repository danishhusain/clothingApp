import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Loader from "../Common/Loader";
import Navigation from "../Navigation";

export let AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [d, setd] = useState("hi")
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    if (isLoading) {
        <Loader />
    }

    //logIn
    const login2 = async () => {
        setIsLoading(true)
        setUserToken("hjklo")
        await AsyncStorage.setItem('userToken', "hjklo")
        setIsLoading(false)
    }
    //logout
    const logout2 = async () => {
        setIsLoading(true)
        setUserToken(null)
        await AsyncStorage.removeItem('userToken')

        setIsLoading(false)
    }
    const isLoggedIn = async () => {
        try {
            setIsLoading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            setUserToken(userToken)
            setIsLoading(false)

        } catch (e) {
            console.log(`isLogged in error ${e} `)
        }
    }

    useEffect(() => {
        isLoggedIn();
    }, [])

    console.log("Auth Screen Token", userToken)
    return (
        <AuthContext.Provider value={{ d, login2, logout2, isLoading, userToken, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}