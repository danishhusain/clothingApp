import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import Header from '../Common/Header'
import { Button } from 'react-native-paper'
import { StyleContext } from '../styles/context/StyleContext'

const MyOrders = () => {
  const { theme} = useContext(StyleContext);

  return (
      <View style={{ flex: 1, alignItems: 'center', }}>
        {/* header */}
        <View style={{ width: '100%', height: '6.80%', backgroundColor: theme.primary, elevation: 1 }}>
          <Text style={{ fontSize: 22, fontWeight: '600', position: 'absolute', left: 15, top: 10, color: `white`, fontWeight: '600' }}>MyOrders</Text>
          {/* <Button textColor='white' style={{ fontSize: 16, fontWeight: '600', position: 'absolute', right: 1, top: 3, paddingTop: 20, fontWeight: '600' }} onPress={() => setWishlist([])}>Clear Cart</Button> */}
        </View>
      </View>
  )
}

export default MyOrders
const styles = StyleSheet.create({

})