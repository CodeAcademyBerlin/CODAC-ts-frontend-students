import { createContext, useState, ReactNode } from 'react'

// type Theme = 'light' | 'dark';

export type ThemeContextType = {
  toggleThemes: () => void;
}

// const initialContext = {
//   theme: 'light',
//   setTheme: (theme: 'light') => { 'light' }
// }

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

// export const ThemeContextProvider = ({ children }:{ children: ReactNode }) => {

//   const [theme, setTheme] = useState('light');

//   return <ThemeContext.Provider value={{ theme, setTheme }} >{ children }</ThemeContext.Provider>

// }


