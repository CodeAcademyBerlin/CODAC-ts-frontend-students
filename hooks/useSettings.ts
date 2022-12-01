import { useContext } from 'react'
import { SettingsContext, SettingsContextValue } from '../contexts/settingsContext'

export const useSettings = (): SettingsContextValue => useContext(SettingsContext)
