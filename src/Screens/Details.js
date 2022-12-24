import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button, IconButton } from 'react-native-paper'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Addaddress from '../Screens/AddAddress'
import BuyScreen from './BuyScreen'
import TotalOrder from './TotalOrder'




const Details = ({ value }) => {
    const { ItemDetail,} = useContext(CartContext)
    // const { Addaddress, seAddaddress } = useContext(CartContext)
    const [DetailAddress, setDetailAddress] = useState([])
    const navigation = useNavigation()
    const isFocused = useIsFocused()


    const getAddress = async () => {
        let ddata = await AsyncStorage.getItem("Address")
        setDetailAddress(JSON.parse(ddata))
    }
    useEffect(() => {
        getAddress()
    }, [isFocused])

    console.log("data", ItemDetail)
    console.log("A", DetailAddress)

    return (
        <View style={{ flex: 1, }}>
            {/* header */}
            <View style={{ width: '100%', height: '8%', backgroundColor: `#6a5acd`, borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>Details</Text>
                {/* <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 10, paddingTop: 20, fontWeight: '600' }} onPress={() => setcart([])}>Clear Cart</Button> */}
            </View>

            <View style={{ width: '100%', height: 45, backgroundColor: `#6a5acd`, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%', left: -5 }}>
                    <IconButton icon={'map-marker-outline'} iconColor={'#fff'} />
                    <FlatList data={DetailAddress}
                        renderItem={({ item }) => <Text style={{ fontWeight: '500', fontSize: 16, color: "white", paddingRight: 30 }}>Deliver to:- {item.city} , {item.pincode}</Text>

                        } />
                </View>

                <View style={{ justifyContent: 'center' }}>

                    <Button mode='contained' style={{ position: 'absolute', right: 1, alignSelf: 'center', }}
                        onPress={() => navigation.navigate(Addaddress)}
                    >Change</Button>
                </View>

            </View>

            {/* image SliderBox */}
            <View style={{ flex: 10, backgroundColor: "#000" }}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../Images/tshirt.webp')} />
                {/* <SliderBox images={ItemDetail.ImagesObject.Image} /> */}
            </View>

            {/*Short Info */}
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 0.2, padding: 4 }}>
                <View>
                    <Text style={{ left: 5, fontSize: 20, fontWeight: '600', color: '#000' }}>{ItemDetail.ItemName}</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.i}</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.color}</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.code}</Text>
                </View>
                <View>
                    <Text style={{ right: 5, fontSize: 20, fontWeight: '600', color: '#000' }}>₹{ItemDetail.price}</Text>
                    <Text style={{ right: 5, fontSize: 14, color: '#000' }}>Inclusive of all taxes</Text>
                </View>
            </View>

            {/* size */}
            <View style={{ padding: 4, }}>
                <View style={{ left: 5 }}>
                    <Text style={{ color: 'red' }}>Select size name:</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button mode='elevated' buttonColor='#FFFBEB' onPress={() => console.log("size")} style={{}}>S</Button>
                    <Button mode='elevated' buttonColor='#FFFBEB' onPress={() => console.log("size")} style={{}}>M</Button>
                    <Button mode='elevated' buttonColor='#FFFBEB' onPress={() => console.log("size")} style={{}}>L</Button>
                    <Button mode='elevated' buttonColor='#FFFBEB' onPress={() => console.log("size")} style={{}}>XL</Button>
                    <Button mode='elevated' buttonColor='#FFFBEB' onPress={() => console.log("size")} style={{}}>XXL</Button>
                </View>
            </View>

            {/* Product details */}
            <View style={{ borderBottomWidth: 0.2, padding: 4 }}>
                <Text style={{ left: 5, fontSize: 20, fontWeight: '600', color: '#000' }}>Product details</Text>
                <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.a}</Text>
                <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.b}</Text>
                <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.c}</Text>
                <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.d}</Text>
                <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.e}</Text>
                <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.f}</Text>
            </View>
            {/* <View style={{ flex: 1 }}></View> */}
            <View style={{ paddingVertical: 4, flexDirection: 'row', justifyContent: 'space-around', }}>
                <Button mode='contained'>Add Cart</Button>
                <Button mode='contained' onPress={() => navigation.navigate(BuyScreen)}>Buy Now</Button>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({})