import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button,IconButton } from 'react-native-paper'
import Header from '../Common/Header'





const CartCard = ({ val }) => {
  const { cart, setcart } = useContext(CartContext)
  const remove = () => {
    let arr = cart.filter(function (item) {
      return item.code !== val.code
    }
    )
    setcart(arr)
  }
  return (


    <View style={{
      width: '100%', height: 70, justifyContent: 'space-between',
      alignItems: 'center', flexDirection: 'row', }}>
      <ScrollView style={{ width: '100%', backgroundColor: `#6a5acd`,marginVertical:2 }} >

        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', width: '100%', color:'white'}}>Brand:-{val.brand}</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 5, color:'white'}}>Color:-{val.color}</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', bottom: 5 ,color:'white'}}>Price:-{val.price}</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', bottom: 5,right:5 ,color:'white'}}>code:-{val.code}</Text>
        <TouchableOpacity style={{ marginRight: 10, }}>
          <IconButton icon={'delete'}  iconColor={'white'} style={{ alignSelf:'center',}} onPress={() => remove()}/>
        </TouchableOpacity>
       

      </ScrollView>

    </View>


  )
}

const Cart = () => {
  const { cart, setcart } = useContext(CartContext)
// alert(cart)
// console.log(cart)
  return (
    <View style={{ flex: 1,}}>
      
      <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', position: 'absolute', left: 1, top: 1,color:`#6a5acd`,fontWeight:'600' }}>Your Cart</Text>
      <Button  style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 1, top: 10, paddingTop: 20,color:`#6a5acd`,fontWeight:'600' }} onPress={() => setcart([])}>Clear Cart</Button>
  
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartCard val={item} />}
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", flex: 1, marginTop: 60 }}
      />

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})