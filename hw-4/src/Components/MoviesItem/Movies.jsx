import React from 'react'
import Button from '../UI/Button/Button'
import "./Movie.css"


export const 
Movies = ({img,title,rating, id, deleteItem}) => {

  // const [todos, setTodos] = useState();


  return (
    <div className='containDiv'>
        <div className='firstContain'>

          <img src={img} alt="#" />

        </div>
           <div className='secondContain'>
            
           <h3>{title}</h3>
            <div className='btnName'>
            <Button marginLeft = "10px" color={"white"} background={"#FF8C00"} borderRadius="13px">{rating}/5 stars</Button>
           <Button marginLeft = "10px" color={"white"}  background="red" onClick={() => deleteItem(id)}>DELETE</Button>
            <Button marginLeft = "10px" color={"white"} background="blue">EDIT</Button>
            </div>
           </div>
    </div>
  )
}
