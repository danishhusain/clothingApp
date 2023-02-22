// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import React, {useContext, useEffect, useState} from 'react';
// import Header from '../Common/Header';
// import {Button, IconButton} from 'react-native-paper';
// import {CartContext} from '../Context/CartContext';
// import {
//   product,
//   tshirt,
//   jeans,
//   jacket,
//   shirt,
//   lower,
//   hoodie,
// } from '../DataBase/Api';
// import {ImageSlider} from 'react-native-image-slider-banner';
// import {useNavigation} from '@react-navigation/native';
// import Details from '../Screens/Details';
// import BuyScreen from '../Screens/BuyScreen';
// import ImageSliding from '../Components/ImageSliding';
// import {CustomButton} from '../CustomComponents/CustomButton';
// import CustomColor from '../CustomComponents/CustomColor';
// import {firebase} from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

// export default function HomeFlatList({item}) {
//   const [iconSelected, setIconSelected] = useState(false);
//   const navigation = useNavigation();
//   const {wishlist, setWishlist} = useContext(CartContext);
//   const {setItemDetail} = useContext(CartContext);
//   const {cart, setcart} = useContext(CartContext);

//   const addWhishlist = async () => {
//     try {
//       const res = await firestore()
//         .collection('whishlist')
//         .doc(firebase.auth().currentUser.uid)
//         .set({
//           item,
//         });
//       console.log(res);
//     } catch (error) {
//       console.log(false);
//     }
//   };

//   return (
//     <View style={{borderRadius: 10, padding: 0.5}}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate(Details), setItemDetail(item);
//         }}>
//         <Image style={{height: 150, width: 195}} source={{uri: item.url}} />
//       </TouchableOpacity>

//       <IconButton
//         icon="heart"
//         iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
//         size={20}
//         style={{position: 'absolute', top: 0, right: 0}}
//         onPress={() => {
//           addWhishlist();
//           //   setWishlist([...wishlist, item]);
//           //   setIconSelected(item.code);
//         }}></IconButton>
//       <View
//         style={{
//           justifyContent: 'space-between',
//           backgroundColor: CustomColor.AppColor,
//         }}>
//         <Text style={{left: 5}}>{item.brand}</Text>
//         <Text style={{left: 5}}>{item.color}</Text>
//         <Text style={{left: 5}}>RS: {item.price}</Text>

//         <Button
//           textColor="#fff"
//           style={{
//             position: 'absolute',
//             alignSelf: 'flex-start',
//             top: -7,
//             right: 5,
//           }}
//           onPress={() => setcart([...cart, item])}>
//           Cart
//         </Button>
//         <Button
//           textColor="#fff"
//           style={{
//             position: 'absolute',
//             alignSelf: 'flex-end',
//             bottom: -7,
//             right: 5,
//           }}
//           onPress={() => {
//             setItemDetail(item), navigation.navigate(BuyScreen);
//           }}>
//           Buy
//         </Button>
//       </View>
//     </View>
//   );
// }
///////////////
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../Common/Header';
import { Button, IconButton } from 'react-native-paper';
import { CartContext } from '../Context/CartContext';
import {
  product,
  tshirt,
  jeans,
  jacket,
  shirt,
  lower,
  hoodie,
} from '../DataBase/Api';
import { ImageSlider } from 'react-native-image-slider-banner';
import { useNavigation } from '@react-navigation/native';
import Details from '../Screens/Details';
import BuyScreen from '../Screens/BuyScreen';
import ImageSliding from '../Components/ImageSliding';
import { CustomButton } from '../CustomComponents/CustomButton';
import CustomColor from '../CustomComponents/CustomColor';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth';
import ItemAlert from './Alert/Alert';


export default function HomeFlatList({ item }) {
  const [iconSelected, setIconSelected] = useState(false);
  const navigation = useNavigation();
  const { wishlist, setWishlist } = useContext(CartContext);
  const { setItemDetail } = useContext(CartContext);
  const { cart, setcart } = useContext(CartContext);
  const db = firebase.firestore()

  // Tost
  const showToast = ({ val }) => {
    const a = val
    ToastAndroid.showWithGravityAndOffset(
      // 'item added in whishlist!',
      `${a}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      30,
      50,
    );
  };
  // Add in WHislist
  const addWhishlist = async () => {
    db.collection('users').doc(firebase.auth().currentUser.uid).get().then((doc) => {
      if (doc.exists) {
        db.collection('users').doc(firebase.auth().currentUser.uid)
          .update({
            myWhislistArray: firebase.firestore.FieldValue.arrayUnion(item)
          })
          .then(() => {
            // console.log('addWhishlist User Update!');
            // alert
            showToast({ val: "item added in whishlist successfully" })
          })
          .catch(() => {
            console.log('Error while updating!');
          })
      } else {
        db.collection('users').doc(firebase.auth().currentUser.uid)
          .set({
            myWhislistArray: firebase.firestore.FieldValue.arrayUnion(item)
          })
          .then(() => {
            // console.log(' addWhishlist User Set!');
            // alert
            showToast({ val: "item added in whishlist successfully" })
          })
          .catch(err => {
            console.log('Error: ' + err)
          })
      }
    })
  }
  ///Add in Cart
  const addCart = async () => {
    db.collection('users').doc(firebase.auth().currentUser.uid).get().then((doc) => {
      if (doc.exists) {
        db.collection('users').doc(firebase.auth().currentUser.uid)
          .update({
            myCartArray: firebase.firestore.FieldValue.arrayUnion(item)
          })
          .then(() => {
            // console.log('User Update!');
            // alert
            showToast({ val: "item added in cart successfully" })
          })
          .catch(() => {
            console.log('Error while updating!');
          })
      } else {
        db.collection('users').doc(firebase.auth().currentUser.uid)
          .set({
            myCartArray: firebase.firestore.FieldValue.arrayUnion(item)
          })
          .then(() => {
            console.log('User Set!');
            // alert
            showToast({ val: "item added in cart successfully" })
          })
          .catch(err => {
            console.log('Error: ' + err)
          })
      }
    })
  }
  return (
    <View style={{ borderRadius: 10, padding: 0.5 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Details), setItemDetail(item);
        }}>
        <Image style={{ height: 150, width: 195 }} source={{ uri: item.url }} />
      </TouchableOpacity>

      <IconButton
        icon="heart"
        iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
        size={20}
        style={{ position: 'absolute', top: 0, right: 0 }}
        onPress={() => {
          addWhishlist();
          //   setWishlist([...wishlist, item]);
          //   setIconSelected(item.code);
        }}></IconButton>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: CustomColor.AppColor,
        }}>
        <Text style={{ left: 5 }}>{item.brand}</Text>
        <Text style={{ left: 5 }}>{item.color}</Text>
        <Text style={{ left: 5 }}>RS: {item.price}</Text>

        <Button textColor="#fff" style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }}
          onPress={() =>
            // setcart([...cart, item])
            addCart()
          }>Cart  </Button>
        <Button
          textColor="#fff"
          style={{
            position: 'absolute',
            alignSelf: 'flex-end',
            bottom: -7,
            right: 5,
          }}
          onPress={() => {
            setItemDetail(item), navigation.navigate(BuyScreen);
          }}>
          Buy
        </Button>
      </View>
    </View>
  );
}
