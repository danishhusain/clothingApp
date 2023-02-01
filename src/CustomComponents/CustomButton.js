import { IconButton,Button } from "react-native-paper";
import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from "react-native-paper/lib/typescript/components/Avatar/Avatar";

const CustomButton = ({title,ButtonColor,onClick,height,width,mode,IconInButton}) => {
  return (
   <Button mode={mode} buttonColor={ButtonColor} onPress={()=>onClick()} labelStyle={{fontSize: 16}} icon={IconInButton} style={{height:height,width:width}} >{title}</Button>
  )
}

export default CustomButton
// <CustomButton title={"Button4"} mode={'contained'} ButtonColor={CustomColor.g} onClick={()=>console.log("jiji")}   IconInButton={'share'} height={100} width={100}/>
