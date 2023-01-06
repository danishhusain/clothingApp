import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppNavigator from './AppNavigator';
import AuthNavigator from './Screens/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth, {firebase} from '@react-native-firebase/auth';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  //useEffect for Handle user state changes
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  //
  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
const styles = StyleSheet.create({});
