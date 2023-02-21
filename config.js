import 'firebase/firestore';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyAx4VtDbeJRHDNshwtc5-kn6uFRPZVvFTY",
    authDomain: "clothingapp-21634.firebaseapp.com",
    databaseURL: "https://clothingapp-21634-default-rtdb.firebaseio.com",
    projectId: "clothingapp-21634",
    storageBucket: "clothingapp-21634.appspot.com",
    messagingSenderId: "662105668477",
    appId: "1:662105668477:web:1620ee1c1eb52955d7aa14",
    measurementId: "G-DPSR32RHJS"
    };
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    export {firebase}
