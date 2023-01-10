import {StyleSheet,} from 'react-native';
import React, {} from 'react';
import CartContextProvider from './src/Context/CartContext';
import {AuthProvider} from './src/Context/AuthContext';
import Navigation from './src/Navigation';

const App = () => {
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
