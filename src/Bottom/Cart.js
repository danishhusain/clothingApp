import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button, IconButton, Avatar, Card, Title, Paragraph } from 'react-native-paper'
import Header from '../Common/Header'
import TotalOrder from '../Screens/TotalOrder'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import Addaddress from '../Screens/AddAddress'
import AsyncStorage from '@react-native-async-storage/async-storage'



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CartCard = ({ val }) => {
  const { cart, setcart } = useContext(CartContext)
  const [price, SetPrice] = useState(val.price)


  const remove = () => {
    let arr = cart.filter(function (item) {
      return item.code !== val.code
    }
    )
    setcart(arr)
  }
  return (
    <View style={{
      width: '100%',
      height:100,
      flexDirection: 'row',

    }}>

      <ScrollView style={{ width: '100%', backgroundColor: `#6a5acd`, marginVertical: 1, }} >
        <View style={{justifyContent:'center',alignContent:'center',}}>
        <Image style={{ height: 100, width: 100 }} source={require('../Images/tshirt.webp')} />
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', left: 120,top:10, color: 'white', }}>Brand:-{val.brand}</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', left: 120,top:30, color: 'white', }}>Color:-{val.color}</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', left: 120,top:50, color: 'white', }}>code:-{val.code}</Text>
        <Text style={{ fontSize: 16, fontWeight: '800', color: '#000', position: 'absolute', left: 120,top:70, color: 'white', }}>Price:-{val.price}</Text>
        <Text style={{ fontSize: 16, fontWeight: '800', color: '#000', position: 'absolute', left: 120,top:90, color: 'white', }}>Decription:-{val.decription}</Text>
        <IconButton icon={'delete'} iconColor={'white'}  onPress={() => remove()} 
        style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 10,top:-3, color: 'white', }}
        />

       
        </View>
      </ScrollView>
      {/* <Button mode='contained' onPress={()=>navigation.navigate(TotalOrder)}>Place Order</Button> */}


    </View>


  )
}

const Cart = () => {
  const { cart, setcart } = useContext(CartContext)
  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [CartAddress, setCartAddress] = useState([])
  // const{adData,setAdData}=useContext(CartContext)


  const getAddress = async () => {
    let cdata = await AsyncStorage.getItem("Address")
    setCartAddress(JSON.parse(cdata))
  }
  useEffect(() => {
    getAddress()
  }, [isFocused])

  console.log('maindata', CartAddress)
  return (
    <View style={{ flex: 1, }}>

      <View style={{ width: '100%', height: '8%', backgroundColor: `#6a5acd` }}>
        <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 1, top: 1, color: `white`, fontWeight: '600' }}>Your Cart</Text>
        <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 10, paddingTop: 20, fontWeight: '600' }} onPress={() => setcart([])}>Clear Cart</Button>
      </View>

      <View style={{ elevation: 1, paddingTop: 2, width: '100%', height: 45 }}>
        <FlatList data={CartAddress}
          renderItem={({ item }) => <Text style={{ fontWeight: '500', fontSize: 16, paddingLeft: 5 }}>Deliver to:-{item.city},{item.building},{item.pincode}</Text>

          } />
        <Button mode='contained' style={{ position: 'absolute', top: 3, right: 1, alignSelf: 'center' }}
          onPress={() => navigation.navigate(Addaddress)}
        >Change</Button>

      </View>

      <View style={{ flex: 1, }}>
        <FlatList
          data={cart}
          renderItem={({ item }) => <CartCard val={item} />}
          contentContainerStyle={{ flexDirection: 'column', flexWrap: "wrap", }}
        />

      </View>

      <View style={{ flex: .15, }}>
        <Button mode='contained' onPress={() => navigation.navigate(TotalOrder)}>Place Order</Button>
      </View>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})