import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { CDN_URL, STAR_URL } from '../utils/constants'


function RestaurantMenu() {
  const {resId} = useParams()

  const [resInfo , setResInfo] = useState(null)


  useEffect(() =>{
    fetchData()
  },[])

  let fetchData = async () => {
    try {
        const res = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0127127764228&lng=77.6537389308214&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
            )
        console.log(res.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
        setResInfo(res.data?.data)
    } catch (error) {
        console.error(error)
    }
  }


  if(resInfo === null) return <Shimmer/>

    const {name,costForTwoMessage,avgRating,cuisines,cloudinaryImageId,locality,areaName} = resInfo?.cards[2]?.card?.card?.info
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card



  return (
  <div className="flex flex-col h-screen px-8">
  <div className="flex items-center justify-center mt-8 ">
  <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-6xl">
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

      {/* Right Image */}
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

  <div className="flex flex-col items-start mt-8 ">
        <h1 className="font-bold text-2xl mb-4">Menu</h1>
        <ul className='w-full'>
           {itemCards.map(
            (items,index) => 
            <li key={items.card.info.id} className='mt-4'>
                <div className='flex bg-white shadow-lg rounded-xl p-6 w-full justify-between'>
                    <div className="w-1/2 flex flex-col">
                    <h2 className='mt-2 mb-2'>{items.card.info.name}</h2>
                    <h3 className='font-medium'>₹{items.card.info.price/100}</h3>
                    <h3 className='font-normal text-gray-400'>{items.card.info.description}</h3>
                    </div>
                
                 <img
                    className="w-32 h-32 rounded-2xl object-cover"
                    alt={name}
                    src={CDN_URL + items.card.info.imageId}
                    />
                </div></li>
           )
           }
        </ul>

    </div>

        

</div>
  )
}

export default RestaurantMenu
