import { FlatList, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Button, IconButton } from 'react-native-paper'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { useState, useEffect } from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RazorpayCheckout from 'react-native-razorpay';



const BuyScreen = ({ item }) => {

    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [CartAddress, setCartAddress] = useState([])
    // const { CartAddress, setCartAddress } = useContext(CartContext)
    const { cart, setcart } = useContext(CartContext)
    const { ItemDetail } = useContext(CartContext)


    // PayMent method
    let makePayment = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_vsfrhBmZ90xJFJ', // Your api key
            amount: (lastCartItem.price) * 100,
            name: 'Danish',
            prefill: {
                email: 'danisharab2000@gmail.com',
                contact: '8934971231',
                name: 'Razorpay Software'
            },
            theme: { color: '#F37254' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            // alert(`Error: ${error.code} | ${error.description}`);
            Alert.alert(`Payment Cancelled`);
        });
    }



    const getAddress = async () => {
        let bdata = await AsyncStorage.getItem("Address")
        setCartAddress(JSON.parse(bdata))
    }
    useEffect(() => {
        getAddress()
    }, [isFocused])


    return (
        <View style={{ flex: 1 }}>
            {/* header */}
            <View style={{ width: '100%', height: '6.80%', backgroundColor: `#6a5acd`, elevation: 2,borderBottomLeftRadius:5,borderBottomRightRadius:5}}>
                <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>Buy</Text>
                {/* <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 10, paddingTop: 20, fontWeight: '600' }} onPress={() => console.log("hi")}>Clear Cart</Button> */}
            </View>

            {/* Short Detail */}
            <View style={{ flex: .5, }}>
                <ScrollView>
                    <Image style={{ height: 250, width: "100%", paddingLeft: 5 }} source={{ uri: ItemDetail.url }} />
                    <Text style={{ fontSize: 20, fontWeight: '800', paddingLeft: 5 }}>{ItemDetail.ItemName}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', paddingLeft: 5 }}>Code:- {ItemDetail.code}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600', paddingLeft: 5 }}>Quantity:- </Text>

                </ScrollView>
            </View >
            { /* Address */}
            <View style={{ height: 30, width: "90%", backgroundColor: `#6a5acd`, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', left: -5, alignSelf: 'center' }}>

                <IconButton icon={'map-marker-outline'} iconColor={'#fff'}
                    style={{}}
                />
            </View>
            {/* Estimated Delivery */}
            <View style={{ flex: 0.5, paddingLeft: 5 }}>
                <Text style={{ fontSize: 18, color: 'blue' }}>Estimated Delivery 2,3 days</Text>

            </View>
            {/* Total Price */}
            <View style={{}}>
                <Text style={{ fontSize: 22, fontWeight: '800', paddingLeft: 5, color: 'blue', }}>₹ {ItemDetail.price}</Text>
            </View>
            {/* Button */}
            <View style={{ width: '90%', alignSelf: 'center', }}>
                <Button mode='contained' buttonColor='green' style={{ marginVertical: 5 }} onPress={() => makePayment()} >Make Payment</Button>
                {/* <Button mode='contained' buttonColor='green' style={{ marginVertical: 5 }} onPress={() => navigation.navigate(RadioButton)} >Make Payment</Button> */}
            </View>
        </View>
    )
}

export default BuyScreen
const styles = StyleSheet.create({})