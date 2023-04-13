import React from 'react'

import "./input.css"

export const Input = ({onChange,value, type}) => {
  return (
    <input onChange={onChange} value={value} type={type} />
  )
}
