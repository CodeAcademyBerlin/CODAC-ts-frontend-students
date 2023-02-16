// ** React Imports
// ** MUI Imports
import { PaletteMode } from '@mui/material';
import { createContext, ReactNode, useEffect, useState } from 'react';

// ** ThemeConfig Import
// import themeConfig from '../theme/themeConfig'
// ** Types Import
import { ContentWidth, ThemeName } from '../layouts/types';

export type Settings = {
  mode: PaletteMode;
  themeName: ThemeName;
  contentWidth: ContentWidth;
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
  toggleTheme: (themeName: ThemeName) => void;
  festive: boolean;
  setFestive: (festive: boolean) => void;
  keywordArray: Array<string>;
  setKeywordArray: any;
  filter: string;
  setFilter: any;
};

export const initialSettings = (): Settings => {
  if (typeof window !== 'undefined')
    return {
      themeName: localStorage?.getItem('theme') || 'light',
      mode: 'light',
      contentWidth: 'boxed',
    };
  // for SSR
  else
    return {
      themeName: 'light',
      mode: 'light',
      contentWidth: 'boxed',
    };
};

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  toggleTheme: () => null,
  settings: initialSettings(),
  festive: false,
  setFestive: () => null,
  keywordArray: [],
  setKeywordArray: () => null,
  filter: '',
  setFilter: () => null,
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [settings, setSettings] = useState<Settings>({
    themeName: 'light',
    mode: 'light',
    contentWidth: 'boxed',
  });
  const [festive, setFestive] = useState<boolean>(false);
  // SearchBar //
  const [keywordArray, setKeywordArray] = useState<Array<string>>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    setSettings(initialSettings());
  }, []);

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings);
  };
  const toggleTheme = (themeName: ThemeName) => {
    setSettings({ ...settings, themeName });
    localStorage.setItem('theme', themeName);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
        toggleTheme,
        festive,
        setFestive,
        keywordArray,
        setKeywordArray,
        filter,
        setFilter,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
