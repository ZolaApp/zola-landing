import React from 'react'
import { DEFAULT_LOCALE } from './constants/translations'

export const LanguageContext = React.createContext({
  locale: DEFAULT_LOCALE,
  enabledLocales: [],
  switchLanguage: () => {}
})
