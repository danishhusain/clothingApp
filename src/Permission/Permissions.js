// import { Platform } from 'react-native';
// import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';

// // const PLATFORM_MICROPHONE_PERMISSIONS = {
// //     camera: PERMISSIONS.ANDROID.CAMERA,
// //     estorage: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
// //     raudio: PERMISSIONS.ANDROID.READ_MEDIA_AUDIO,
// //     rimages: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
// //     rvideos: PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
// //     pnotifications: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
// //     mlocation: PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION,
// //     // PERMISSIONS.Android.permission.INTERNET;
// // }



// // const REQUEST_PERMISSION_TYPE = {
// //     microphone: PLATFORM_MICROPHONE_PERMISSIONS
// // }

// // const PERMISSION_TYPE = {
// //     microphone: 'microphone'
// // }

// // class AppPermission {
// //     checkPermissions = async (type): Promise<boolean> => {
// //         const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
// //         if (!permissions) {
// //             return true
// //         }
// //         try {
// //             const result = await check(permissions)
// //             if (result === RESULTS.GRANTED) return true
// //             return // request permissions
// //         } catch (error) {
// //             return false
// //         }
// //     }
// //     requestPermission = async (permissions): Promise<boolean> => {
// //         try {
// //             const result = await request(permissions)
// //             return result === RESULTS.GRANTED
// //         } catch (error) {
// //             return false
// //         }
// //     }
// // }

// // const Permission =new AppPermission()
// // export {Permission,PERMISSION_TYPE}

// const RequestPermission = ()=> {
// request(PERMISSIONS.ANDROID.CALL_PHONE).then((response)=>{
//     console.log(response)
// })
// }
