import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebase } from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}

const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log("new token", fcmToken)
                await AsyncStorage.setItem("fcmToken", fcmToken)
            }
        } catch (error) {
            console.log("error fcm token", error)
        }
    }
}

//  Get the FCM token
export const notificationListner = async () => {
    firebase.messaging().onNotificationOpenedApp(remoteMessage => {
        console.log("Notification caused app to open from background state", remoteMessage.notification)
    })
    messaging().onMessage(async remoteMessage => {
        console.log("recived in foreground", remoteMessage)
    })
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log("Notification caused app to open from quite state", remoteMessage.notification)
            }
        });
}




const PushNotification_helper = () => {
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));

        });

        // return unsubscribe;
    }, []);
}

export default PushNotification_helper

