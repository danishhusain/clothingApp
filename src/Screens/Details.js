import { StyleSheet, Text, View, Image, FlatList, ScrollView, } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button, Card, IconButton } from 'react-native-paper'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Addaddress from '../Screens/AddAddress'
import BuyScreen from './BuyScreen'
import TotalOrder from './TotalOrder'
import { shirt, tshirt } from '../DataBase/Api'
import { useContext } from 'react'
// const { cart, setcart } = useContext(CartContext)
import { ImageSlider, ImageCarousel } from 'react-native-image-slider-banner';
import CustomButton from '../CustomComponents/CustomButton'
import CustomColor from '../CustomComponents/CustomColor'






const Details = ({ value }) => {
    const { ItemDetail, } = useContext(CartContext)
    // const { Addaddress, seAddaddress } = useContext(CartContext)
    const [DetailAddress, setDetailAddress] = useState([])
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [selectedItem, setSelectedItem] = useState(0)
    const [isFullScreen, setIsFullScreen] = useState(false);



    const getAddress = async () => {
        let ddata = await AsyncStorage.getItem("Address")
        setDetailAddress(JSON.parse(ddata))
    }
    useEffect(() => {
        getAddress()
    }, [isFocused])

    // console.log("data", ItemDetail)
    // console.log("A", DetailAddress)

    return (
        <View style={{ flex: 1 }}>

            {/* header */}
            <View style={{ width: '100%', height: '6.80%',backgroundColor: CustomColor.AppColor, elevation: 2, borderBottomLeftRadius: 5, borderBottomRightRadius: 5 }}>
                <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>Details</Text>
                {/* <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 10, paddingTop: 20, fontWeight: '600' }} onPress={() => setcart([])}>Clear Cart</Button> */}
            </View>

            <View style={{ width: '100%', height: 45, top: 0.5, backgroundColor: CustomColor.AppColor, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%', left: -5 }}>
                    <IconButton icon={'map-marker-outline'} iconColor={'#fff'} />
                    <FlatList data={DetailAddress}
                        renderItem={({ item }) => <Text style={{ fontWeight: '500', fontSize: 16, color: "white", paddingRight: 30 }}>Deliver to:- {item.city} , {item.pincode}</Text>

                        } />
                </View>

                <View style={{ justifyContent: 'center' }}>

                    {/* <Button mode='contained' style={{ position: 'absolute', right: 1, alignSelf: 'center', }}
                        onPress={() => navigation.navigate(Addaddress)}
                    >Change</Button> */}
                    <CustomButton mode={'contained'} title={"Change"}  onClick={() => navigation.navigate(Addaddress)} />

                </View>

            </View>
            <ScrollView>
                {/* image SliderBox */}
                <View style={{ flex: 1, backgroundColor: "#000" }}>
                    <Image
                        // style={{ height: 312, width: '100%' }}
                        style={{ height: 312, width: '100%' }}
                        source={{ uri: ItemDetail.url }} />

                    {/* Image sliding */}
                    {/* <ImageSlider
                        data={[
                            {
                                img: ItemDetail.url,
                            },
                        ]}
                        style={{ height: 312, width: '100%' }}
                        // autoPlay={true}
                        dotStyle={20}
                        imageLoadingColor={'grey'}
                        closeIconColor="#fff"
                        onClick={() => { }}
                    /> */}
                </View>


                {/*Short Info */}
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', elevation: 1, padding: 4 }}>
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
                        <CustomButton mode={'eleveted'} title={"S"} ButtonColor={CustomColor.ButtonColor} onClick={() => console.log("size")} />
                        <CustomButton mode={'eleveted'} title={"M"} ButtonColor={CustomColor.ButtonColor} onClick={() => console.log("size")} />
                        <CustomButton mode={'eleveted'} title={"L"} ButtonColor={CustomColor.ButtonColor} onClick={() => console.log("size")} />
                        <CustomButton mode={'eleveted'} title={"XL"} ButtonColor={CustomColor.ButtonColor} onClick={() => console.log("size")} />
                        <CustomButton mode={'eleveted'} title={"XXL"} ButtonColor={CustomColor.ButtonColor} onClick={() => console.log("size")} />
                    </View>
                </View>

                {/* Product details */}
                <View style={{ padding: 4, elevation: 2 }}>
                    <Text style={{ left: 5, fontSize: 20, fontWeight: '600', color: '#000' }}>Product details</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.a}</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.b}</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.c}</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.d}</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.e}</Text>
                    <Text style={{ left: 5, color: '#000' }}>{ItemDetail.ItemObject.f}</Text>
                </View>
                {/* <View style={{ flex: 1 }}></View> */}
                <View style={{}}>
                    {/* <Button mode='contained'  onPress={() => setcart(...cart ,ItemDetail)}>Add Cart</Button> */}
                    {/* <Button mode='contained' onPress={() => navigation.navigate(BuyScreen)}>Buy Now</Button> */}
                    <CustomButton mode={'contained'} title={'Buy Now'} onClick={() => navigation.navigate(BuyScreen)} />
                    {/* <Button mode='contained'>height</Button> */}
                </View>
                <Text style={{ fontSize: 20 }}>Recommended</Text>

                {/* {selectedItem==0?():selectedItem==1?():selectedItem==2?():selectedItem==3?():selectedItem==4?():selectedItem==?4():null} */}

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                    <FlatList horizontal={true} style={{}} data={tshirt} renderItem={({ item }) =>
                        <View style={{ marginHorizontal: 1, paddingHorizontal: 1, }}>
                            <Card style={{ height: 300, width: '100%' }}>
                                <Card.Cover style={{ height: 200, width: '100%' }} source={{ uri: item.url }} />
                                <Card.Content>
                                    <Text variant="titleLarge">{item.ItemName}</Text>
                                    <Text variant="bodyMedium">{item.brand}</Text>
                                    {/* <Text variant="bodyMedium">{item.code}</Text> */}
                                </Card.Content>
                                <Card.Actions style={{ justifyContent: 'space-between',marginHorizontal:5, }}>
                                    <Button>Cart</Button>
                                    <Button>Buy</Button>
                                    {/* <CustomButton mode={'outlined'} title={"Cart"} ButtonColor={CustomColor.ButtonColor} onClick={() => console.log("size")} />
                                    <CustomButton mode={'contained'} title={"Cart"}  onClick={() => console.log("size")} /> */}


                                </Card.Actions>
                            </Card>
                        </View>
                    } />
                </View>

            </ScrollView>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
    },
    thumbnail: {
        height: 312,
        width: '100%'
    },
})