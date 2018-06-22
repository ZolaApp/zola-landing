import React from 'react'
const imageSrc = require('../../assets/images/dashboard-screenshot@1x.png')
const retinaImageSrc = require('../../assets/images/dashboard-screenshot@2x.png')

const DashboardScreenshot = () => (
  <img src={imageSrc} srcSet={`${imageSrc}, ${retinaImageSrc} 2x`} alt="" />
)

export default DashboardScreenshot
