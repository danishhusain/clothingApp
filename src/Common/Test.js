// import React, { Fragment, Component, useState } from 'react';
//  import {
//    SafeAreaView,
//    StyleSheet,
//    ScrollView,
//    View,
//    Text,
//    StatusBar,
//    Image,
//    Button,
//    Dimensions,
//    TouchableOpacity
//  } from 'react-native';
 

//  import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


// const Test = () => {

//   const [fileData, setFileData] = useState(null);
//   const [fileUri, setFileUri] = useState(null);

//   const renderFileData = () => {
//     if (fileData) {
//       return <Image source={{ uri: 'data:image/jpeg;base64,' + fileData }}
//         style={styles.images}
//       />
//     } else {
//       return <Image source={require('../Images/playstore.png')}
//         style={styles.images}
//       />
//     }
//   }


//   const renderFileUri = () => {
//     if (fileUri) {
//       return <Image
//         source={{ uri: fileUri }}
//         style={styles.images}
//       />
//     } else {
//       return <Image
//         source={require('../Images/playstore.png')}
//         style={styles.images}
//       />
//     }
//   }


//   const launchNativeCamera = () => {
//     let options = {
//       includeBase64: true,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     launchCamera(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else {
//         const source = { uri: response.uri };
//         console.log('response', JSON.stringify(response));
//         setFileData(response.assets[0].base64);
//         setFileUri(response.assets[0].uri)
//       }
//     });

//   }

//   const launchNativeImageLibrary = () => {
//     let options = {
//       includeBase64: true,
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     launchImageLibrary(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         const source = { uri: response.assets.uri };
//         console.log('response', JSON.stringify(response));
//         setFileData(response.assets[0].base64);
//         setFileUri(response.assets[0].uri)
//       }
//     });

//   }

//   return (
//     <Fragment>
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <View style={styles.body}>
//             <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Pick Images from Camera & Gallery</Text>
//             <View style={styles.ImageSections}>
//               <View>
//                 {renderFileData()}
//                 <Text  style={{textAlign:'center'}}>Base 64 String</Text>
//               </View>
//               <View>
//                 {renderFileUri()}
//                 <Text style={{textAlign:'center'}}>File Uri</Text>
//               </View>
//             </View>

//             <View style={styles.btnParentSection}>
//               <TouchableOpacity onPress={() => {launchNativeCamera()}} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Directly Launch Camera</Text>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={() => {launchNativeImageLibrary()}} style={styles.btnSection}  >
//                 <Text style={styles.btnText}>Directly Launch Image Library</Text>
//               </TouchableOpacity>
//             </View>

//           </View>
//         </SafeAreaView>
//       </Fragment>
//   )
// };
// export default Test;
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: "grey",
//   },

//   body: {
//     backgroundColor: "grey",
//     justifyContent: 'center',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: Dimensions.get('screen').height - 20,
//     width: Dimensions.get('screen').width
//   },
//   ImageSections: {
//     display: 'flex',
//     flexDirection: 'row',
//     paddingHorizontal: 8,
//     paddingVertical: 8,
//     justifyContent: 'center'
//   },
//   images: {
//     width: 150,
//     height: 150,
//     borderColor: 'black',
//     borderWidth: 1,
//     marginHorizontal: 3
//   },
//   btnParentSection: {
//     alignItems: 'center',
//     marginTop:10
//   },
//   btnSection: {
//     width: 225,
//     height: 50,
//     backgroundColor: '#DCDCDC',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 3,
//     marginBottom:10
//   },
//   btnText: {
//     textAlign: 'center',
//     color: 'gray',
//     fontSize: 14,
//     fontWeight:'bold'
//   }
// });



import { useNavigation } from '@react-navigation/native';
import React, { Fragment, Component, useState, } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   Image,
   Dimensions,
   TouchableOpacity,
   Platform
 } from 'react-native';
 

 import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Button ,Avatar, IconButton,BottomNavigation,Appbar,Dialog, Portal} from 'react-native-paper';
import BottomTab from './BottomTab';
// import BottomTab from './BottomTab';


// const navigation=useNavigation()
const Test = () => {
const navigation=useNavigation()
  const [fileData, setFileData] = useState(null);
  const [fileUri, setFileUri] = useState(null);
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  const renderFileData = () => {
 
    if (fileData) {
      return <Avatar.Image size={130} source={{ uri: 'data:image/jpeg;base64,' + fileData }}
      style={{width: 130,top:30, height: 130, alignSelf: 'center'}}
      />
    } else {
      return <Avatar.Image size={130} source={require('../Images/profile.jpg')} 
      style={{width: 130,top:30, height: 130, alignSelf: 'center'}}
      />
    }

  }


  const renderFileUri = () => {
    if (fileUri) {
      return <Image
        source={{ uri: fileUri }}
        style={{width: 150, height: 150, alignSelf: 'center'}}
      />
    } else {
      return <Image
        source={require('../Images/profile.jpg')}
        style={{width: 150, height: 150, alignSelf: 'center'}}
      />
    }
  }


  const launchNativeCamera = () => {
    let options = {
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        setFileData(response.assets[0].base64);
        setFileUri(response.assets[0].uri)
      }
    });

  }


  const launchNativeImageLibrary = () => {
    let options = {
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets.uri };
        console.log('response', JSON.stringify(response));
        setFileData(response.assets[0].base64);
        setFileUri(response.assets[0].uri)
      }
    });

  }
 //
 const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Actions>
          <Button onPress={() => console.log('Cancel')}>Cancel</Button>
          <Button onPress={() => console.log('Ok')}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

  return (
          <View style={styles.body}>
            <View >
              {renderFileData()}
              <View style={{justifyContent:'center',alignSelf:'center',bottom:22,left:45,backgroundColor:'#6a5acd',borderRadius:200,}}>
              {/* <IconButton icon={'camera'}  onPress={() => {<BottomTab/>}}>CAMERA</IconButton> */}
              <IconButton icon={'camera'} iconColor={'#fff'} onPress={() => {launchNativeCamera()}}>CAMERA</IconButton>
              {/* <IconButton icon={'camera'}  onPress={() => {navigation.navigate(Test)}}>CAMERA</IconButton> */}
              {/* <IconButton icon={'camera'}  onPress={() => {MyComponent()}}>CAMERA</IconButton> */}
              {/* <IconButton icon={'camera'}  onPress={() => {navigation.navigate(BottomTab)}}>CAMERA</IconButton> */}
              </View>
            </View>
          </View>
        
  )
};
export default Test;
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "grey",
  },

  body: {
    // backgroundColor: "grey",
    justifyContent: 'center',
    borderColor: 'black',
    // borderWidth: 1,
    // height: Dimensions.get('screen').height - 20,
    // width: Dimensions.get('screen').width
    // height:250,width:'100%'
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  btnParentSection: {
    alignItems: 'center',
    marginTop:10
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom:10
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight:'bold'
  }
});


