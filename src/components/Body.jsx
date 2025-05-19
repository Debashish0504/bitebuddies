import React from 'react'
import RestaurantCard from './RestaurantCard'
import FestivalScreen from './FestivalScreen'

const resList = [
  {
      "info": {
          "id": "709163",
          "name": "FB Cakes",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/19/845c9a11-61d1-4ce7-a42b-81579695f35e_709163.jpg",
          "locality": "Ramamurthy nagar main road",
          "areaName": "Ramamurthy Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "Indian"
          ],
          "avgRating": 4.1,
          "parentId": "245423",
          "avgRatingString": "4.1",
          "totalRatingsString": "187",
          "promoted": true,
          "adTrackingId": "cid=29279395~p=0~adgrpid=29279395#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=709163~plpr=COLLECTION~eid=59f82d37-7720-4098-911b-514a9dc59458~srvts=1747673681477~collid=115117",
          "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-19 23:45:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹166 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 12
          },
          "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "101"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-2c5d8238-4cf9-4777-8ccc-c0d47ff8822d"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/fb-cakes-main-road-ramamurthy-nagar-rest709163",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "372735",
          "name": "EatFit",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/fe686aa0-2559-40d6-9c7d-d5606bf9cf9e_372735.jpg",
          "locality": "SAI GALAXY",
          "areaName": "Kalyan Nagar",
          "costForTwo": "₹270 for two",
          "cuisines": [
              "Chinese",
              "Healthy Food",
              "Tandoor",
              "Pizzas",
              "North Indian",
              "Thalis",
              "Biryani"
          ],
          "avgRating": 4.3,
          "favourite": true,
          "parentId": "76139",
          "avgRatingString": "4.3",
          "totalRatingsString": "6.5K+",
          "sla": {
              "deliveryTime": 48,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-20 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹99"
          },
          "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-2c5d8238-4cf9-4777-8ccc-c0d47ff8822d"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/eatfit-sai-galaxy-kalyan-nagar-rest372735",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "520655",
          "name": "CakeZone Patisserie",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/6b13b2c9-4e78-4308-80f3-1412f3a1b760_520655.jpg",
          "locality": "SAI GALAXY",
          "areaName": "Banaswadi",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Sweets",
              "Ice Cream"
          ],
          "avgRating": 4.4,
          "parentId": "7003",
          "avgRatingString": "4.4",
          "totalRatingsString": "3.5K+",
          "promoted": true,
          "adTrackingId": "cid=29254319~p=1~adgrpid=29254319#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=520655~plpr=COLLECTION~eid=e8136fc9-b3a8-4bd0-ba7f-3470dc9e9a1a~srvts=1747673681477~collid=115117",
          "sla": {
              "deliveryTime": 41,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-20 01:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "66% OFF",
              "subHeader": "UPTO ₹126",
              "headerTypeV2": 12
          },
          "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-2c5d8238-4cf9-4777-8ccc-c0d47ff8822d"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/cakezone-patisserie-sai-galaxy-banaswadi-rest520655",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "351274",
          "name": "Biryani Trip - Destination Hyderabad",
          "cloudinaryImageId": "raqcbux2rko6wewgvdlf",
          "locality": "HBR Layout",
          "areaName": "Banasawadi",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Biryani",
              "Hyderabadi",
              "Indian"
          ],
          "avgRating": 4.4,
          "parentId": "441462",
          "avgRatingString": "4.4",
          "totalRatingsString": "821",
          "sla": {
              "deliveryTime": 47,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-20 01:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹166 OFF",
              "subHeader": "ABOVE ₹449",
              "discountTag": "FLAT DEAL",
              "headerTypeV2": 12
          },
          "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-2c5d8238-4cf9-4777-8ccc-c0d47ff8822d"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/biryani-trip-destination-hyderabad-hbr-layout-banasawadi-rest351274",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "39714",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/3c9d9e68-cf23-4834-808a-8b1c9e99dc80_39714.JPG",
          "locality": "Old Madras Road",
          "areaName": "Old Madras Road",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "sandwich",
              "Salads",
              "wrap",
              "Healthy Food"
          ],
          "avgRating": 4.4,
          "parentId": "2",
          "avgRatingString": "4.4",
          "totalRatingsString": "2.4K+",
          "sla": {
              "deliveryTime": 52,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-19 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹119"
          },
          "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "6.1K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-2c5d8238-4cf9-4777-8ccc-c0d47ff8822d"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/subway-old-madras-road-rest39714",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "530296",
          "name": "Chaayos Chai+Snacks=Relax",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_530296.JPG",
          "locality": "CMH ROAD",
          "areaName": "INDIRANAGAR",
          "costForTwo": "₹250 for two",
          "cuisines": [
              "Bakery",
              "Beverages",
              "Chaat",
              "Desserts",
              "Home Food",
              "Italian",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "Sweets"
          ],
          "avgRating": 4.6,
          "parentId": "281782",
          "avgRatingString": "4.6",
          "totalRatingsString": "1.9K+",
          "sla": {
              "deliveryTime": 55,
              "lastMileTravel": 6.3,
              "serviceability": "SERVICEABLE",
              "slaString": "50-55 mins",
              "lastMileTravelString": "6.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-20 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹94"
          },
          "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "--"
              }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-2c5d8238-4cf9-4777-8ccc-c0d47ff8822d"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-cmh-road-indiranagar-rest530296",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "364569",
          "name": "Chai Point",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/18/55611d4b-90ad-46c0-9ab6-ebc62b79825b_364569.jpg",
          "locality": "Indiranagar",
          "areaName": "Indiranagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Bakery",
              "Beverages",
              "Maharashtrian",
              "Snacks",
              "Street Food",
              "South Indian",
              "Punjabi",
              "Chaat",
              "Indian",
              "American"
          ],
          "avgRating": 4.5,
          "parentId": "1607",
          "avgRatingString": "4.5",
          "totalRatingsString": "7.6K+",
          "sla": {
              "deliveryTime": 49,
              "lastMileTravel": 6.3,
              "serviceability": "SERVICEABLE",
              "slaString": "45-50 mins",
              "lastMileTravelString": "6.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2025-05-26 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹79"
          },
          "loyaltyDiscoverPresentationInfo": {
              "logoCtx": {
                  "text": "BENEFITS",
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
              },
              "freedelMessage": "FREE DELIVERY"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
              "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "986"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
          "context": "seo-data-2c5d8238-4cf9-4777-8ccc-c0d47ff8822d"
      },
      "cta": {
          "link": "https://www.swiggy.com/city/bangalore/chai-point-indiranagar-rest364569",
          "type": "WEBLINK"
      }
  }
]

function Body() {
  return (
    <div className='px-2 py-4 '>
        {/* <h2 className='ml-5 text-2xl font-bold text-black '>Biriyanis</h2>
        <FestivalScreen userState="Maharashtra" /> */}
    <div className='flex overflow-auto space-x-4 px-2 py-4'>
      {resList.map((restaurant) => <RestaurantCard key ={restaurant.info.id} resData ={restaurant} />)}
    </div>
    </div>
  )
}

export default Body
