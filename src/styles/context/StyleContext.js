import React, { Children, useState } from 'react'
import { createContext } from 'react'
import { useColorScheme } from 'react-native';
import { darkColors, lightColors } from '../Colors';


export const StyleContext = createContext()
export default function StyleContextProvider({ children }) {

  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? lightColors : darkColors




  return (
    <StyleContext.Provider value={{
      theme,
      
    }}>
      {children}
    </StyleContext.Provider>
  )
}

