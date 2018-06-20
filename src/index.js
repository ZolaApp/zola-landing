import React from 'react'
import ReactDOM from 'react-dom'
import fetchEnabledLocales from './helpers/fetchEnabledLocales'
import isEnabledLocale from './helpers/isEnabledLocale'
import fetchTranslations from './helpers/fetchTranslations'
import { DEFAULT_LOCALE } from './constants/translations'
import App from './components/App'
import './index.css'

const init = async () => {
  const enabledLocales = await fetchEnabledLocales()
  // Slice the two first characters to retrieve the “short” locale from “long”
  // locales such as `en_EN`.
  const browserLocale =
    !!navigator.languages && navigator.languages[0].slice(0, 2)
  const defaultLocale =
    browserLocale && isEnabledLocale(enabledLocales, browserLocale)
      ? browserLocale
      : DEFAULT_LOCALE
  const translations = await fetchTranslations(defaultLocale)

  ReactDOM.render(
    <App
      enabledLocales={enabledLocales}
      locale={defaultLocale}
      translations={translations}
    />,
    document.getElementById('root')
  )
}

init()
