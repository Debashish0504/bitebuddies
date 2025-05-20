import React from 'react'
import { CDN_URL, STAR_URL } from '../utils/constants'

function RestaurantCard(props) {
  const {resData} = props
  const {
    cloudinaryImageId,
    name,
    cuisines,
    locality
  } = resData?.info

  const {
    slaString,
  } = resData?.info?.sla

  return (
    <div className='w-72 h-90 flex-shrink-0 mx-2 my-2 rounded-2xl transform transition-transform duration-200 hover:scale-95'>
       <img className='w-full h-45 rounded-2xl' 
       alt= {resData.info.name}
       src={CDN_URL
        +cloudinaryImageId
       } />
       <h2 className='text-lg font-bold text-black pt-2 ml-2'>{name}</h2>
       <div className='flex flex-row items-center ml-1'>
       <img className='w-6 h-6' 
       alt= 'star'
       src= {STAR_URL} ></img>
       <h4 className='text-lg font-semibold text-black ml-2'>{slaString}</h4>
       </div>
       <p className='text-sm font-medium text-gray-400 ml-2'>{cuisines.join(", ")}</p>
       <p className='text-sm font-medium text-gray-400 ml-2'>{locality}</p>

    </div>
  )
}

export default RestaurantCard
