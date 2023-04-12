import React from 'react'
import { Movies } from '../MoviesItem/Movies'
import './Main.css'

export const Main = ({datas}) => {
  return (
    <main>
      <ul>
    {
      datas.map((elem)=>(
        <Movies
        key={elem.id}
        img={elem.img}
        title={elem.title}
        rating={elem.rating}
        />
      ))
    }
    </ul>
    </main>
  )
}
