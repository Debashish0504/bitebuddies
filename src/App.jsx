import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Body from './components/Body'
import Sidebar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
        <div className='bg-white h-screen'>
        <Header/>  
        <Body/>   
        </div>
   
  )
}

export default App
