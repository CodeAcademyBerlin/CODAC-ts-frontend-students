// ** React Imports
import { createContext, useState, ReactNode } from 'react'

// ** MUI Imports
import { PaletteMode } from '@mui/material'


// ** ThemeConfig Import
import themeConfig from '../theme/themeConfig'

// ** Types Import
import { ThemeName, ContentWidth } from '../layouts/types'

export type Settings = {
  mode: PaletteMode
  themeName: ThemeName
  contentWidth: ContentWidth
}

export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
  toggleTheme: (themeName: ThemeName) => void
  festive: boolean
  setFestive: (festive: boolean) => void
}


const initialSettings = (): Settings => {
  if (typeof window !== 'undefined')
    return {
      themeName: localStorage?.getItem('theme') || 'light',
      mode: themeConfig.mode,
      contentWidth: themeConfig.contentWidth
    }
  // for SSR
  else return {
    themeName: 'light',
    mode: themeConfig.mode,
    contentWidth: themeConfig.contentWidth
  }
}

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  toggleTheme: () => null,
  settings: initialSettings(),
  festive: false,
  setFestive: () => null
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings() })
  const [festive, setFestive] = useState<boolean>(false)


  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings)
  }
  const toggleTheme = (themeName: ThemeName) => {
    setSettings({ ...settings, themeName })
    localStorage.setItem("theme", themeName)
  }


  return <SettingsContext.Provider value={{ settings, saveSettings, toggleTheme, festive, setFestive }}>{children}</SettingsContext.Provider>
}

export const SettingsConsumer = SettingsContext.Consumer
