import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton, statusCodes, } from '@react-native-google-signin/google-signin';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';
import { AuthContext } from '../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import ImageSliding from '../Components/ImageSliding';
import Loader from '../Common/Loader';





const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  // const {isSignedIn,setisSignedIn}=useContext(CartContext)
  const { s, sets } = useContext(CartContext)
  const user = firebase.auth().currentUser;
  const { userToken, setUserToken } = useContext(AuthContext)
const navigation=useNavigation()


//loader
const lo=()=>{
{/* <Loader/>  */}
// navigation.navigate(Loader)
{/* <Text>fs</Text> */}
}

  // Send the email verification
  const email_verification = () => {
    firebase.auth().currentUser.sendEmailVerification().then(function () {
      // Email verification sent!
      alert("Email verification sent!")
      console.log('Email verification sent!');
      if (firebase.auth().currentUser.emailVerified) {
        // The user's email is verified
        alert("The user's email is verified")
      } else {
        // The user's email is not verified
        alert("The user's email is not verified")
  
      }
    }).catch(function (error) {
      // An error happened.
      console.log(error);
    })
    
  }


  //User Data
  const userData = () => {
    console.log("current user", user)
    if (user) {
      console.log('User email: ', user.email);
    }
  }

  //isSignedIn
  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    // this.setState({ isLoginScreenPresented: !isSignedIn });
    console.log("isSignedIn", { isLoginScreenPresented: !isSignedIn })
    // console.log("isSignedIn",{ isLoginScreenPresented_s: !s })
  };
  //console
  // console.log("login",s)
  //getCurrentUserInfo
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      // this.setState({ userInfo });
      console.log("getCurrentUserInfo", userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        console.log("user has not signed in yet")

      } else {
        // some other error
      }
    }
  };
  //getUserToken
  const getCurrentUserToken = async () => {
    let userToken = await AsyncStorage.getItem('userToken')
    console.log("saerch", userToken)

  }

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ backgroundColor: `#6a5acd` }}
        iconColor={'white'}
        placeholderTextColor={'white'}

      />
      <View >
        <Text style={{ alignSelf: 'center', marginTop: '10%' }}>NO data</Text>
        <Button onPress={() => isSignedIn()}>isSignedIn</Button>
        <Button onPress={() => getCurrentUserInfo()}>getCurrentUserInfo</Button>
        <Button onPress={() => getCurrentUserToken()}>getCurrentUserInfo</Button>
        <Button onPress={() => userData()}>userData</Button>
        <Button onPress={() => ResetEmailVerificationInside()}>ResetEmailVerificationInside</Button>
        <Button onPress={() => email_verification()}>email_verification</Button>
        <Button onPress={() => navigation.navigate(ImageSliding)}>ImageSliding</Button>
        <Button onPress={() => lo()}>loader</Button>

      </View>
    </View>
  );
};

export default Search;