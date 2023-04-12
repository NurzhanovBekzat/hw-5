import React from 'react'

import "./input.css"

export const Input = ({onChange,value}) => {
  return (
    <input onChange={onChange} value={value} type="text" />
  )
}
