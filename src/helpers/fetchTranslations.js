import fetch from 'isomorphic-unfetch'
import { addLocaleData } from 'react-intl'
import { ZOLA_API_BASE } from '../constants/translations'

const fetchTranslations = async locale => {
  console.log('locale', locale)
  // const localeData = await import(`react-intl/locale-data/${locale}`)
  const request = await fetch(ZOLA_API_BASE + locale)
  addLocaleData(localeData)

  return request.json()
}

export default fetchTranslations
