// import { View, Text, FlatList, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
// import React, { useContext, useState } from 'react'
// import { CartContext } from '../Context/CartContext'
// import { Button, IconButton } from 'react-native-paper'
// import { useNavigation } from '@react-navigation/native'
// import DetailsCart from '../Screens/DetailsCart'
// import Details from '../Screens/Details'
// import CustomColor from '../CustomComponents/CustomColor'






// const CartWishlist = ({ val }) => {
//   const [iconSelected, setIconSelected] = useState(false)
//   const { wishlist, setWishlist } = useContext(CartContext)
//   const { cart, setcart } = useContext(CartContext)
//   const navigation = useNavigation()
//   const [DetailsCartItem, setDetailsCartItem] = useState([])
//   const { ItemDetail, setItemDetail } = useContext(CartContext)



//   const remove = () => {
//     let arr = wishlist.filter(function (item) {
//       return item.code !== val.code
//     }
//     )
//     setWishlist(arr)
//   }
//   return (
//     <View style={{ width: '100%', height: 100, flexDirection: 'row', }}>

//       <ScrollView style={{ width: '100%', backgroundColor: '#B0A0FF', marginVertical: 1, }} >
//         <View style={{ justifyContent: 'center', alignContent: 'center', }}>
//           <TouchableOpacity
//             onPress={() => { navigation.navigate(Details), setItemDetail(val) }}
//           >
//             <Image style={{ height: 100, width: 100 }} source={{ uri: val.url }} />
//           </TouchableOpacity>
//           <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 10, color: '#000', }}>Brand:-{val.brand}</Text>
//           <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 30, color: '#000', }}>Color:-{val.color}</Text>
//           <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 50, color: '#000', }}>code:-{val.code}</Text>
//           <Text style={{ fontSize: 16, fontWeight: '500', color: '#000', position: 'absolute', left: 120, top: 70, color: '#000', }}>Price:-{val.price}</Text>
//           <IconButton icon={"heart"} iconColor={'#1DA664'} onPress={() => remove()}
//             style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 10, top: -3, color: 'white', }}
//           />
//           <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 10, bottom: 3, color: 'white', }} onPress={() => { setcart([...cart, val]), alert("Item Added") }}>Add Cart</Button>
//         </View>

//       </ScrollView>

//     </View>


//   )

// }

// const Wishlist = () => {
//   const { wishlist, setWishlist } = useContext(CartContext)

//   return (
//     <View style={{ flex: 1, }}>


//       {/* header */}
//     <View style={{ width: '100%', height: '6.80%', backgroundColor: CustomColor.AppColor, elevation: 2,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
//         <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>Wishlist</Text>
//         <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, paddingTop: 14, fontWeight: '600' }} onPress={() => setWishlist([])}>Clear Cart</Button>
//       </View>


//       <View style={{ flex: 1, }}>
//         <FlatList
//           data={wishlist}
//           renderItem={({ item }) => <CartWishlist val={item} />}
//           contentContainerStyle={{ flexDirection: 'column', }}
//         />

//       </View>
//     </View>
//   )
// }

// export default Wishlist

/////////////////////
import { View, Text, FlatList, ScrollView, TouchableOpacity, Image, Alert, ImageBackground, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button, IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import DetailsCart from '../Screens/DetailsCart'
import Details from '../Screens/Details'
import CustomColor from '../CustomComponents/CustomColor'
import { useEffect } from 'react'
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';






const CartWishlist = ({ val }) => {
  const [iconSelected, setIconSelected] = useState(false)
  const { wishlist, setWishlist } = useContext(CartContext)
  const { cart, setcart } = useContext(CartContext)
  const navigation = useNavigation()
  const [DetailsCartItem, setDetailsCartItem] = useState([])
  const { ItemDetail, setItemDetail } = useContext(CartContext)
  const db = firebase.firestore()
  ///Add in Cart
  const addCart = async () => {
    db.collection('users').doc(firebase.auth().currentUser.uid).get().then((doc) => {
      if (doc.exists) {
        db.collection('users').doc(firebase.auth().currentUser.uid)
          .update({
            myCartArray: firebase.firestore.FieldValue.arrayUnion(val)
          })
          .then(() => {
            // console.log('User Update!');
            // alert
            Alert.alert('Cart', 'Item Added', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

          })
          .catch(() => {
            // console.log('Error while updating!');
            // alert
            Alert.alert('Cart', 'Item Added', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
          })
      } else {
        db.collection('users').doc(firebase.auth().currentUser.uid)
          .set({
            myCartArray: firebase.firestore.FieldValue.arrayUnion(val)
          })
          .then(() => {
            console.log('User Set!');
            // setdocsId(null)
          })
          .catch(err => {
            console.log('Error: ' + err)
          })
      }
    })
  }

  const remove = () => {
    db.collection('users').doc(firebase.auth().currentUser.uid).update({
      myWhislistArray: firestore.FieldValue.arrayRemove(val)
    })
      .then(() => {
        // console.log('Array element deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting array element: ', error);
      });
  }
   // Tost
   const showToast = ({ val }) => {
    const a = val
    ToastAndroid.showWithGravityAndOffset(
      `${a}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      30,
      50,
    );
  };
  return (

    <View style={{ width: '100%', height: 100, flexDirection: 'row', }}>
      <ScrollView style={{ width: '100%', backgroundColor: '#B0A0FF', marginVertical: 1, }} >
        <View style={{ justifyContent: 'center', alignContent: 'center', }}>
          <TouchableOpacity
            onPress={() => { navigation.navigate(Details), setItemDetail(val) }}
          >
            <Image style={{ height: 100, width: 100 }} source={{ uri: val.url }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 10, color: '#000', }}>Brand:-{val.brand}</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 30, color: '#000', }}>Color:-{val.color}</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 50, color: '#000', }}>code:-{val.code}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#000', position: 'absolute', left: 120, top: 70, color: '#000', }}>Price:-{val.price}</Text>
          <IconButton icon={"heart"} iconColor={'#1DA664'} onPress={() => {remove(val),showToast({val:'item deleted successfully'})}}
            style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 10, top: -3, color: 'white', }}
          />
          <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 10, bottom: 3, color: 'white', }}
            // onPress={() => { setcart([...cart, val]), alert("Item Added") }}
            onPress={() => { addCart() }}
          >Add Cart</Button>
        </View>
      </ScrollView>
    </View>
  )

}

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(CartContext)
  const userDocument = firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid)
  const db = firebase.firestore()

   // Tost
   const showToast = ({ val }) => {
    const a = val
    ToastAndroid.showWithGravityAndOffset(
      `${a}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      30,
      50,
    );
  };
  //Delete the Collection
  const removeCart = async () => {
    db.collection('users').doc(firebase.auth().currentUser.uid)
      .get().then((doc) => {
        if (doc.exists) {
          db.collection('users').doc(firebase.auth().currentUser.uid)
            .update({
              myWhislistArray: firebase.firestore.FieldValue.delete()
            });
        }
      })
  }
  useEffect(() => {
    db.collection('users').doc(firebase.auth().currentUser.uid).get().then((doc) => {
      if (doc.exists) {
        db.collection('users').doc(firebase.auth().currentUser.uid)
          .onSnapshot(documentSnapshot => {
            // console.log('User data: ', documentSnapshot.data().myWhislistArray);
            setWishlist(documentSnapshot.data().myWhislistArray)
          })
          .then(() => {
            console.log('Got It Whishlist Data!');
          })
          .catch(() => {
            console.log('Error while Getting Whishlist Data!');
          })
      } else {
        console.log('Else-getWhislist')
      }
    })
  }, [])
  ////
  // useEffect(() => {
  //   userDocument
  //     .onSnapshot(documentSnapshot => {
  //       console.log('User data: ', documentSnapshot.data());
  //     });
  //   // Stop listening for updates when no longer required
  //   // return () => subscriber();
  // }, [firebase.auth().currentUser.uid]);
  return (
    <View style={{ flex: 1, }}>


      {/* header */}
      <View style={{ width: '100%', height: '6.80%', backgroundColor: CustomColor.AppColor, elevation: 2, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
        <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>Wishlist</Text>
        {/* <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, paddingTop: 14, fontWeight: '600' }} onPress={() => setWishlist([])}>Clear Cart</Button> */}
        <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, paddingTop: 14, fontWeight: '600' }} onPress={() => {removeCart(),showToast({val:"clear whishlist successfully"})}}>Clear Cart</Button>
      </View>
      <View style={{ flex: 1, }}>
        <FlatList
          data={wishlist}
          renderItem={({ item }) => <CartWishlist val={item} />}
          contentContainerStyle={{ flexDirection: 'column', }}
        />

      </View>

    </View>

  )
}

export default Wishlist