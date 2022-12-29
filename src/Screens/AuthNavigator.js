import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { AuthProvider } from '../Context/AuthContext';
import LogIn from './LogIn';
import SignIn from './SignIn';
import { CartContext } from '../Context/CartContext';


const Stack = createNativeStackNavigator(CartContext);
function AuthNavigator() {
  const { s, sets } = useContext(Car)
  return (
       <AuthProvider>

    <NavigationContainer>
      <Stack.Navigator>

        {/* {s ? (
          <> */}
            {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Loader" component={Loader} options={{ headerShown: false }} />
            <Stack.Screen name="MyAddress" component={MyAddress} options={{ headerShown: false }} />
            <Stack.Screen name="MyOrders" component={MyOrders} options={{ headerShown: false }} />
            <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
            <Stack.Screen name="Addaddress" component={Addaddress} options={{ headerShown: false }} />
            <Stack.Screen name="LogoutScreen" component={LogoutScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TotalOrder" component={TotalOrder} options={{ headerShown: false }} />
            <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsCart" component={DetailsCart} options={{ headerShown: false }} />
            <Stack.Screen name="BuyScreen" component={BuyScreen} options={{ headerShown: false }} />
            <Stack.Screen name="RadioButtonFc" component={RadioButtonFc} options={{ headerShown: false }} />
            <Stack.Screen name="Firebase" component={Firebase} options={{ headerShown: false }} /> */}

          {/* </>) : (
          <> */}
            {/* // <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} /> */}
            <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />

          {/* </> */}
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

export default AuthNavigator;