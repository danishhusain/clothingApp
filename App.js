import {StyleSheet,} from 'react-native';
import React, {} from 'react';
import CartContextProvider from './src/Context/CartContext';
import {AuthProvider} from './src/Context/AuthContext';
import Navigation from './src/Navigation';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';

const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <CartContextProvider>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </CartContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
