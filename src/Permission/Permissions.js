import { View, Text } from 'react-native'
import React from 'react'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react'



const Permissions = () => {

    // All  permissions useEffect
    useEffect(() => {

        requestStoragePermission(),
            requestLocationPermission()
        requestCameraPermission()
    }, [])

    //Camera  permissions
    const requestCameraPermission = async () => {
        await request(PERMISSIONS.ANDROID.CAMERA).then((response) => {
            console.log(response)
        })
    }
    //Location  permissions
    const requestLocationPermission = async () => {
        await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((response) => {
            console.log(response)
        })
    }
    //Storage  permissions
    const requestStoragePermission = async () => {
        await request(PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION).then((response) => {
            console.log(response)
        })
    }
    //check  camera Permissions
    const checkPermission = () => {
        check(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        console.log('This feature is not available (on this device / in this context)');
                        break;
                    case RESULTS.DENIED:
                        console.log('The permission has not been requested / is denied but requestable');
                        break;
                    case RESULTS.LIMITED:
                        console.log('The permission is limited: some actions are possible');
                        break;
                    case RESULTS.GRANTED:
                        console.log('The permission is granted');
                        break;
                    case RESULTS.BLOCKED:
                        console.log('The permission is denied and not requestable anymore');
                        break;
                }
            })
            .catch((error) => {
                console.log("error in permission")
            });
    }
   
}

export default Permissions