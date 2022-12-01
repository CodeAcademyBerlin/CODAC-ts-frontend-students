// ** React Imports
import { createContext, useState, ReactNode } from 'react'

// ** MUI Imports
import { PaletteMode } from '@mui/material'


// ** ThemeConfig Import
import themeConfig from '../configs/themeConfig'

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
}

const initialSettings: Settings = {
  themeName: 'light',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth
}

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  toggleTheme: () => null,
  settings: initialSettings
})

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings })


  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings)
  }
  const toggleTheme = (themeName: ThemeName) => {

    setSettings({ ...settings, themeName })
  }


  return <SettingsContext.Provider value={{ settings, saveSettings, toggleTheme }}>{children}</SettingsContext.Provider>
}

export const SettingsConsumer = SettingsContext.Consumer
