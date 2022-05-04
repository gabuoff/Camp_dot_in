import React from 'react'
import { Login } from './pages/Login'

import bgImg from './assets/images/side-image.jpg'
import './styles/App.css'

export function App() {
 
  return (
    <>
    <div className="container">
      <main>
        <div className="main-content">
         <Login /> 
         </div>
      </main>
   
   <figure>
     <img  src={bgImg} alt='background img' />
   </figure>
   </div>
    </>
  )
}


