import { createContext, useState, ReactNode } from 'react'

//?are these not strings? why complaint from ts in value?
type Theme = string

export type ThemeContextType = {
  theme: Theme
  setTheme?: (value: string) => void
  // toggleTheme?: () => void
}

const initialTheme = {
  theme: 'light'
  // toggleTheme: () => { theme === 'light' ? setTheme('dark') : setTheme('light'); }
}

export const ThemeContext = createContext<ThemeContextType>(initialTheme)

export const ThemeContextProvider = ({ children }:{ children: ReactNode }) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return <ThemeContext.Provider value={{ theme, setTheme }} >{ children }</ThemeContext.Provider>

}


