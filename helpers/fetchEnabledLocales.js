import fetch from 'isomorphic-unfetch'
import { ZOLA_API_BASE } from '../constants/translations'

const fetchEnabledLocales = async () => {
  const request = await fetch(ZOLA_API_BASE + 'locales')

  return request.json()
}

export default fetchEnabledLocales
