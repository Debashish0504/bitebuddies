import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { CDN_URL, STAR_URL } from '../utils/constants'
import useRestaurant from '../utils/useRestaurant'
import RestaurantCategory from './RestaurantCategory'
import { useContext } from 'react'
import UserContext from '../utils/UserContext'
import { useDispatch } from 'react-redux'
import { clearItem } from '../redux/slices/cartSlice'


function RestaurantMenu() {
  const {resId} = useParams()


  const resInfo = useRestaurant(resId)

  const [selectedIndex,setSelectedIndex] = useState(null)

  const {loggedInUser} = useContext(UserContext)

  const dispatch = useDispatch()

  const handleClick = () => {
      dispatch(clearItem())
  }


  if(resInfo === null) return <Shimmer/>

    const {name,costForTwoMessage,avgRating,cuisines,cloudinaryImageId,locality,areaName} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (type) => 
         type.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      
    )

    console.log(categories)


  return (
  <div className="flex flex-col h-screen px-8">
  <div className="flex items-center justify-center mt-8 ">
  <div className="bg-white shadow-lg rounded-xl border-2 border-gray-300 p-6 w-full max-w-6xl">
    <div className="flex flex-row items-center">
      
      <div className="w-1/2 flex flex-col">
        <h1 className="font-bold text-2xl mb-4">{name}</h1>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img className="w-6 h-6" alt="star" src={STAR_URL} />
            <h4 className="text-lg font-semibold text-black ml-2">{avgRating}</h4>
          </div>
          <h4 className="text-lg font-semibold">{costForTwoMessage}</h4>
        </div>
          <h4 className="text-lg font-semibold">{cuisines.join(",")}</h4>
          <h4 className="text-lg font-semibold">{locality}</h4>
      </div>

      <div className="w-1/2 flex justify-end">
        <img
          className="w-64 h-64 rounded-2xl object-cover"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

    </div>
  </div>
</div>

  <div className="flex flex-col  mt-8 items-center justify-center ">
          <h1 className="font-bold text-2xl mb-4 w-full max-w-6xl ">Menu</h1>
          <div className='flex flex-row w-full max-w-6xl justify-between'>
          <h1 className="font-bold text-2xl mb-4  items-start">Welcome {loggedInUser}!!!</h1>
          <button className='border-black border-2  text-black rounded-lg w-20' onClick={handleClick}>Clear All</button>
          </div>
        {categories.map((category,index) => 
          <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} 
          arrowStatus={index === selectedIndex}
          setSelectedIndex={() =>
            setSelectedIndex(prevIndex => (prevIndex === index ? null : index))
          }
            />
        )}
        
        

    </div>

        

</div>
  )
}

export default RestaurantMenu
