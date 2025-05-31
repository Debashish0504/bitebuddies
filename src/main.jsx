import React, { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Error from './components/Error.jsx'
import Body from './components/Body.jsx'

const appRouter = createBrowserRouter([
   {
      path: "/",
      element : <App/>,
      children : [
         {
          path: "/",
          element : <Body/>,
        },
        {
          path: "/home",
          element : <Body/>,
        },
        {
          path: "/contact",
          element : <Contact/>,
        },
        {
          path: "/about",
          element : <About/>,
        },
      ],
      errorElement : <Error/>
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
