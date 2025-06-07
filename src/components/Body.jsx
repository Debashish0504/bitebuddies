import React, { useContext } from 'react'
import RestaurantCard , {withPromotedLabel} from './RestaurantCard'
import FestivalScreen from './FestivalScreen'
import { useState , useEffect } from 'react'
import axios from 'axios'
import Shimmer from './Shimmer'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import useInternetStatus from '../utils/useInternetStatus'
import Offline from './Offline'
import {useGetRestaurantsQuery} from "../redux/slices/restaurantSlice"


function Body() {

    const {data,error,isLoading} = useGetRestaurantsQuery()
    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestaurant,setFilteredRestaurant] = useState([])
    const [searchText,setSearchText] = useState("")


    const RestaurantPromoted = withPromotedLabel(RestaurantCard)

    useEffect(() => {
      
      if (data) {
    const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
    console.log('Restaurants:', data);
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  }

    } , [data])

    // const fetchData = async() => {
    //   try {
    //     const res = await axios.get('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0127127764228&lng=77.6537389308214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    //   console.log(res.data.data);  // logs the second card object
    //   const cards = res?.data?.data?.cards;

    //     const restaurants = res?.data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    //     console.log('Restaurants:', restaurants);
    //     setListOfRestaurant(restaurants)
    //     setFilteredRestaurant(restaurants)
    //   } catch (error) {
    //     console.log(error)
    //   }

    // }

    let handleSearch = () => {
      const searchFilter = listOfRestaurant.filter((res) => 
         res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
      setFilteredRestaurant(searchFilter)
    }


    let handleOnClick = () => {
        const filterList = listOfRestaurant.filter((res) =>
            res.info.avgRatingString > 4.3
        )
        setFilteredRestaurant(filterList)
    }

    const internetStatus = useInternetStatus()

    if(internetStatus === false)  return <Offline/>

    if(listOfRestaurant.length === 0){
      return <Shimmer/>
    }

  return (
    <div className='px-2 py-4 '>
    <div className='flex items-center gap-4 mb-4'>
    <button
      className='w-50 h-20 bg-white border-2 border-gray-500 rounded-2xl text-2xl text-gray-500 font-semibold'
      onClick={ handleOnClick}
    >
      Top Restaurants
    </button>

    <div className='relative'>
      <input
        type='text'
        placeholder='Search your restaurant and food'
        className='px-4 h-12 w-80 bg-gray-200 text-gray-600 shadow-md rounded-md'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    
      <MagnifyingGlassIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" width={20} height={20} onClick= {handleSearch}/>
    </div>
  </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 py-4'>
      {filteredRestaurant.map((restaurant) => <Link key ={restaurant.info.id} 
         to={'/restaurant/'+ restaurant.info.id}>
         {
          restaurant?.info?.veg ? <RestaurantPromoted resData={restaurant} /> :
          <RestaurantCard  resData ={restaurant} />
         }
        
        </Link>)}
    </div>
    </div>
  )
}

export default Body
