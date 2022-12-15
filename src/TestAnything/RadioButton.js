import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'


const RadioButtonFc = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [CartAddress, setCartAddress] = useState([])
  const isFocused = useIsFocused

  // GetAddress
  const getAddress = async () => {
    let sedata = await AsyncStorage.getItem("Address")
    setCartAddress(JSON.parse(sedata))
}
useEffect(() => {
    getAddress()
}, [isFocused])

let Option=()=>{
  CartAddress.map(item => (
  <Picker.Item key={item} label={item} value={item} />
))
  }

  console.log(">",Option())
  // console.log(">>",selectedValue)
  console.log(">>>",CartAddress)

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {/* <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" /> */}
        
        
        
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default RadioButtonFc;