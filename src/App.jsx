import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Body from './components/Body'
import Sidebar from './components/SideBar'
import { Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'
import {Provider} from 'react-redux'
import appStore from './redux/store'

function App() {

  const [username,setUserName] = useState()

  useEffect(() => {
     const data = {
       name: "Debashish"
     }
     setUserName(data.name)
  },[])

  return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : username , setUserName}}>
        <Header/>  
        <Outlet/>   
        </UserContext.Provider>
        </Provider>
   
  )
}

export default App
