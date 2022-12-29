import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import { Button, IconButton } from 'react-native-paper'
import { CartContext } from '../Context/CartContext'
import { product, tshirt, jeans, jacket, shirt, lower, hoodie } from '../DataBase/Api'
import { ImageSlider } from "react-native-image-slider-banner";
import { useNavigation } from '@react-navigation/native'
import Details from '../Screens/Details'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
import TotalOrder from '../Screens/TotalOrder'
import BuyScreen from '../Screens/BuyScreen'




const Main = () => {
  const navigation = useNavigation()
  const [category, setCategory] = useState(0)
  const [iconSelected, setIconSelected] = useState(false)
  const { cart, setcart } = useContext(CartContext)
  const { wishlist, setWishlist } = useContext(CartContext)
  const { setItemDetail } = useContext(CartContext)




  return (
    <View style={{ flex: 1, paddingBottom: 53.5 }}>
      <ScrollView>
        <View>
          <Header />
        </View>
        <View style={{}}>
          {/* <ImageSlider
            data={[
              { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
              { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
              {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
            ]}
            autoPlay={false}
            onItemChanged={(item) => console.log("item", item)}
            closeIconColor="#fff"
            showHeader={false}
          /> */}
          <Image source={require('../Images/slide1.webp')} style={{ width: '100%', height: 250, borderRadius: 20 }} />

        </View>

        <View style={{}}>
          <FlatList
            data={product}
            horizontal
            renderItem={({ item }) => <Button style={{ margin: 5 }} mode='contained'
              disabled={category == item.id ? true : false}
              onPress={() => setCategory(item.id)}>{item.title}</Button>}
          />
        </View>

        {/* <View style={{  backgroundColor: 'red',flex: 1,flexDirection:'row',justifyContent:'space-between' }}> */}
        {category == 0 &&
          <FlatList
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: 'wrap',
              // backgroundColor: 'red',
              justifyContent: 'space-between',
            }}
          
            data={tshirt}
           
            renderItem={({ item }) => <View style={{ backgroundColor: '#B0A0FF', borderRadius: 10, }}>
              
              <TouchableOpacity onPress={() => {
                navigation.navigate(Details),
                  setItemDetail(item)
              }}  >
                <Image style={{ height: 195, width: 195 }} source={require('../Images/tshirt.webp')} />
                {/* //for url */}
                {/* <Image style={{ height: 195, width: 195 }} source={{uri: item.Image_url}} /> */} 
               
              </TouchableOpacity>

              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
                size={20}
                style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={() => {
                  setWishlist([...wishlist, item])
                  setIconSelected(item.code)
                }
                }>
              </IconButton>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ left: 5, }}>{item.brand}</Text>
                <Text style={{ left: 5, }}>{item.color}</Text>
                <Text style={{ left: 5, }}>RS: {item.price}</Text>
                {/* <Image source={{uri:'item.URL'}} style={{height: 200, width: 200, borderRadius: 37.5 }} /> */}

                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setcart([...cart, item]), navigation.navigate(BuyScreen) }}>Buy</Button>
              </View>
            </View>}
          />}
        {/* </View> */}

        {category == 1 &&
          <FlatList
            contentContainerStyle={{
              flexWrap: "wrap",
              flexDirection: "row",
              // backgroundColor: '#000',
              // flex:1,
              justifyContent: 'space-between',
              // padding:5
            }}
            data={jeans}
            renderItem={({ item }) => <View style={{ backgroundColor: '#B0A0FF', borderRadius: 10, }}>
              <TouchableOpacity onPress={() => {
                navigation.navigate(Details),
                  setItemDetail(item)
              }}>
                <Image style={{ height: 195, width: 195 }} source={require("../Images/jeans.webp")} />
              </TouchableOpacity>

              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
                size={20}
                style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={() => {
                  setWishlist([...wishlist, item])
                  setIconSelected(item.code)
                }
                }>
              </IconButton>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ left: 5, }}>{item.brand}</Text>
                <Text style={{ left: 5, }}>{item.color}</Text>
                <Text style={{ left: 5, }}>RS: {item.price}</Text>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setWishlist([...cart, item])}>Cart</Button>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setcart([...cart, item]), navigation.navigate(BuyScreen) }}>Buy</Button>
              </View>
            </View>}
          />}
        {category == 2 &&
          <FlatList
            contentContainerStyle={{
              flexWrap: "wrap",
              flexDirection: "row",
              // backgroundColor: '#000',
              // flex:1,
              justifyContent: 'space-between',
              // padding:5
            }}
            data={jacket}
            renderItem={({ item }) => <View style={{ backgroundColor: '#B0A0FF', borderRadius: 10, }}>
              <TouchableOpacity onPress={(props) => {
                navigation.navigate(Details),
                  setItemDetail(item)
              }} >
                <Image style={{ height: 195, width: 195 }} source={require("../Images/jacket.webp")} />
              </TouchableOpacity>

              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
                size={20}
                style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={() => {
                  setWishlist([...wishlist, item])
                  setIconSelected(item.code)
                }
                }>
              </IconButton>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ left: 5, }}>{item.brand}</Text>
                <Text style={{ left: 5, }}>{item.color}</Text>
                <Text style={{ left: 5, }}>RS: {item.price}</Text>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setcart([...cart, item]), navigation.navigate(BuyScreen) }}>Buy</Button>
              </View>
            </View>}
          />}
        {category == 3 &&
          <FlatList
            contentContainerStyle={{
              flexWrap: "wrap",
              flexDirection: "row",
              // backgroundColor: '#000',
              // flex:1,
              justifyContent: 'space-between',
              // padding:5
            }}
            data={shirt}
            renderItem={({ item }) => <View style={{ backgroundColor: '#B0A0FF', borderRadius: 10, }}>
              <TouchableOpacity onPress={(props) => {
                navigation.navigate(Details),
                  setItemDetail(item)
              }} >
                <Image style={{ height: 195, width: 195 }} source={require("../Images/shirt.webp")} />
              </TouchableOpacity>

              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
                size={20}
                style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={() => {
                  setWishlist([...wishlist, item])
                  setIconSelected(item.code)
                }
                }>
              </IconButton>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ left: 5, }}>{item.brand}</Text>
                <Text style={{ left: 5, }}>{item.color}</Text>
                <Text style={{ left: 5, }}>RS: {item.price}</Text>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setcart([...cart, item]), navigation.navigate(BuyScreen) }}>Buy</Button>
              </View>
            </View>}
          />}
        {category == 4 &&
          <FlatList
            contentContainerStyle={{
              flexWrap: "wrap",
              flexDirection: "row",
              // backgroundColor: '#000',
              // flex:1,
              justifyContent: 'space-between',
              // padding:5
            }}
            data={lower}
            renderItem={({ item }) => <View style={{ backgroundColor: '#B0A0FF', borderRadius: 10, }}>
              <TouchableOpacity onPress={(props) => {
                navigation.navigate(Details),
                  setItemDetail(item)
              }} >
                <Image style={{ height: 195, width: 195 }} source={require("../Images/lower.webp")} />
              </TouchableOpacity>

              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
                size={20}
                style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={() => {
                  setWishlist([...wishlist, item])
                  setIconSelected(item.code)
                }
                }>
              </IconButton>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ left: 5, }}>{item.brand}</Text>
                <Text style={{ left: 5, }}>{item.color}</Text>
                <Text style={{ left: 5, }}>RS: {item.price}</Text>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setcart([...cart, item]), navigation.navigate(BuyScreen) }}>Buy</Button>
              </View>
            </View>}
          />}
        {category == 5 &&
          <FlatList
            contentContainerStyle={{
              flexWrap: "wrap",
              flexDirection: "row",
              // backgroundColor: '#000',
              // flex:1,
              justifyContent: 'space-between',
              // padding:5
            }}
            data={hoodie}
            renderItem={({ item }) => <View style={{ backgroundColor: '#B0A0FF', borderRadius: 10, }}>
              <TouchableOpacity onPress={(props) => {
                navigation.navigate(Details),
                  setItemDetail(item)
              }} >
                <Image style={{ height: 195, width: 195 }} source={require("../Images/hoodie.webp")} />
              </TouchableOpacity>

              <IconButton icon="heart"
                iconColor={iconSelected == item.code ? '#1DA664' : '#000'}
                size={20}
                style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={() => {
                  setWishlist([...wishlist, item])
                  setIconSelected(item.code)
                }
                }>
              </IconButton>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ left: 5, }}>{item.brand}</Text>
                <Text style={{ left: 5, }}>{item.color}</Text>
                <Text style={{ left: 5, }}>RS: {item.price}</Text>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
                <Button textColor='blue' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setcart([...cart, item]), navigation.navigate(BuyScreen) }}>Buy</Button>
              </View>
            </View>}
          />}


      </ScrollView>
    </View>
    //  {/* </View> */}

  )
}

export default Main