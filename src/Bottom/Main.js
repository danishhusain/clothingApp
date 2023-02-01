import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Common/Header'
import { Button, IconButton } from 'react-native-paper'
import { CartContext } from '../Context/CartContext'
import { product, tshirt, jeans, jacket, shirt, lower, hoodie } from '../DataBase/Api'
import { ImageSlider } from "react-native-image-slider-banner";
import { useNavigation } from '@react-navigation/native'
import Details from '../Screens/Details'
import BuyScreen from '../Screens/BuyScreen'
import ImageSliding from '../Components/ImageSliding'
import { CustomButton } from '../CustomComponents/CustomButton'
import CustomColor from '../CustomComponents/CustomColor'




const Main = () => {
  const navigation = useNavigation()
  const [category, setCategory] = useState(0)
  const [iconSelected, setIconSelected] = useState(false)
  const { cart, setcart } = useContext(CartContext)
  const { wishlist, setWishlist } = useContext(CartContext)
  const { setItemDetail } = useContext(CartContext)




  return (


    <View style={{ flex: 1, paddingBottom: 53.5 }}>
      <View style={{}}>
        <Header />
      </View>
      <View style={{width: '100%', height: 250,}}>
        {/* <Image source={require('../Images/slide1.webp')} style={{ width: '100%', height: 250, borderRadius: 20 }} /> */}
        {/* <Image source={require('../Images/slide1.webp')} style={{ width: '100%', height: 250, borderRadius: 20 }} /> */}
            <ImageSliding/>

       

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


      {/* <View style={{  backgroundColor: 'red',flex: 1,flexDirection:'row',justifyContent:'space-between' }}>
      <View style={{backgroundColor:'blue'}}> */}
      {category == 0 &&
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={tshirt}
          renderItem={({ item }) => <View style={{ borderRadius: 10, padding: 0.5 }}>

            <TouchableOpacity onPress={() => {
              navigation.navigate(Details),
                setItemDetail(item)
                
            }}  >
              {/* for source */}
              {/* <Image style={{ height: 150, width: 195}} source={require('../Images/tshirt.webp')} /> */}
              <Image style={{ height: 150, width: 195}} source={{uri: item.url}} />
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
            <View style={{ justifyContent: 'space-between', backgroundColor: CustomColor.AppColor, }}>
              <Text style={{ left: 5, }}>{item.brand}</Text>
              <Text style={{ left: 5, }}>{item.color}</Text>
              <Text style={{ left: 5, }}>RS: {item.price}</Text>
              {/* <Image source={{uri:'item.URL'}} style={{height: 200, width: 200, borderRadius: 37.5 }} /> */}

              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setItemDetail(item), navigation.navigate(BuyScreen) }}>Buy</Button>
            </View>
          </View>}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />}
        {/* </View>
        <View style={{backgroundColor:'green'}}>
        <Text>Recommended for you</Text>
        </View>
      </View> */}

      {category == 1 &&
        <FlatList
          contentContainerStyle={{
            // flexWrap: "wrap",
            // flexDirection: "row",
            // backgroundColor: '#000',
            // flex:1,
            justifyContent: 'space-between',
            // padding:5
          }}
          data={jeans}
          renderItem={({ item }) => <View style={{  borderRadius: 10, padding: 0.5 }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate(Details),
                setItemDetail(item)
            }}>
                     <Image style={{ height: 150, width: 195}} source={{uri: item.url}} />

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
            <View style={{ justifyContent: 'space-between', backgroundColor: CustomColor.AppColor, }}>
              <Text style={{ left: 5, }}>{item.brand}</Text>
              <Text style={{ left: 5, }}>{item.color}</Text>
              <Text style={{ left: 5, }}>RS: {item.price}</Text>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setItemDetail(item), navigation.navigate(BuyScreen) }}>Buy</Button>
            </View>
          </View>}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />}
      {category == 2 &&
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={jacket}
          renderItem={({ item }) => <View style={{  borderRadius: 10, padding: 0.5 }}>
            <TouchableOpacity onPress={(props) => {
              navigation.navigate(Details),
                setItemDetail(item)
            }} >
              <Image style={{ height: 150, width: 195 }} source={{uri:item.url}} />
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
            <View style={{ justifyContent: 'space-between', backgroundColor: CustomColor.AppColor, }}>
              <Text style={{ left: 5, }}>{item.brand}</Text>
              <Text style={{ left: 5, }}>{item.color}</Text>
              <Text style={{ left: 5, }}>RS: {item.price}</Text>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setItemDetail(item), navigation.navigate(BuyScreen) }}>Buy</Button>
            </View>
          </View>}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />}
      {category == 3 &&
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={shirt}
          renderItem={({ item }) => <View style={{  borderRadius: 10,padding:0.5 }}>
            <TouchableOpacity onPress={(props) => {
              navigation.navigate(Details),
                setItemDetail(item)
            }} >
              <Image style={{ height: 150, width: 195 }} source={{uri:item.url}} />
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
            <View style={{ justifyContent: 'space-between' , backgroundColor: CustomColor.AppColor, }}>
              <Text style={{ left: 5, }}>{item.brand}</Text>
              <Text style={{ left: 5, }}>{item.color}</Text>
              <Text style={{ left: 5, }}>RS: {item.price}</Text>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setItemDetail(item), navigation.navigate(BuyScreen) }}>Buy</Button>
            </View>
          </View>}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />}
      {category == 4 &&
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={lower}
          renderItem={({ item }) => <View style={{ borderRadius: 10, padding: 0.5 }}>
            <TouchableOpacity onPress={(props) => {
              navigation.navigate(Details),
                setItemDetail(item)
            }} >
              <Image style={{ height: 150, width: 195 }} source={{uri:item.url}}  />
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
            <View style={{ justifyContent: 'space-between', backgroundColor: CustomColor.AppColor, }}>
              <Text style={{ left: 5, }}>{item.brand}</Text>
              <Text style={{ left: 5, }}>{item.color}</Text>
              <Text style={{ left: 5, }}>RS: {item.price}</Text>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setItemDetail(item), navigation.navigate(BuyScreen) }}>Buy</Button>
            </View>
          </View>}
          keyExtractor={item => item.code}
          // horizontal={false}
          numColumns={2}
        />}
      {category == 5 &&
        <FlatList
          contentContainerStyle={{
            justifyContent: 'space-between',
          }}
          data={hoodie}
          renderItem={({ item }) => <View style={{ borderRadius: 10, padding: 0.5 }}>
            <TouchableOpacity onPress={(props) => {
              navigation.navigate(Details),
                setItemDetail(item)
            }} >
              <Image style={{ height: 150, width: 195 }} source={{uri:item.url}}  />
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
            <View style={{ justifyContent: 'space-between' , backgroundColor: CustomColor.AppColor,}}>
              <Text style={{ left: 5, }}>{item.brand}</Text>
              <Text style={{ left: 5, }}>{item.color}</Text>
              <Text style={{ left: 5, }}>RS: {item.price}</Text>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-start', top: -7, right: 5, }} onPress={() => setcart([...cart, item])}>Cart</Button>
              <Button textColor='#fff' style={{ position: 'absolute', alignSelf: 'flex-end', bottom: -7, right: 5, }} onPress={() => { setItemDetail(item), navigation.navigate(BuyScreen) }}>Buy</Button>
              {/* <CustomButton/> */}
            </View>
          </View>}
          keyExtractor={item => item.code}
          horizontal={false}
          numColumns={2}
        />}


      {/* </ScrollView> */}
    </View>

    //  {/* </View> */}

  )
}

export default Main