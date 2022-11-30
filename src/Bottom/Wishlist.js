import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button, IconButton } from 'react-native-paper'






const CartWishlist = ({ val }) => {
  const [iconSelected, setIconSelected] = useState(false)
  const { wishlist, setWishlist } = useContext(CartContext)
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
      alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2,
    }}>
      <ScrollView style={{ width: '100%', backgroundColor: `#6a5acd` }} >

        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', width: '100%',color:'white' }}>Brand:-{val.brand}</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 5,color:'white' }}>Color:-{val.color}</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', bottom: 5,color:'white' }}>Price:-{val.price}</Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', bottom: 5, right: 5, color:'white'}}>code:-{val.code}</Text>

        <TouchableOpacity style={{ position: 'absolute', bottom: 25, alignSelf: 'center', borderRadius: 30, }}
          onPress={() => {
            remove()
          }}
        >
          <IconButton icon="heart"
            iconColor='#1DA664'
            // iconColor={iconSelected==item.code?'#1DA664':'#000'}
            size={20}
          >
          </IconButton>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginRight: 10 }}>
          <Button textColor='white' style={{ fontSize: 18, fontWeight: '500', }} onPress={() => console.log("wish")}>Add Cart</Button>
        </TouchableOpacity>

      </ScrollView>

    </View>


  )

}

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(CartContext)

  return (
    <View style={{ flex: 1, borderBottomWidth: 0.2, borderBottomColor: '#000', }}>

      <View style={{ felx:1,borderBottomWidth: 0.2, borderBottomColor: '#000',backgroundColor:'#000' }}>
      {/* <View style={{ backgroundColor:'#000' }}> */}
        <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', position: 'absolute', left: 1, top: 1 ,color:`#6a5acd`,fontWeight:'600'}}>Wishlist</Text>
        <Button style={{ fontSize: 16, fontWeight: '600', color: '#000', position: 'absolute', right: 1, top: 10, paddingTop: 20,color:`#6a5acd` }} onPress={() => setWishlist([])}>Clear Wishlist</Button>
      </View>
      {/* </View> */}


        <FlatList
          data={wishlist}
          renderItem={({ item }) => <CartWishlist val={item} />}
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", flex: 1, marginTop: 60 }}
        />

    </View>
  )
}

export default Wishlist