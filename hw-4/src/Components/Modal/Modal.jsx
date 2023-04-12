import React from 'react'
import { Input } from '../UI/Input/Input'
import Button from '../UI/Button/Button'

export const Modal = ({addImgUrl,addRating,addTitle,imgUrl,title,rating}) => {
    console.log(rating)
  return (
    <div>
        <Input onChange={addImgUrl} value={imgUrl} />
        <Input onChange={addTitle} value={title} />
        <Input onChange={addRating} value={rating} />
<div>
<Button>Cancel</Button>
        <Button>Add</Button>
</div>
    </div>
  )
}
