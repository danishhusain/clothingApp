import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CartContextProvider from './src/Context/CartContext';
import {AuthContext, AuthProvider} from './src/Context/AuthContext';

import Navigation from './src/Navigation';

const App = () => {
  return (
    <CartContextProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </CartContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
