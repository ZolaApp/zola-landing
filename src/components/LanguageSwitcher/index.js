import React from 'react'
import { Link } from 'react-router-dom'
import { LinksWrapper } from './styles'

const LanguageSwitcher = () => (
  <LinksWrapper>
    <Link to="/fr">FR</Link>
    <Link to="/en">EN</Link>
  </LinksWrapper>
)

export default LanguageSwitcher
