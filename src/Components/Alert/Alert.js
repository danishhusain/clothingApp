import { View, Text, Alert } from 'react-native'
import React from 'react'


 const ItemAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
    export default ItemAlert