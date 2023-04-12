import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button/Button'
import "./Header.css"

export const Header = ({openModalHandler}) => {
  return (
    <HeaderStyle>
         <h2 style={{color:"white",marginLeft:"20px"}}>Favorite Movies</h2>
      <Button  onClick={openModalHandler} marginTop="13px" height="40px" padding={"5px 10px"} marginRight="20px" color="white" background={"#FF8C00"}>ADD MOVIE</Button>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.div`
    background-color: blue;
    display: flex;
    justify-content: space-between;
`