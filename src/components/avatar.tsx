import React from 'react'

const Avatar = ({ src = "", size = "1" }) => {
  
  let s = "w-8 h-8"
  if (size === "2") {
    s = "w-16 h-16"
  }

  return (
    <img src={src} alt="" className={`inline-block rounded-full ${s}`} style={{objectFit: 'cover'}} />
  )
}

export default Avatar
