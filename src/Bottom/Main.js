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
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
  { brand: "LV", color: "Black", price: "100" },
]

const jeans = [
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
  { brand: "Denim", color: "green", price: "1200" },
]
const jacket = [
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
  { brand: "Gucci", color: "red", price: "1000" },
]
const shirt = [
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
  { brand: "Gucci", color: "yellow", price: "3000" },
]
const lower = [
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
  { brand: "nike", color: "brown", price: "1000" },
]
const hoodie = [
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
  { brand: "Gucci", color: "red", price: "4000" },
]

const Main = () => {
  const [category, setCategory] = useState(0)
  const{cart,setcart}=useContext(CartContext)
  const{wishlist,setWishlist}=useContext(CartContext)
  
 

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
          contentContainerStyle={{ flexDirection: "row",flexWrap: "wrap",  }}
          data={tshirt}
          renderItem={({ item }) => <View style={{ marginHorizontal: 15,backgroundColor:'white',width:'100%', }}>
            <TouchableOpacity onPress={() => { console.log("main") }}>
              <Image style={{ height: 160, width: 160 }} source={require("../Images/tshirt.webp")} />

              <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30,elevation:10 }} onPress={() => setWishlist(...wishlist,item)}>
                <IconButton icon="heart"
                  iconColor='#000'
                  size={20}
                >
                </IconButton>
              </TouchableOpacity>
              <Text>{item.brand}</Text>
              <Text>{item.color}</Text>
              <Text>RS: {item.price}</Text>
            </TouchableOpacity>
            <Button mode='outlined'  style={{position:'absolute',bottom:7,left:80,}} onPress={()=>setcart([...cart,item])}>+</Button>


          </View>}

        />}
        {category == 1 && <FlatList
          contentContainerStyle={{ flexDirection: "row",flexWrap: "wrap"  }}
          data={jeans}
          renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity onPress={() => console.log("pressed")}>
              <Image style={{ height: 160, width: 160 }} source={require("../Images/jeans.webp")} />
              <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30,elevation:10 }} onPress={() => { console.log("icon") }}>
                <IconButton icon="heart"
                  iconColor='#000'
                  size={20}
                ></IconButton>
              </TouchableOpacity>
              <Text>{item.brand}</Text>
              <Text>{item.color}</Text>
              <Text>RS: {item.price}</Text>
            </TouchableOpacity>
            <Button mode='outlined'  style={{position:'absolute',bottom:7,left:80,}} onPress={()=>setcart([...cart,item])}>+</Button>


          </View>}
        />}
        {category == 2 && <FlatList
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
          data={jacket}
          renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity onPress={() => { console.log("main") }}>
              <Image style={{ height: 160, width: 160 }} source={require("../Images/jacket.webp")} />
              <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30,elevation:10 }} onPress={() => { console.log("icon") }}>
                <IconButton icon="heart"
                  iconColor='#000'
                  size={20}
                ></IconButton>
              </TouchableOpacity>

              <Text>{item.brand}</Text>
              <Text>{item.color}</Text>
              <Text>RS: {item.price}</Text>
            </TouchableOpacity>
            <Button mode='outlined'  style={{position:'absolute',bottom:7,left:80,}} onPress={()=>setcart([...cart,item])}>+</Button>


          </View>}
        />}
        {category == 3 && <FlatList
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
          data={shirt}
          renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity onPress={() => { console.log("main") }}>
              <Image style={{ height: 160, width: 160 }} source={require("../Images/shirt.webp")} />
              <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30,elevation:10 }} onPress={() => { console.log("icon") }}>
                <IconButton icon="heart"
                  iconColor='#000'
                  size={20}
                ></IconButton>
              </TouchableOpacity>

              <Text>{item.brand}</Text>
              <Text>{item.color}</Text>
              <Text>RS: {item.price}</Text>
            </TouchableOpacity>
            <Button mode='outlined'  style={{position:'absolute',bottom:7,left:80,}} onPress={()=>setcart([...cart,item])}>+</Button>


          </View>}
        />}
        {category == 4 && <FlatList
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
          data={lower}
          renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity onPress={() => { console.log("main") }}>
              <Image style={{ height: 160, width: 160 }} source={require("../Images/lower.webp")} />
              <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30,elevation:10 }} onPress={() => { console.log("icon") }}>
                <IconButton icon="heart"
                  iconColor='#000'
                  size={20}
                ></IconButton>
              </TouchableOpacity>

              <Text>{item.brand}</Text>
              <Text>{item.color}</Text>
              <Text>RS: {item.price}</Text>
            </TouchableOpacity>
            <Button mode='outlined'  style={{position:'absolute',bottom:7,left:80,}} onPress={()=>setcart([...cart,item])}>+</Button>


          </View>}
        />}
        {category == 5 && <FlatList
          contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
          data={hoodie}
          renderItem={({ item }) => <View style={{ marginHorizontal: 15 }}>
            <TouchableOpacity onPress={() => { console.log("main") }}>
              <Image style={{ height: 160, width: 160 }} source={require("../Images/hoodie.webp")} />
              <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 30,elevation:5 }} onPress={() => { console.log("icon") }}>
                <IconButton icon="heart"
                  iconColor='#000'
                  size={20}
                ></IconButton>
              </TouchableOpacity>

              <Text>{item.brand}</Text>
              <Text>{item.color}</Text>
              <Text>RS: {item.price}</Text>
            </TouchableOpacity>
            <Button mode='outlined'  style={{position:'absolute',bottom:7,left:80,}} onPress={()=>setcart([...cart,item])}>+</Button>


          </View>}
        />}
      </View>
    // </ScrollView>
  )
}

export default Main