import React, { Children, useState } from 'react'
import { createContext } from 'react'

export const CartContext=createContext()
export default function CartContextProvider ({children}) {
    const [cart,setcart]=useState([])
  return (
   <CartContext.Provider value={{cart,setcart}}>{children}</CartContext.Provider>
  )
}

