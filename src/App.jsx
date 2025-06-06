import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Body from './components/Body'
import Sidebar from './components/SideBar'
import { Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'

function App() {

  const [username,setUserName] = useState()

  useEffect(() => {
     const data = {
       name: "Debashish"
     }
     setUserName(data.name)
  },[])

  return (
        <UserContext.Provider value={{loggedInUser : username , setUserName}}>
        <div className='bg-white h-screen'>
        <Header/>  
        <Outlet/>   
        </div>
        </UserContext.Provider>
   
  )
}

export default App
