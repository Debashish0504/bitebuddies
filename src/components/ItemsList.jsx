import React from 'react'
import { CDN_URL, STAR_URL } from '../utils/constants'

function ItemsList({data}) {
  return (
    <div>
       {data.map(
            (items,index) => 
                <ul className='w-full max-w-6xl'>
            <li key={items.card.info.id} className='mt-4'>
                <div className='flex bg-white shadow-lg rounded-xl p-6 w-full justify-between'>
                    <div className="w-1/2 flex flex-col">
                    <h2 className='mt-2 mb-2'>{items.card.info.name}</h2>
                    <h3 className='font-medium'>₹{(items.card.info.price/100) || (items.card.info.finalPrice/100) || (items.card.info.defaultPrice/100) }</h3>
                    <h3 className='font-normal text-gray-400'>{items.card.info.description}</h3>
                    </div>
                
                 <img
                    className="w-32 h-32 rounded-2xl object-cover"
                    alt={name}
                    src={CDN_URL + items.card.info.imageId}
                    />
                </div></li>
                </ul>
           )
           }
    </div>
  )
}

export default ItemsList
