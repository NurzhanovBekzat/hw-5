import React from 'react'

export default function Button({marginLeft,borderRadius,marginTop,height,padding,color,background,children,marginRight, onClick}) {
  return (
    <button style={{marginLeft,borderRadius, marginTop,height,background,color,marginRight ,padding}} onClick={onClick}>{children}</button>
  )
}
