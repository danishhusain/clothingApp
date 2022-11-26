import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Header = () => {
    const {cart}=useContext(CartContext)
    return (
        <View style={{ width: '100%', height: 70, justifyContent: 'space-between',
         alignItems: 'center',flexDirection:'row',borderBottomWidth:0.2, }}>
            <Text style={{fontSize:22,fontWeight:'600',color:'#000'}}>ClothingApp</Text>
            <TouchableOpacity style={{marginRight:10}}>
                <Text style={{fontSize:18,fontWeight:'500'}}>Mode</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Header
