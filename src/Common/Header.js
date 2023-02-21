import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Badge, IconButton } from 'react-native-paper'
import Navigation from '../Navigation'
import { useNavigation } from '@react-navigation/native'
import Cart from '../Bottom/Cart'
import CustomColor from '../CustomComponents/CustomColor'


const Header = () => {
    const { cart } = useContext(CartContext)
    const navigation = useNavigation();
// console.log(cart.length)
    return (
        <View style={{
            width: '100%', height: 70, justifyContent: 'space-between',
            alignItems: 'center', flexDirection: 'row', borderBottomWidth: 0.2,
            backgroundColor: CustomColor.AppColor,
        }}>
            <View style={{ alignSelf: 'flex-start', right: 5 }}>
                <TouchableOpacity style={{ alignItems: 'flex-end', }}>
                    {/* <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>Mode</Text> */}
                    {/* {/* <IconButton icon='tshirt-crew-outline' iconColor='white' size={40} onPress={()=>navigation.navigate(Camera)}></IconButton> */}
                     {/* <IconButton icon='tshirt-crew-outline' iconColor='white' size={40} onPress={()=>navigation.navigate(Camera)}></IconButton>  */}
                    {/* <IconButton icon='tshirt-crew-outline' iconColor='white' size={40} onPress={()=>navigation.navigate(LoadingSpinner)}></IconButton> */}
                    {/* <IconButton icon='tshirt-crew-outline' iconColor='white' size={40} onPress={()=>navigation.navigate(CheckLoader)}></IconButton> */}
                    <IconButton icon='tshirt-crew-outline' iconColor='white' size={40} onPress={()=>{}}></IconButton>
                </TouchableOpacity>
            </View>
            <View style={{ marginRight: 130 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', color: '#000', color: 'white', right: 20 }}>ClothingApp</Text>
            </View>

            <View style={{ height: 60, width: 60 }}>
                <IconButton icon={'cart'} size={30} iconColor='white' onPress={() => navigation.navigate(Cart)}></IconButton>

                <View style={{ backgroundColor: 'red', position: 'absolute', right: 1, top: 1, borderRadius: 25, alignSelf: 'center' }}>
                    {cart.length == 0 ? null :
                        <Badge size={18} >{cart.length}</Badge>
                    }
                </View>

            </View>
        </View>
    )
}
export default Header
