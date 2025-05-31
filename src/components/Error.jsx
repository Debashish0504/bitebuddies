import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const err = useRouteError()
  return (
    <div className='flex flex-col h-screen items-center justify-center '>
        <h1 className="text-2xl font-bold text-black">
               {err.status} : {err.statusText} 
         </h1>
         <h2 className="text-2xl font-bold text-black">
               Something went wrong
         </h2>
    </div>
  )
}

export default Error
