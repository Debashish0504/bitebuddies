import axios from "axios"
import { useEffect, useState } from "react"

const useRestaurant =  (resId) => {

   const [resInfo , setResInfo] = useState(null)

   useEffect(() => {
      fetchData()
   },[])


  async function fetchData() {
     try {
         const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0127127764228&lng=77.6537389308214&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
         console.log(res.data?.data)
         setResInfo(res.data?.data)
        } catch (error) {
         console.error(error)
      }
   }

   return resInfo
} 

export default useRestaurant