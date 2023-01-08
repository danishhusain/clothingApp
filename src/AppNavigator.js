import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from './Screens/SplashScreen';
import Loader from './Common/Loader';
import MyOrders from './Screens/MyOrders';
import Offers from './Screens/Offers';
import MyAddress from './Screens/MyAddress';
import Addaddress from './Screens/AddAddress';
import LogoutScreen from './Screens/LogoutScreen';
import TotalOrder from './Screens/TotalOrder';
import Details from './Screens/Details';
import DetailsCart from './Screens/DetailsCart';
import BuyScreen from './Screens/BuyScreen';
import RadioButton from './TestAnything/RadioButton';
import RadioButtonFc from './TestAnything/RadioButton';
import Firebase from './FireBase/Firebase';
import Navigation from './Navigation';
import Cart from './Bottom/Cart';
import ImageSliding from './Components/ImageSliding';
import BottomTab from './Common/BottomTab';
import Camera from './Common/LaunchCamera';
import Header from './Common/Header';
import Main from './Bottom/Main';
import Permissions from './Permission/Permissions';
import CheckLoader from './TestAnything/CheckLoader';
// import LoadingSpinner from './Common/Loader';



const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Loader" component={Loader} options={{ headerShown: false }} />
        <Stack.Screen name="MyAddress" component={MyAddress} options={{ headerShown: false }} />
        <Stack.Screen name="MyOrders" component={MyOrders} options={{ headerShown: false,  }} />
        <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
        <Stack.Screen name="Addaddress" component={Addaddress} options={{ headerShown: false }} />
        <Stack.Screen name="LogoutScreen" component={LogoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
        <Stack.Screen name="TotalOrder" component={TotalOrder} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsCart" component={DetailsCart} options={{ headerShown: false }} />
        <Stack.Screen name="BuyScreen" component={BuyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RadioButtonFc" component={RadioButtonFc} options={{ headerShown: false }} />
        <Stack.Screen name="Firebase" component={Firebase} options={{ headerShown: false }} />
        <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="ImageSliding" component={ImageSliding} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
        <Stack.Screen name="Permissions" component={Permissions} options={{ headerShown: false }} />
        <Stack.Screen name="CheckLoader" component={CheckLoader} options={{ headerShown: false }} />
        {/* <Stack.Screen name="LoadingSpinner" component={LoadingSpinner} options={{ headerShown: false }} /> */}

        
      </Stack.Navigator>
    // </NavigationContainer> 
  );
}

export default AppNavigator;


