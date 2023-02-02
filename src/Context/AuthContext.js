
import React, { createContext, useState } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import { ActivityIndicator, View } from 'react-native';
import Loader from '../Common/Loader';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Firebase from '../FireBase/Firebase';
import { initializeApp } from 'firebase/app';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
// import LoadingSpinner from '../Common/Loader';
import { useContext } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  const navigation = useNavigation;
  const [showLoader, setShowLoader] = useState(false)

  //SighnIn with Email & Passward
  const register = async (email, password, name) => {


    try {
      await auth()
        .createUserWithEmailAndPassword(email, password, name)
        .then(() => {
          console.log('register suceesfully');
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
          alert('Email address is alreaday in  use by another account');
        });
    } catch (e) {
      console.log('try cath error onContext', e);
    }

  };
  // LogIn with Email & Passward
  const login = async (email, password) => {
    // console.log('here');
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('login  sucessfully ');
    } catch (e) {
      console.log('Please make account', e);
    }
    // console.log('there');
    setShowLoader(false)

  };

  //Logout
  const logout_g = async () => {


    try {
      await auth().signOut();
      console.log('logOut Succesfully');
    } catch (e) {
      console.log('logOut Error', e);
    }

  };
  //Password Reset Outside
  const ResetEmailVerification = email => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => alert('password reset email has been sent ssuccefully'))
      .catch(e => alert('error', e));
  };

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
        // userToken, setUserToken,
        login,
        register,
        logout_g,
        ResetEmailVerification,
        showLoader,
        setShowLoader
      }}>
      {children}
    </AuthContext.Provider>
  );
};
