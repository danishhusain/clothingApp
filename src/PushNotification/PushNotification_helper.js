import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import firebase from 'react-native-firebase';


// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     GetFCMToke()
//   }
// }


// async function GetFCMToke(){
//     let fcmtoken=await AsyncStorage.getItem("fcmtoken");
//     if(!fcmtoken){
//         try{
//             const fcmtoken= await messaging().getToken();
//             if(fcmtoken){
//                 console.log("new token",fcmtoken)
//                 await AsyncStorage.setItem("fcmtoken",fcmtoken)
//             } 
//         } catch(error){
//             console.log("error fcm token",error)
//         }
//     }
// }

//  Get the FCM token
firebase.messaging().getToken().then(fcmToken => {
    if (fcmToken) {
        // Display the FCM token in the console
        console.log('FCM Token:', fcmToken);
    } else {
        // Request permission from the user
        firebase.messaging().requestPermission().then(() => {
            // User has authorised
            console.log("user has authorised")
        }).catch(error => {
            // User has rejected permissions
            console.log("User has rejected permissions")

        });
    }
});