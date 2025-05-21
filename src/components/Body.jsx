import React from 'react'
import RestaurantCard from './RestaurantCard'
import FestivalScreen from './FestivalScreen'
import resList from '../utils/mockData'
import { useState } from 'react'



function Body() {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList)



    let handleOnClick = () => {
        const filterList = listOfRestaurant.filter((res) =>
            res.info.avgRatingString > 4.2
        )
        setListOfRestaurant(filterList)
    }

  return (
    <div className='px-2 py-4 '>
        {/* <h2 className='ml-5 text-2xl font-bold text-black '>Biriyanis</h2>
        <FestivalScreen userState="Maharashtra" /> */}
    <button className= 'w-50 h-20 ml-4 bg-white border-2 border-gray-500 rounded-2xl text-2xl text-gray-500 font-semibold'
     onClick={handleOnClick}>Top Restaurants</button>
    <div className='flex overflow-auto space-x-4 px-2 py-4'>
      {listOfRestaurant.map((restaurant) => <RestaurantCard key ={restaurant.info.id} resData ={restaurant} />)}
    </div>
    </div>
  )
}

export default Body
