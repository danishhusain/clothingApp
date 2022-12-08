import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const TotalOrder = () => {
    const { cart, setcart } = useContext(CartContext)
    return (
        <View style={{flex:1,backgroundColor:'red'}}>
            <Text>TotalOrder</Text>
            {/* <Text>{cart.item}</Text> */}
            

        </View>
    )
}

export default TotalOrder

const styles = StyleSheet.create({})