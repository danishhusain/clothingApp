import { FlatList, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, IconButton } from 'react-native-paper'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const BuyScreen = ({ item }) => {
    
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [CartAddress, setCartAddress] = useState([])
    const { cart, setcart } = useContext(CartContext)
    


    const lastCartItem = cart[cart.length - 1]
    console.log(">>", lastCartItem)
    const getAddress = async () => {
        let bdata = await AsyncStorage.getItem("Address")
        setCartAddress(JSON.parse(bdata))
    }
    useEffect(() => {
        getAddress()
    }, [isFocused])
    console.log(">>",CartAddress[0])

    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View style={{ width: '100%', height: '8%', backgroundColor: `#6a5acd`, borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>Buy</Text>
                {/* <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 10, paddingTop: 20, fontWeight: '600' }} onPress={() => console.log("hi")}>Clear Cart</Button> */}
            </View>

            {/* Short Detail */}  
            <View style={{ flex: 5 }}>
                <ScrollView>
                    <Image style={{ height: 250, width: "100%" }} source={require('../Images/tshirt.webp')} />
                    <Text>{lastCartItem.ItemName}</Text>
                    <Text>Code:- {lastCartItem.code}</Text>

                </ScrollView>
            </View >
            { /* Address */}
            <View style={{ height: 30, width: "90%", backgroundColor: `#6a5acd`, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', left: -5, alignSelf: 'center' }}>

                <IconButton icon={'map-marker-outline'} iconColor={'#fff'}
                    style={{}}
                />
                {/* <FlatList data={CartAddress}
                    renderItem={({ item }) => <Text style={{ fontWeight: '500', fontSize: 16, color: "white", }}>Deliver to:- {item.city} , {item.pincode}, {item.building}</Text>
                    } /> */}
            {CartAddress ?<Text style={{ fontWeight: '500', fontSize: 16, color: "white",right:240 }}>Deliver to:- {CartAddress[0].city}</Text>:null}

            </View>
            {/* Estimated Delivery */}
            <View style={{ flex: 1, backgroundColor: `blue` }}>
                <Text style={{ fontSize: 18 }}>Estimated Delivery 2,3 days</Text>

            </View>
            {/* Total Price */}
            <View style={{ flex: 1, backgroundColor: `green` }}>
                <Text>₹ {lastCartItem.price}</Text>
            </View>
            {/* Button */}
            <View style={{ width: '90%', alignSelf: 'center', }}>
                <Button mode='contained' buttonColor='green' style={{ marginVertical: 5 }} >Make Payment</Button>
            </View>
        </View>
    )
}

export default BuyScreen
const styles = StyleSheet.create({})