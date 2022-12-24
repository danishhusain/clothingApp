import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';

const Firebase = () => {
    const navigation=useNavigation()
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '1095484900051-gk2nijhng0cvs6vuurbb011he0ns0ljm.apps.googleusercontent.com',
        });
    }, [])

    const googleSihnIn = async () =>  {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
}

return (
    <View>
        <Text>Firebase</Text>
        <Button mode='contained' onPress={()=>googleSihnIn()
        .then(res=>{console.log("res",res)})
        .catch(error=>{console.log(">>",error)})
        }>hii</Button>
    </View>
)
}

export default Firebase

const styles = StyleSheet.create({})