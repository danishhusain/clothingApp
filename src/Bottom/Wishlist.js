import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button } from 'react-native-paper'





const CartWishlist = ({ val }) => {
    // const { cart, setcart } = useContext(CartContext)
    const {wishlist,setWishlist}= useContext(CartContext)
    const remove = () => {
      let arr = wishlist.filter(function (item) {
        return item.code !== val.code
      }
      )
      setWishlist(arr)
    }
    return (
  
  
      <View style={{
        width: '100%', height: 70, justifyContent: 'space-between',
        alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2,}}>
        <ScrollView style={{ width: '100%', backgroundColor: 'grey' }} >
  
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', width: '100%' }}>Brand:-{val.brand}</Text>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 5 }}>Color:-{val.color}</Text>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', bottom: 5 }}>Price:-{val.price}</Text>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', bottom: 5,right:5 }}>code:-{val.code}</Text>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Button  style={{ fontSize: 18, fontWeight: '500',}} onPress={() => remove()}>Remove</Button>
          </TouchableOpacity>
  
        </ScrollView>
  
      </View>
  
 
    )

}

const Wishlist = () => {
    const { wishlist, setWishlist } = useContext(CartContext)
    // const { cart, setcart } = useContext(CartContext)
//    alert("wish",wishlist)
//    alert("cart",cart)
    return (
        <View style={{ flex: 1, }}>
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', position: 'absolute', left: 1, top: 1 }}>Wishlist</Text>
        <Button  style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 1, top: 10, paddingTop: 20 }} onPress={() => setWishlist([])}>Clear Wishlist</Button>
  
            <FlatList
                data={wishlist}
                renderItem={({ item }) => <CartWishlist val={item} />}
                contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", flex: 1, marginTop: 60 }}
            />
        </View>
    )
}

export default Wishlist