import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { IconButton, Button, Badge } from 'react-native-paper'
import Wishlist from '../Bottom/Wishlist'
import Main from '../Bottom/Main'
import Search from '../Bottom/Search'
import Cart from '../Bottom/Cart'
import Profile from '../Bottom/Profile'
import { CartContext } from '../Context/CartContext'
import { mdiMagnify, mdiHomeSearchOutline } from '@mdi/js';


const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const { cart,setCart } = useContext(CartContext)
  const { wishlist, setWishlist } = useContext(CartContext)




  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (<Main />) : selectedTab == 1 ? (<Search />) : selectedTab == 2 ? (<Cart />) : selectedTab == 3 ? (<Wishlist />) : (<Profile />)}

      <View style={{
        flex: 1, position: 'absolute', bottom: 0, flexDirection: 'row',
        justifyContent: 'space-evenly', width: "100%", elevation: 1, backgroundColor: `#6a5acd`
      }}>

        <IconButton icon="home"
          iconColor={selectedTab == 0 ? "blue" : `#f0f8ff`}
          onPress={() => setSelectedTab(0)}
          size={25}
        >
        </IconButton>

        <IconButton icon="magnify"
          iconColor={selectedTab == 1 ? "blue" : `#f0f8ff`}
          size={25}
          onPress={() => setSelectedTab(1)}
        >
        </IconButton>


        <View style={{ backgroundColor: '#FFF', borderRadius: 25 }}>
          <View style={{ backgroundColor: 'red', position: 'absolute', right: 1, top: 1, borderRadius: 25, alignSelf: 'center' }}>
            {cart.length == 0 ? null :
              <Badge size={18} >{cart.length}</Badge>
            }
          </View>



          <IconButton icon="cart" iconColor={selectedTab == 2 ? "blue" : `#000`} onPress={() => setSelectedTab(2)}
            size={25} >
          </IconButton>

        </View>


        <View >
          <View style={{ backgroundColor: 'red', position: 'absolute', right: 1, top: 1, borderRadius: 25, alignSelf: 'center' }}>
          {wishlist.length == 0 ? null :
            <Badge size={18} >{wishlist.length}</Badge>
          }

          </View>

          <IconButton icon="heart"
            onPress={() => setSelectedTab(3)}
            iconColor={selectedTab == 3 ? "blue" : `#f0f8ff`}
            size={25}  >
          </IconButton>
        </View>

        <IconButton icon="account"
          iconColor={selectedTab == 4 ? "blue" : `#f0f8ff`}
          onPress={() => setSelectedTab(4)}
          size={25}  >
        </IconButton>

      </View>
    </View>
  )
}

export default HomeScreen