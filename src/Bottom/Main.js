import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import { Button, IconButton } from 'react-native-paper'
import { CartContext } from '../Context/CartContext'

const product = [
  { title: "Tshirt", id: 0 },
  { title: "Jeans", id: 1 },
  { title: "Jacet", id: 2 },
  { title: "Shirt", id: 3 },
  { title: "Lower", id: 4 },
  { title: "Hoodie", id: 5 },
]

const tshirt = [
  { brand: "LV", color: "Black", price: "100", code: "t1" },
  { brand: "LV", color: "Black", price: "100", code: "t2" },
  { brand: "LV", color: "Black", price: "100", code: "t3" },
  { brand: "LV", color: "Black", price: "100", code: "t4" },
  { brand: "LV", color: "Black", price: "100", code: "t5" },
  { brand: "LV", color: "Black", price: "100", code: "t6" },
  { brand: "LV", color: "Black", price: "100", code: "t7" },
  { brand: "LV", color: "Black", price: "100", code: "t8" },
  { brand: "LV", color: "Black", price: "100", code: "t9" },
  { brand: "LV", color: "Black", price: "100", code: "t9" },
  { brand: "LV", color: "Black", price: "100", code: "t11" },
  { brand: "LV", color: "Black", price: "100", code: "t12" },
]

const jeans = [
  { brand: "Denim", color: "green", price: "1200", code: "j1" },
  { brand: "Denim", color: "green", price: "1200", code: "j2" },
  { brand: "Denim", color: "green", price: "1200", code: "j3" },
  { brand: "Denim", color: "green", price: "1200", code: "j4" },
  { brand: "Denim", color: "green", price: "1200", code: "j5" },
  { brand: "Denim", color: "green", price: "1200", code: "j6" },
  { brand: "Denim", color: "green", price: "1200", code: "j7" },
  { brand: "Denim", color: "green", price: "1200", code: "j8" },
  { brand: "Denim", color: "green", price: "1200", code: "j9" },
  { brand: "Denim", color: "green", price: "1200", code: "j10" },
  { brand: "Denim", color: "green", price: "1200", code: "j11" },
]
const jacket = [
  { brand: "Gucci", color: "red", price: "1000", code: "jk1" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk2" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk3" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk4" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk5" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk6" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk7" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk8" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk9" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk10" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk11" },
  { brand: "Gucci", color: "red", price: "1000", code: "jk12" },
]
const shirt = [
  { brand: "Gucci", color: "yellow", price: "3000", code: "s1" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s2" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s3" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s4" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s5" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s6" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s7" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s8" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s9" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s10" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s11" },
  { brand: "Gucci", color: "yellow", price: "3000", code: "s12" },
]
const lower = [
  { brand: "nike", color: "brown", price: "1000", code: "l1" },
  { brand: "nike", color: "brown", price: "1000", code: "l2" },
  { brand: "nike", color: "brown", price: "1000", code: "l3" },
  { brand: "nike", color: "brown", price: "1000", code: "l4" },
  { brand: "nike", color: "brown", price: "1000", code: "l5" },
  { brand: "nike", color: "brown", price: "1000", code: "l6" },
  { brand: "nike", color: "brown", price: "1000", code: "l7" },
  { brand: "nike", color: "brown", price: "1000", code: "l8" },
  { brand: "nike", color: "brown", price: "1000", code: "l9" },
  { brand: "nike", color: "brown", price: "1000", code: "l10" },
  { brand: "nike", color: "brown", price: "1000", code: "l1" },
  { brand: "nike", color: "brown", price: "1000", code: "l2" },
]
const hoodie = [
  { brand: "Gucci", color: "red", price: "4000", code: "h1" },
  { brand: "Gucci", color: "red", price: "4000", code: "h2" },
  { brand: "Gucci", color: "red", price: "4000", code: "h3" },
  { brand: "Gucci", color: "red", price: "4000", code: "h4" },
  { brand: "Gucci", color: "red", price: "4000", code: "h5" },
  { brand: "Gucci", color: "red", price: "4000", code: "h6" },
  { brand: "Gucci", color: "red", price: "4000", code: "h7" },
  { brand: "Gucci", color: "red", price: "4000", code: "h8" },
  { brand: "Gucci", color: "red", price: "4000", code: "h9" },
  { brand: "Gucci", color: "red", price: "4000", code: "h10" },
  { brand: "Gucci", color: "red", price: "4000", code: "h11" },
  { brand: "Gucci", color: "red", price: "4000", code: "h12" },
]

const Main = () => {
  const [category, setCategory] = useState(0)
  const [iconSelected, setIconSelected] = useState(false)
  // const [firstTimepress, setFirstTimePress] = useState(false)
  const { cart, setcart } = useContext(CartContext)
  const { wishlist, setWishlist } = useContext(CartContext)



  return (
    // <ScrollView>
    <View style={{ flex: 1, }}>
      <Header />
      <Image source={require('../Images/banner1.jpg')} style={{ width: '100%', height: 250, borderRadius: 20 }} />

      <View>
        <FlatList
          data={product}
          horizontal
          renderItem={({ item }) => <Button style={{ margin: 5 }} mode='outlined'
            disabled={category == item.id ? true : false} onPress={() => setCategory(item.id)}>{item.title}</Button>}
        />
      </View>

      {category == 0 && <FlatList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap", }}
        data={tshirt}
        renderItem={({ item }) => <View style={{ marginHorizontal: 15, backgroundColor: 'white', width: '100%', }}>
          <TouchableOpacity onPress={() => { console.log("main") }}>
            <Image style={{ height: 160, width: 160 }} source={require("../Images/tshirt.webp")} />

            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30, }}
              onPress={() => {
                setWishlist([...wishlist, item])
                // setFirstTimePress(true)
                setIconSelected(item.code)
              }}>
              <IconButton icon="heart"

                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
                size={20}
              >
              </IconButton>
            </TouchableOpacity>

            <Text>{item.brand}</Text>
            <Text>{item.color}</Text>
            <Text>RS: {item.price}</Text>
          </TouchableOpacity>

          <Button mode='outlined' style={{ position: 'absolute', bottom: 7, left: 80, }} onPress={() => setcart([...cart, item])}>+</Button>


        </View>}

      />}
      {category == 1 && <FlatList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        data={jeans}
        renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
          <TouchableOpacity onPress={() => console.log("pressed")}>
            <Image style={{ height: 160, width: 160 }} source={require("../Images/jeans.webp")} />
            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30, }}
              onPress={() =>
                setWishlist([...wishlist, item],
                  setIconSelected(item.code)
                )}>
              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}

                size={20}
              ></IconButton>
            </TouchableOpacity>
            <Text>{item.brand}</Text>
            <Text>{item.color}</Text>
            <Text>RS: {item.price}</Text>
          </TouchableOpacity>
          <Button mode='outlined' style={{ position: 'absolute', bottom: 7, left: 80, }} onPress={() => setcart([...cart, item])}>+</Button>


        </View>}
      />}
      {category == 2 && <FlatList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        data={jacket}
        renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
          <TouchableOpacity onPress={() => { console.log("main") }}>
            <Image style={{ height: 160, width: 160 }} source={require("../Images/jacket.webp")} />
            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30, }}
              onPress={() =>
                setWishlist([...wishlist, item],
                  setIconSelected(item.code)
                )}>
              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}

                size={20}
              ></IconButton>
            </TouchableOpacity>

            <Text>{item.brand}</Text>
            <Text>{item.color}</Text>
            <Text>RS: {item.price}</Text>
          </TouchableOpacity>
          <Button mode='outlined' style={{ position: 'absolute', bottom: 7, left: 80, }} onPress={() => setcart([...cart, item])}>+</Button>


        </View>}
      />}
      {category == 3 && <FlatList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        data={shirt}
        renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
          <TouchableOpacity onPress={() => { console.log("main") }}>
            <Image style={{ height: 160, width: 160 }} source={require("../Images/shirt.webp")} />
            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30, }}
              onPress={() =>
                setWishlist([...wishlist, item],
                  setIconSelected(item.code)
                )}>
              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}

                size={20}
              ></IconButton>
            </TouchableOpacity>

            <Text>{item.brand}</Text>
            <Text>{item.color}</Text>
            <Text>RS: {item.price}</Text>
          </TouchableOpacity>
          <Button mode='outlined' style={{ position: 'absolute', bottom: 7, left: 80, }} onPress={() => setcart([...cart, item])}>+</Button>


        </View>}
      />}
      {category == 4 && <FlatList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        data={lower}
        renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
          <TouchableOpacity onPress={() => { console.log("main") }}>
            <Image style={{ height: 160, width: 160 }} source={require("../Images/lower.webp")} />
            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30, }}
              onPress={() =>
                setWishlist([...wishlist, item],
                  setIconSelected(item.code)
                )}>
              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}

                size={20}
              ></IconButton>
            </TouchableOpacity>

            <Text>{item.brand}</Text>
            <Text>{item.color}</Text>
            <Text>RS: {item.price}</Text>
          </TouchableOpacity>
          <Button mode='outlined' style={{ position: 'absolute', bottom: 7, left: 80, }} onPress={() => setcart([...cart, item])}>+</Button>


        </View>}
      />}
      {category == 5 && <FlatList
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        data={hoodie}
        renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
          <TouchableOpacity onPress={() => { console.log("main") }}>
            <Image style={{ height: 160, width: 160 }} source={require("../Images/hoodie.webp")} />
            <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30, }}
              onPress={() =>
                setWishlist([...wishlist, item],
                  setIconSelected(item.code)
                )}>
              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}

                size={20}
              ></IconButton>
            </TouchableOpacity>

            <Text>{item.brand}</Text>
            <Text>{item.color}</Text>
            <Text>RS: {item.price}</Text>
          </TouchableOpacity>
          <Button mode='outlined' style={{ position: 'absolute', bottom: 7, left: 80, }} onPress={() => setcart([...cart, item])}>+</Button>


        </View>}
      />}
    </View>
    // </ScrollView>
  )
}

export default Main