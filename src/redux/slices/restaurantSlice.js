import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const restaurantSlice = createApi({
   reducerPath : 'restaurant',
   baseQuery: fetchBaseQuery({}),

endpoints: (builder) => ({
  getRestaurants: builder.query({
    query: () => 'https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0127127764228&lng=77.6537389308214&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
  })
})

})

export const { useGetRestaurantsQuery } = restaurantSlice

export default  restaurantSlice