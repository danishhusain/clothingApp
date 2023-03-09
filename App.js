import { StyleSheet, } from 'react-native';
import React, { } from 'react';
import CartContextProvider from './src/Context/CartContext';
import { AuthProvider } from './src/Context/AuthContext';
import Navigation from './src/Navigation';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';
import { requestUserPermission, notificationListner } from './src/PushNotification/PushNotification_helper'
import StyleContextProvider from './src/styles/context/StyleContext';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    requestUserPermission(),
      notificationListner()

  }, [])
  return (
    <CartContextProvider>
      <AuthProvider>
        <StyleContextProvider>
          <Navigation />
        </StyleContextProvider>
      </AuthProvider>
    </CartContextProvider >
  );
};

export default App;

const styles = StyleSheet.create({});
