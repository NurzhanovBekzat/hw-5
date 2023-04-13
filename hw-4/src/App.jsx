import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Modal } from './Components/Modal/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [move,setMovie] = useState([]);

  const addMoveFunc = (data) => {
    const upDatas = [...move, data]
    setMovie(upDatas);

    setOpenModal((prev) => !prev)
  } 

  const openModalHandler = (e) =>{
    e.preventDefault()
    setOpenModal((prev)=>!prev)
  }
  
  const deleteItem = (id) => {
    const newTodos = move.filter((el)=> el.id !== id)
    setMovie(newTodos)
  }

  return (
    <div className="App">
      <Header openModalHandler={openModalHandler}/>
      <Main setMovie={setMovie} datas={move} deleteItem={deleteItem}/>
      {openModal ? 
       <Modal setMovie={setMovie} move = {move} openModal={openModalHandler} addMoveFunc={addMoveFunc}
     /> 
      :
       null}
   
    </div>
  )
}

export default App
