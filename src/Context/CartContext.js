import React, { Children, useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()
export default function CartContextProvider({ children }) {
  const [cart, setcart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [city, setCity] = useState("")
  const [building, setBuilding] = useState("")
  const [pincode, setPincode] = useState("")
  const [address, setAddress] = useState("")
  const [adstate,setAdstate]=useState([])


  return (
    <CartContext.Provider value={{ cart, setcart,
       wishlist, setWishlist,
       address, setAddress,
       city, setCity,
       building, setBuilding,
       pincode, setPincode,
       adstate,setAdstate

    }}>
      {children}
    </CartContext.Provider>
  )
}

