import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

function Accordion({ items }) {

  const [expandState, setExpandState] = useState(null)

  let handleClick = (index) => {
      setExpandState(prevIndex => prevIndex === index ? null : index)
  }

    if (items.length === 0 || !items) {
    return <div className= 'text-black-500 font-regulat text-lg'>No items available</div>
  }
    return (
        <div className="px-8">
            <div className = 'flex flex-col '>
                {items.map((items, index) =>
                    <div key={index} className="mt-6">
                        <button className='w-full flex px-4 py-3 justify-between items-center rounded-lg border-1 border-gray-500 bg-white text-gray-400 text-2xl font-semibold' onClick={() => handleClick(index)} >
                            {items.title}
                            {expandState === index ? <FaChevronUp/> : <FaChevronDown/>}
                        </button>
                        {expandState === index && (<div className='text-black-500 font-regulat text-lg'>
                    {items.content}
                    </div>)}
                    </div>
                    
                )}
            </div>
        </div>
    );
}

export default Accordion;