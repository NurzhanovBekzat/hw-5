import React, { useState } from 'react'
import { Input } from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import "./Modal.css"

export const Modal = ({addMoveFunc,openModal}) => {
  const [img,setImgUrl] = useState("");
  const [title,setTitle] = useState("");
  const [rating,setRating] = useState("");

  const addImgUrl= (e) =>{
    setImgUrl(e.target.value)
  };

  const addTitle = (e) =>{
    setTitle(e.target.value)
  };

  const addRating = (e) =>{
    setRating(e.target.value)
  }

    const addMovie = () => {
    const movieData = {
      id: Date.now().toString(),
      title,
      img,
      rating,
    }
    addMoveFunc(movieData)
  }
  

  return (
    <div className='contain'>
        <label >Title
          <Input onChange={addTitle} value={title} type='text' />
        </label>
        <label >ImgUrl
          <Input onChange={addImgUrl} value={img} type="url" />
        </label>
        <label >Rating
          <Input onChange={addRating} value={rating} type={"number"} />
        </label>
<div className='btnnn'>
<Button onClick={openModal}>Cancel</Button>
        <Button onClick={addMovie}>Add</Button>
</div>
    </div>
  )
}
