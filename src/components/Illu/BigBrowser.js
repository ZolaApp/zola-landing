import React from 'react'
const browserImage = require('../../assets/images/big-browser@1x.png')
const retinaBrowserImage = require('../../assets/images/big-browser@2x.png')

const BigBrowser = () => {
  return (
    <img
      src={browserImage}
      srcSet={`${browserImage}, ${retinaBrowserImage} 2x`}
      alt=""
    />
  )
}

export default BigBrowser
