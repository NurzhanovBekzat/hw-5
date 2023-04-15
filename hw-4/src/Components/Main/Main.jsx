import React from 'react'
import { Movies } from '../MoviesItem/Movies'
import './Main.css'

export const Main = ({datas, deleteItem,handlerEdit}) => {
 
  return (
    
      <ul>
    {
      datas.map((elem)=>(
        <Movies
        id={elem.id}
        key={elem.id}
        img ={elem.img}
        title={elem.title}
        rating={elem.rating}
        deleteItem={deleteItem}
        handlerEdit={handlerEdit}
        />
      ))
    }
    </ul>
  )
}
