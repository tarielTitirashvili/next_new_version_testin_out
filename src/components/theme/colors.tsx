'use client'
import React, { createContext, useContext } from 'react'

type TTheme = {
  isDarkMode: boolean
  colors: {
    primary: string
    secondary: string
  }
}

type TProps = {
  children: React.ReactNode
}

const defaultTheme: TTheme = {
  isDarkMode: false,
  colors: {
    primary: 'black',
    secondary: 'blue',
  },
}

const ColorThemeContext = createContext<TTheme>(defaultTheme)

const ColorThemProvider = (props: TProps) => {
  return (
    <ColorThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ColorThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ColorThemeContext)

export default ColorThemProvider
