import React  from 'react'

import './App.css'
import NavbarCom from './Component/NavbarCom'
import { Outlet } from 'react-router-dom'

function App() {
 

  return (
    <>
    <NavbarCom/>
    <div>
      <Outlet/>
    </div>
    
    </>
  )
}

export default App
