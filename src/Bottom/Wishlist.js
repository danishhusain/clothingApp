import { View, Text, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button, IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import DetailsCart from '../Screens/DetailsCart'






const CartWishlist = ({ val }) => {
  const [iconSelected, setIconSelected] = useState(false)
  const { wishlist, setWishlist } = useContext(CartContext)
  const { cart, setcart } = useContext(CartContext)
  const navigation = useNavigation()
  const [DetailsCartItem, setDetailsCartItem] = useState([])


  const remove = () => {
    let arr = wishlist.filter(function (item) {
      return item.code !== val.code
    }
    )
    setWishlist(arr)
  }
  return (
    <View style={{ width: '100%', height: 100, flexDirection: 'row', }}>

      <ScrollView style={{ width: '100%', backgroundColor: '#B0A0FF', marginVertical: 1, }} >
        <View style={{ justifyContent: 'center', alignContent: 'center', }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate(DetailsCart),
              setDetailsCartItem(cart)
          }} >
            <Image style={{ height: 100, width: 100 }} source={require('../Images/tshirt.webp')} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 10, color: '#000', }}>Brand:-{val.brand}</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 30, color: '#000', }}>Color:-{val.color}</Text>
          <Text style={{ fontSize: 16, fontWeight: '400', color: '#000', position: 'absolute', left: 120, top: 50, color: '#000', }}>code:-{val.code}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#000', position: 'absolute', left: 120, top: 70, color: '#000', }}>Price:-{val.price}</Text>
          <IconButton icon={"heart"} iconColor={'#1DA664'} onPress={() => remove()}
            style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 10, top: -3, color: 'white', }}
          />
          <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 10, bottom: 3, color: 'white', }} onPress={() => setcart([...cart])}>Add Cart</Button>
        </View>

      </ScrollView>

    </View>


  )

}

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(CartContext)

  return (
    <View style={{ flex: 1 ,}}>

      <View style={{flex:1}}>
        {/* header */}
        <View style={{ width: '100%', height: '8%', backgroundColor: `#6a5acd`, borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>Wishlist</Text>
          <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 10, paddingTop: 20, fontWeight: '600' }} onPress={() => setWishlist([])}>Clear Cart</Button>
        </View>



        <FlatList
          data={wishlist}
          renderItem={({ item }) => <CartWishlist val={item} />}
          contentContainerStyle={{ flexDirection: 'column', flexWrap: "wrap", }}
        />

      </View>
    </View>
  )
}

export default Wishlist