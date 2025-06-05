import React, { useState } from 'react'
import ItemsList from './ItemsList'

function RestaurantCategory({data ,arrowStatus , setSelectedIndex}) {
 
const handleClick = () => {
     setSelectedIndex()
  }

  
  return (
    <div className='flex flex-col w-full  max-w-6xl my-4 rounded-lg bg-gray-200  shadow-lg '>
        <div className='flex h-18 justify-between  items-center'>
        <h2 className='font-black text-2xl ml-4'>{data.title} ({data.itemCards.length})</h2>
        <span className='mr-4' onClick={handleClick}>{arrowStatus ? "⬆️": "⬇️"}</span>
        </div>
       {arrowStatus ? <ItemsList data={data.itemCards}/> : <></>}
    </div>
  )
}

export default RestaurantCategory
