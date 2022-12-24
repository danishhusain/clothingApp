import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { IconAdornment } from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon'
import { IconButton } from 'react-native-paper'

const Header = () => {
    const { cart } = useContext(CartContext)
    return (
        <View style={{
            width: '100%', height: 70, justifyContent: 'space-between',
            alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2,
            backgroundColor: `#6a5acd`,
        }}>
            <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', color: 'white',left: 15, }}>ClothingApp</Text>
            <TouchableOpacity style={{ marginRight: 10 }}>
                {/* <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>Mode</Text> */}
                <IconButton icon='tshirt-crew-outline' iconColor='white' size={40}></IconButton>

            </TouchableOpacity>

        </View>
    )
}
export default Header
