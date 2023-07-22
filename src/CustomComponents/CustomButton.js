import { IconButton, Button } from "react-native-paper";
import { View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, ButtonColor, onClick, height, width, mode, IconInButton, size,ButtonSize }) => {
  return (
    <Button disabled={size == title ? true : false} mode={mode} buttonColor={ButtonColor} onPress={() => onClick()} labelStyle={{ fontSize: 16 }} icon={IconInButton} style={{ height: height, width: width }} >{title}</Button>
  )
}

export default CustomButton
// <CustomButton title={"Button4"} mode={'contained'} ButtonColor={CustomColor.g} onClick={()=>console.log("jiji")}   IconInButton={'share'} height={100} width={100}/>
