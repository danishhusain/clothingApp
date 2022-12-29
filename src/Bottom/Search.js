import * as React from 'react';
import { View,Text } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import {GoogleSignin, GoogleSigninButton,statusCodes,} from '@react-native-google-signin/google-signin';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';





const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  // const {isSignedIn,setisSignedIn}=useContext(CartContext)
  const {s,sets}=useContext(CartContext)


//isSignedIn
isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  // this.setState({ isLoginScreenPresented: !isSignedIn });
  console.log("isSignedIn",{ isLoginScreenPresented: !isSignedIn })
  // console.log("isSignedIn",{ isLoginScreenPresented_s: !s })
};
//console
console.log("login",s)
//getCurrentUserInfo
getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    // this.setState({ userInfo });
    console.log("getCurrentUserInfo",userInfo)
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // user has not signed in yet
    console.log("user has not signed in yet")

    } else {
      // some other error
    }
  }
};

  return (
    <View>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{backgroundColor:`#6a5acd`}}
      iconColor={'white'}
      placeholderTextColor={'white'}
      
    />
    <View >
    <Text style={{alignSelf:'center',marginTop:'10%'}}>NO data</Text>
    <Button onPress={()=>isSignedIn()}>isSignedIn</Button>
    <Button onPress={()=>getCurrentUserInfo()}>getCurrentUserInfo</Button>

    </View>
    </View>
  );
};

export default Search;