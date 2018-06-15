import React from 'react'

const Logo = () => {
  return (
    <svg width="32" height="40" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M-9-5h50v50H-9z" />
        <g fill="#191919">
          <path opacity=".7" d="M32 12.121L0 40V27.879L32 0z" />
          <path d="M0 27.879V40l32-6.06V21.817zM32 0L0 6.06v12.122l32-6.06z" />
        </g>
      </g>
    </svg>
  )
}

export default Logo
