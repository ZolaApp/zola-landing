import React from 'react'
import ReactDOM from 'react-dom'
import fetchEnabledLocales from './helpers/fetchEnabledLocales'
import isEnabledLocale from './helpers/isEnabledLocale'
import fetchTranslations from './helpers/fetchTranslations'
import { DEFAULT_LOCALE } from './constants/translations'
import App from './components/App'
import './index.css'

const init = async () => {
  const currentLocale = window.location.pathname.replace('/', '').slice(0, 2)
  const enabledLocales = await fetchEnabledLocales()
  const locale = isEnabledLocale(enabledLocales, currentLocale)
    ? currentLocale
    : DEFAULT_LOCALE
  const translations = await fetchTranslations(locale)

  ReactDOM.render(
    <App
      enabledLocales={enabledLocales}
      locale={locale}
      translations={translations}
    />,
    document.getElementById('root')
  )
}

init()
