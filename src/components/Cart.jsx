import { useSelector } from "react-redux"
import ItemsList from "./ItemsList"
import { useDispatch } from 'react-redux'
import { clearItem } from '../redux/slices/cartSlice'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

  const handleClick = () => {
      dispatch(clearItem())
  }

    return (
    <div className="flex flex-col items-center ">
      <div className='flex w-full mt-4 max-w-6xl justify-between'>
         <h1 className="text-2xl font-bold text-black">
               Welcome to Cart
         </h1>
       <button className='border-black border-2  text-black rounded-lg w-20' onClick={handleClick}>Clear All</button>
         </div>
         <div className='w-full  max-w-6xl items-center'>
           {cartItems.length == 0 ? 
           <div className="flex justify-center items-center w-full h-64">
             <h1 className="text-2xl font-bold text-black">We Are Missing You</h1>
             </div>
            : <ItemsList  data={cartItems} />} 
         </div>
       </div>)
}

export default Cart