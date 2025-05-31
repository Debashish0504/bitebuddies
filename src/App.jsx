import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Body from './components/Body'
import Sidebar from './components/SideBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    
        <div className='bg-white h-screen'>
        <Header/>  
        <Outlet/>   
        </div>
   
  )
}

export default App
