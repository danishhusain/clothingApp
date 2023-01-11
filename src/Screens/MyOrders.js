import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Header from '../Common/Header'
import { Button } from 'react-native-paper'

const MyOrders = () => {
  return (
    // <ImageBackground style={{flex:1}} source={{uri:'https://img.freepik.com/free-photo/solid-navy-blue-concrete-textured-wall_53876-124584.jpg?w=996&t=st=1673464134~exp=1673464734~hmac=da68e5be64cdd04f5d79e77e285a1f43b8a63fd6544a5afec032a0825e7f140a'}}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {/* header */}
        <View style={{ width: '100%', height: '6.80%', backgroundColor: `#6a5acd`, borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>MyOrders</Text>
          {/* <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 3, paddingTop: 20, fontWeight: '600' }} onPress={() => setWishlist([])}>Clear Cart</Button> */}
        </View>
      </View>
    // </ImageBackground>
  )
}

export default MyOrders
const styles = StyleSheet.create({

})