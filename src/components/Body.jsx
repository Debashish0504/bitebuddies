import React from 'react'
import RestaurantCard from './RestaurantCard'
import FestivalScreen from './FestivalScreen'
import resList from '../utils/mockData'



function Body() {
  return (
    <div className='px-2 py-4 '>
        {/* <h2 className='ml-5 text-2xl font-bold text-black '>Biriyanis</h2>
        <FestivalScreen userState="Maharashtra" /> */}
    <div className='flex overflow-auto space-x-4 px-2 py-4'>
      {resList.map((restaurant) => <RestaurantCard key ={restaurant.info.id} resData ={restaurant} />)}
    </div>
    </div>
  )
}

export default Body
