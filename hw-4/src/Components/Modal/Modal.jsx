import React from 'react'
import { Input } from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import "./Modal.css"

export const Modal = ({addImgUrl,addRating,addTitle,imgUrl,title,rating}) => {
    console.log(rating)
  return (
    <div className='contain'>
      <label htmlFor="">imgUrl</label>
        <Input onChange={addImgUrl} value={imgUrl} />
        <label htmlFor="">Title</label>
        <Input onChange={addTitle} value={title} />
        <label htmlFor="">rating</label>
        <Input onChange={addRating} value={rating} />
<div className='btnnn'>
<Button>Cancel</Button>
        <Button>Add</Button>
</div>
    </div>
  )
}
