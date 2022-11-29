import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { IconButton, Button, MD3ColorsF } from 'react-native-paper'
import Wishlist from '../Bottom/Wishlist'
import Main from '../Bottom/Main'
import Search from '../Bottom/Search'
import Cart from '../Bottom/Cart'
import Profile from '../Bottom/Profile'
import { CartContext } from '../Context/CartContext'


const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const {cart}=useContext(CartContext)
  const {wishlist,setWishlist}=useContext(CartContext)




  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (<Main />) : selectedTab == 1 ? (<Search />) : selectedTab == 2 ? (<Cart />) : selectedTab == 3 ? (<Wishlist />) : (<Profile />)}

      <View style={{
        flex: 1, position: 'absolute', bottom: 0, flexDirection: 'row',
        justifyContent: 'space-evenly', width: "100%", elevation: 1, backgroundColor: "white"
      }}>

        <IconButton icon="home"
          iconColor={selectedTab == 0 ? "blue" : "black"}
          onPress={() => setSelectedTab(0)}
          size={25}
        >
        </IconButton>

        <IconButton icon="heart"
          iconColor={selectedTab == 1 ? "blue" : "black"}
          size={25}
          onPress={() => setSelectedTab(1)}
        >
        </IconButton>


        <View style={{backgroundColor:'#FFF',borderRadius:25}}>
        <View style={{ backgroundColor: 'red', position:'absolute',right:1 ,top:1,borderRadius:25,alignSelf:'center'}}>
          <Text style={{ fontSize: 16, color: '#fff' }}>{cart.length}</Text></View>
          <IconButton icon="home"  iconColor={selectedTab == 2 ? "blue" : "black"} onPress={() => setSelectedTab(2)}
            size={25} >
          </IconButton>
        </View>


        <View >
        <View style={{ backgroundColor: 'red', position:'absolute',right:1 ,top:1,borderRadius:25,alignSelf:'center'}}>
          <Text style={{ fontSize: 16, color: '#fff' }}>{wishlist.length}</Text></View>

        <IconButton icon="heart"
          onPress={() => setSelectedTab(3)}
          iconColor={selectedTab == 3 ? "blue" : "black"}
          size={25}  >
        </IconButton>
        </View>

        <IconButton icon="account"
          iconColor={selectedTab == 4 ? "blue" : "black"}
          onPress={() => setSelectedTab(4)}
          size={25}  >
        </IconButton>

      </View>
    </View>
  )
}

export default HomeScreen