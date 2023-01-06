import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useContext} from 'react';
import AppNavigator from './AppNavigator';
import AuthNavigator from './Screens/AuthNavigator';
import {AuthContext} from './Context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loader from './Common/Loader';
import auth, {firebase} from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userToken, setUserToken, isLoggedIn, isLoading,} =
    useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  //getCurrentUserInfo
  const getCurrentUserInfo = async () => {
    try {
      const user = await GoogleSignin.signInSilently();
      // this.setState({ userInfo });
      console.log('getCurrentUserInfo', user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        console.log('user has not signed in yet');
      } else {
        // some other error
      }
    }
    return setUser(user);
  };
  return (
    <NavigationContainer>
      {/* {userToken !== null ? <AppNavigator /> : <AuthNavigator />} */}
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
