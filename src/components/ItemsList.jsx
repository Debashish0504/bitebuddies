import React from 'react'
import { CDN_URL, STAR_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/cartSlice'
import { useLocation } from "react-router-dom";

function ItemsList({data}) {

  const dispatch = useDispatch()
  const location = useLocation()

  const isCartPage = location.pathname.includes("cart")

  const handleClick = (items) => {
      dispatch(addItem(items))
  }

  return (
    <div>
      <ul>
       {data.map(
            (items,index) => 
                
            <li key={`${items.card.info.id}-${index}`} className='mt-4'>
                <div className='flex bg-white shadow-lg rounded-xl p-6 w-full justify-between'>
                    <div className="w-1/2 flex flex-col">
                    <h2 className='mt-2 mb-2'>{items.card.info.name}</h2>
                    <h3 className='font-medium'>₹{(items.card.info.price/100) || (items.card.info.finalPrice/100) || (items.card.info.defaultPrice/100) }</h3>
                    <h3 className='font-normal text-gray-400'>{items.card.info.description}</h3>
                    </div>
                 <div className=" flex flex-col">
                 <img
                    className="w-32 h-32 rounded-2xl object-cover"
                    alt={name}
                    src={CDN_URL + items.card.info.imageId}
                    />
                    {!isCartPage ? 
                     <button className='bg-white border-black border-2 rounded-lg text-black h-10' onClick={() => handleClick(items)}>Add</button>
                      : <></>}
                   
                    </div>
                </div></li>
           )
           }
           </ul>
    </div>
  )
}

export default ItemsList
