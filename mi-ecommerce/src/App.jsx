import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListcontainter from './components/ItemListContainer/ItemListcontainter'

  function App() {
   
   
    console.log ("se renderiza el app")
let valor = 21

  return (
    <>
    <NavBar valor= {valor}/>
    <ItemListcontainter mensaje="primera entrega de react js"/>     
    </>
  )
}

export default App
