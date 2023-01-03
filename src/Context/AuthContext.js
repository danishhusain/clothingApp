// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useEffect } from "react";
// import { useState } from "react";
// import { createContext } from "react";
// import Loader from "../Common/Loader";
// import Navigation from "../Navigation";

// export let AuthContext = createContext()
// export const AuthProvider = ({ children }) => {
//     const [d, setd] = useState("hi")
//     const [isLoading, setIsLoading] = useState(false)
//     const [userToken, setUserToken] = useState(null)

//     if (isLoading) {
//         <Loader />
//     }

//     //logIn
//     const login2 = async () => {
//         setIsLoading(true)
//         setUserToken("hjklo")
//         await AsyncStorage.setItem('userToken', "hjklo")
//         setIsLoading(false)
//     }
//     //logout
//     const logout2 = async () => {
//         setIsLoading(true)
//         setUserToken(null)
//         await AsyncStorage.removeItem('userToken')

//         setIsLoading(false)
//     }
//     const isLoggedIn = async () => {
//         try {
//             setIsLoading(true)
//             let userToken = await AsyncStorage.getItem('userToken')
//             setUserToken(userToken)
//             setIsLoading(false)

//         } catch (e) {
//             console.log(`isLogged in error ${e} `)
//         }
//     }

//     useEffect(() => {
//         isLoggedIn();
//     }, [])

//     console.log("Auth Screen Token", userToken)
//     return (
//         <AuthContext.Provider value={{ d, login2, logout2, isLoading, userToken, isLoggedIn }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }



//2
import React, { createContext, useState } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import { GoogleSignin } from '@react-native-community/google-signin';
import Loader from '../Common/Loader';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { getAuth, sendPasswordResetEmail, } from "firebase/auth";
import Firebase from '../FireBase/Firebase';
import { initializeApp } from 'firebase/app';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation, } from '@react-navigation/native';


export const AuthContext = createContext();

export const AuthProvider = ({ children, }) => {
    const [userToken, setUserToken] = useState(null)
    const [loader, setLoader] = useState(true)
    const navigation=useNavigation

    // { loader ? navigation.navigate(Loader) : null }


    //SighnIn with Email & Passward
    const register = async (email, password) => {
        setLoader(true)

        try {
            await auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("register suceesfully")
                    //   //Once the user creation has happened successfully, we can add the currentUser into firestore
                    //   //with the appropriate details.
                    //   firestore().collection('users').doc(auth().currentUser.uid)
                    //   .set({
                    //       fname: '',
                    //       lname: '',
                    //       email: email,
                    //       createdAt: firestore.Timestamp.fromDate(new Date()),
                    //       userImg: null,
                    //   })
                    //ensure we catch any errors at this stage to advise us if something does go wrong
                    //   .catch(error => {
                    //       console.log('Something went wrong with added user to firestore: ', error);
                    //   })
                })
                //we need to catch the whole sign up process if it fails too.
                .catch(error => {
                    console.log('Something went wrong with sign up: ', error);
                    alert("Email address is alreaday in  use by another account")
                });
        } catch (e) {
            console.log("try cath error onContext", e);
        }
        setLoader(false)

    }
    // LogIn with Email & Passward
    const login2 = async (email, password) => {
        // setLoader(true)
       
        console.log("here")
        try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log("login2  sucessfully ")
        } catch (e) {
            console.log("Please make account", e);
        }
        console.log("there")
        // setLoader(false)
    }
    // SighnIn with Google
    // const signIn_g = async () => {
    //     setLoader(true)
    //     try {
    //         // Get the users ID token
    //         const { idToken } = await GoogleSignin.signIn();

    //         // Create a Google credential with the token
    //         const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    //         // Sign-in the user with the credential
    //         await auth().signInWithCredential(googleCredential)
    //             // Use it only when user Sign's up, 
    //             // so create different social signup function
    //             // .then(() => {
    //             //   //Once the user creation has happened successfully, we can add the currentUser into firestore
    //             //   //with the appropriate details.
    //             //   // console.log('current User', auth().currentUser);
    //             //   firestore().collection('users').doc(auth().currentUser.uid)
    //             //   .set({
    //             //       fname: '',
    //             //       lname: '',
    //             //       email: auth().currentUser.email,
    //             //       createdAt: firestore.Timestamp.fromDate(new Date()),
    //             //       userImg: null,
    //             //   })
    //             //   //ensure we catch any errors at this stage to advise us if something does go wrong
    //             //   .catch(error => {
    //             //       console.log('Something went wrong with added user to firestore: ', error);
    //             //   })
    //             // })
    //             //we need to catch the whole sign up process if it fails too.
    //             .catch(error => {
    //                 console.log('Something went wrong with sign up: ', error);
    //             });
    //     } catch (error) {
    //         console.log({ error });
    //     }
    //     setLoader(false)

    // }
    //Logout
    const logout_g = async () => {
        setLoader(true)

        try {
            await auth().signOut();
            console.log("logOut Succesfully")
        } catch (e) {
            console.log("logOut Error", e);
        }
        setLoader(false)

    }
    //Password Reset Outside
    const ResetEmailVerification = (email) => {
        auth().sendPasswordResetEmail(email)
            .then(() =>
                alert("password reset email has been sent ssuccefully"))
            .catch((e) =>
                alert("error", e))
    }

    // gogle signIn
    // Configure Google Signin
    GoogleSignin.configure({
        // webClientId: '662105668477-jg2e8sg8vfvph07meoof2ap6fpntpmqe.apps.googleusercontent.com',
        // webClientId: '',
    });
    const signIn_g = async () => {
        
        // Sign in with Google
        GoogleSignin.signIn()
            .then((user) => {
                console.log("google",user);
            })
            .catch((err) => {
                console.error("google error",err);
            });
    }

    //LogIn with fb
    //const  fbLogin= async () => {
    //   try {
    //     // Attempt login with permissions
    //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    //     if (result.isCancelled) {
    //       throw 'User cancelled the login process';
    //     }

    //     // Once signed in, get the users AccesToken
    //     const data = await AccessToken.getCurrentAccessToken();

    //     if (!data) {
    //       throw 'Something went wrong obtaining access token';
    //     }

    //     // Create a Firebase credential with the AccessToken
    //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    //     // Sign-in the user with the credential
    //     await auth().signInWithCredential(facebookCredential)
    //     // Use it only when user Sign's up, 
    //     // so create different social signup function
    //     // .then(() => {
    //     //   //Once the user creation has happened successfully, we can add the currentUser into firestore
    //     //   //with the appropriate details.
    //     //   console.log('current User', auth().currentUser);
    //     //   firestore().collection('users').doc(auth().currentUser.uid)
    //     //   .set({
    //     //       fname: '',
    //     //       lname: '',
    //     //       email: auth().currentUser.email,
    //     //       createdAt: firestore.Timestamp.fromDate(new Date()),
    //     //       userImg: null,
    //     //   })
    //     //   //ensure we catch any errors at this stage to advise us if something does go wrong
    //     //   .catch(error => {
    //     //       console.log('Something went wrong with added user to firestore: ', error);
    //     //   })
    //     // })
    //     //we need to catch the whole sign up process if it fails too.
    //     .catch(error => {
    //         console.log('Something went wrong with sign up: ', error);
    //     });
    //   } catch(error) {
    //     console.log({error});
    //   }
    // }
    //

    return (
        <AuthContext.Provider
            value={{
                userToken, setUserToken,
                login2,
                signIn_g,
                // fbLogin,
                register,
                logout_g,
                ResetEmailVerification
            }}>
            {children}
        </AuthContext.Provider >
    );
};
