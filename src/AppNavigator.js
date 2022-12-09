import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './Screens/LogIn';
import SignIn from './Screens/SignIn';
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
import buyNow from './Screens/buyNow';
import DetailsCart from './Screens/DetailsCart';






const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Loader" component={Loader} options={{ headerShown: false }} />
        <Stack.Screen name="MyAddress" component={MyAddress} options={{ headerShown: false }} />
        <Stack.Screen name="MyOrders" component={MyOrders} options={{ headerShown: false }} />
        <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
        <Stack.Screen name="Addaddress" component={Addaddress} options={{ headerShown: false }} />
        <Stack.Screen name="LogoutScreen" component={LogoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TotalOrder" component={TotalOrder} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="DetailsCart" component={DetailsCart} options={{ headerShown: false }} />
        <Stack.Screen name="buyNow" component={buyNow} options={{ headerShown: false }} />
       
       
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default AppNavigator;