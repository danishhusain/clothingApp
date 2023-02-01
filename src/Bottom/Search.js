import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';
import { AuthContext } from '../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import ImageSliding from '../Components/ImageSliding';
import Loader from '../Common/Loader';
import Permissions from '../Permission/Permissions';
import CustomColor, { theme } from '../CustomComponents/CustomColor';
import CustomButton from '../CustomComponents/CustomButton';
import ShareExample from '../Common/ShareExample';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  // const {isSignedIn,setisSignedIn}=useContext(CartContext)
  const { s, sets } = useContext(CartContext);
  const user = firebase.auth().currentUser;
  const { userToken, setUserToken, isLoading, setIsLoading } =
    useContext(AuthContext);
  const navigation = useNavigation();

  //loader
  const lo = () => {
    setTimeout(() => {

      setIsLoading(true);

    }, 1000)

    {
      /* <Loader/>  */
    }
    // navigation.navigate(Loader)
    {
      /* <Text>fs</Text> */
    }
    setTimeout(() => {

      setIsLoading(false);

    }, 4000)

  };

  // Send the email verification
  const email_verification = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(function () {
        // Email verification sent!
        alert('Email verification sent!');
        console.log('Email verification sent!');
        if (firebase.auth().currentUser.emailVerified) {
          // The user's email is verified
          alert("The user's email is verified");
        } else {
          // The user's email is not verified
          alert("The user's email is not verified");
        }
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };

  //User Data
  const userData = () => {
    console.log('current user', user);
    if (user) {
      console.log('User email: ', user.email);
      console.log('User email: ', user.password);
      console.log('User email: ', user.displayName);
    }
  };

  //isSignedIn
  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    // this.setState({ isLoginScreenPresented: !isSignedIn });
    console.log('isSignedIn', { isLoginScreenPresented: !isSignedIn });
  };
  //getCurrentUserInfo
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      // this.setState({ userInfo });
      console.log('getCurrentUserInfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        console.log('user has not signed in yet');
      } else {
        // some other error
      }
    }
  };
  //getUserToken
  const getCurrentUserToken = async () => {
    let userToken = await AsyncStorage.getItem('userToken');
    console.log('saerch', userToken);
  };

  return (
    <View style={{}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ backgroundColor: CustomColor.AppColor, }}
        iconColor={'white'}
        placeholderTextColor={'white'}
      />
      <View>
        <Text style={{ alignSelf: 'center', marginTop: '10%' }}>NO data</Text>
        <Button onPress={() => isSignedIn()}>isSignedIn</Button>
        <Button onPress={() => getCurrentUserInfo()}>getCurrentUserInfo</Button>
        {/* <Button onPress={() => getCurrentUserToken()}>getCurrentUserToken</Button> */}
        <Button onPress={() => userData()}>userData</Button>
        <Button onPress={() => ResetEmailVerificationInside()}>
          ResetEmailVerificationInside
        </Button>
        <Button onPress={() => email_verification()}>email_verification</Button>
        <Button onPress={() => navigation.navigate(ImageSliding)}>
          ImageSliding
        </Button>
        <Button onPress={() => lo()}>loader</Button>
        <Button onPress={() => navigation.navigate(Permissions)}>Permission</Button>

        <CustomButton title={"Button1"} mode={'contained'} ButtonColor={CustomColor.RED} onClick={() => console.log("jiji")} />
        <CustomButton title={"Button1"} mode={'contained'} ButtonColor={theme.colors.success} onClick={() => console.log("jiji")} />
        <CustomButton title={"Button1"} mode={'contained'} ButtonColor={CustomColor.TransParentColor} onClick={() => console.log("jiji")} />
        <CustomButton title={"Button1"} mode={'contained'} ButtonColor={CustomColor.e} onClick={() => console.log("jiji")} />
        <CustomButton title={"Button4"} mode={'contained'} ButtonColor={CustomColor.g} onClick={() => console.log("jiji")} IconInButton={'share'} />
        {/* <Text style={{color:theme.colors.success,fontSize:theme.textVariants.header.fontSize,fontFamily:'Helvetica'}}>DANISH Razik 2000</Text> */}
        <ShareExample/>
      </View>
    </View>
  );
};

export default Search;
