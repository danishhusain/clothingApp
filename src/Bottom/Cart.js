import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button, IconButton, Avatar, Card, Title, Paragraph } from 'react-native-paper'
import Header from '../Common/Header'
import TotalOrder from '../Screens/TotalOrder'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import Addaddress from '../Screens/AddAddress'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Details from '../Screens/Details'
import DetailsCart from '../Screens/DetailsCart'
import BuyScreen from '../Screens/BuyScreen'
import { set } from 'react-native-reanimated'
import RazorpayCheckout from 'react-native-razorpay';
import CustomColor from '../CustomComponents/CustomColor'
import CustomButton from '../CustomComponents/CustomButton'








const CartCard = ({ val }) => {
  const navigation = useNavigation()
  const { cart, setcart, setItemDetail } = useContext(CartContext)
  // const {DetailsCartItem,setDetailsCartItem}=useContext(CartContext)
  const [DetailsCartItem, setDetailsCartItem] = useState([])



  const remove = () => {
    let arr = cart.filter(function (item) {
      return item.code !== val.code
    }
    )
    setcart(arr)
  }
  // console.log(val.price,typeof val.price)
  return (
    <View style={{
      width: '100%',
      height: 100,
      flexDirection: 'row',

    }}>

      <ScrollView style={{ width: '100%', backgroundColor: '#B0A0FF', marginVertical: 1, }} >
        <View style={{ justifyContent: 'center', alignContent: 'center', }}>
          <TouchableOpacity onPress={() => { navigation.navigate(Details), setItemDetail(val) }} >
            <Image style={{ height: 100, width: 100 }} source={{ uri: val.url }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 10, color: '#000', }}>Brand:-{val.brand}</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 30, color: '#000', }}>Color:-{val.color}</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 50, color: '#000', }}>code:-{val.code}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#000', position: 'absolute', left: 120, top: 70, color: '#000', }}>Price:-{val.price}</Text>
          <IconButton icon={'delete'} iconColor={'white'} onPress={() => remove()}
            style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 10, top: -3, color: 'white', }}
          />

          <Button textColor='#fff' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 10, bottom: 3, }} onPress={() => { setcart([...cart, val]), navigation.navigate(BuyScreen) }}>Buy</Button>

        </View>
      </ScrollView>


    </View>


  )
}

const Cart = () => {
  const { cart, setcart } = useContext(CartContext)
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [CartAddress, setCartAddress] = useState()
  const [totalprice, setTotalprice] = useState()
  const [buyItem, setbuyItem] = useState()
  // const{adData,setAdData}=useContext(CartContext)


  let makePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_vsfrhBmZ90xJFJ', // Your api key
      amount: (totalprice) * 100,
      name: 'Danish',
      prefill: {
        email: 'danisharab2000@gmail.com',
        contact: '8934971231',
        name: 'Razorpay Software'
      },
      theme: { color: '#F37254' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
      // console.log("buyItem",buyItem)
    }).catch((error) => {
      // handle failure
      // alert(`Error: ${error.code} | ${error.description}`);
      Alert.alert(`Payment Cancelled`);
    });
  }
  const getAddress = async () => {
    let cdata = await AsyncStorage.getItem("Address")
    setCartAddress(JSON.parse(cdata))
  }
  useEffect(() => {
    getAddress()
  }, [isFocused])
  useEffect(() => {
    getTotal()
  }, [cart])
  const getTotal = () => {
    let total = 0
    if (cart) {
      for (i = 0; i < cart.length; i++) {
        // console.log(cart.p)
        total = total + parseInt(cart[i].price)
        // setbuyItem(cart[i].code)
        // console.log("jsa",cart[i].code)

      }
    }
    // console.log('>>>',total)
    setTotalprice(total)
  }
  // console.log('maindata', CartAddress)
  return (
    <View style={{ flex: 1, }}>

      {/* header */}
      <View style={{ width: '100%', height: '6.80%', backgroundColor: CustomColor.AppColor, elevation: 2, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 ,bottom:0.5}}>
        <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>Your Cart</Text>
        <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, paddingTop: 14, fontWeight: '600' }} onPress={() => setcart([])}>Clear Cart</Button>
      </View>

      {/* location */}
      <View style={{ width: '100%', height: 45, backgroundColor: CustomColor.AppColor, flexDirection: 'row', justifyContent: 'space-between', }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '75%', left: -5 }}>
          <IconButton icon={'map-marker-outline'} iconColor={'#fff'} style={{}} />

          {CartAddress ? <Text style={{ fontWeight: '500', fontSize: 16, color: "white", right: 140 }}>Deliver to:- {CartAddress[0].city}</Text> : null}

        </View>

        <View>
          <Button mode='contained' style={{ position: 'absolute', top: 3, right: 1, alignSelf: 'center' }}
            onPress={() => navigation.navigate(Addaddress)}
          >Change</Button>
        </View>
      </View>

      {/* Flatlist */}
      <View style={{ flex: 1, }}>
        <FlatList
          data={cart}
          renderItem={({ item }) => <CartCard val={item} />}
          contentContainerStyle={{ flexDirection: 'column', }}
        />

      </View>

      {/* Total Balance */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginHorizontal: 5 }}>
        {/* <Text style={{color:'blue',fontWeight:'800'}}>Sub-Total: </Text> */}
        <Text style={{ fontSize: 20, color: CustomColor.AppColor}}>Total: {totalprice}</Text>
      </View>


      {/* button */}
      <View style={{ flex: .07, marginTop: 3.5, marginHorizontal: 5, paddingBottom: 4 }}>
        {/* <Button mode='contained' onPress={() => { makePayment() }}>Place Order</Button> */}
        <CustomButton mode={'contained'} title={"Place Order"} onClick={()=> makePayment()} />
      </View>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})