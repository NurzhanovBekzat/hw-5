import React from 'react'

export const Input = ({onChange,value}) => {
  return (
    <input onChange={onChange} value={value} type="text" />
  )
}
