import axios from "axios"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

function About() {

    const [userData , setUserData] = useState(null)

    useEffect(() => {
        fetchUserData()
    },[])

    let fetchUserData = async () => {
       try {
          const res = await axios.get('https://api.github.com/users/Debashish0504')
          console.log(res.data.avatar_url)
          setUserData(res)
       } catch (error) {
         console.error(error)
       }
    }

    if(userData === null) return <Shimmer/>

    const {name,public_repos,followers,avatar_url} = userData?.data

  return (
    <div className="flex flex-col h-screen ">
          <div className="flex items-center justify-center mt-8 ">
        <div className=" flex flex-row items-center justify-between shadow-lg rounded-2xl border-2 bg-white w-screen max-w-6xl">
            <div className="flex flex-col">
                 <h1 className="text-2xl ml-4 font-bold text-black ">
               {userData.login}
         </h1>
          <h3 className="text-2xl ml-4 font-bold text-black ">
               Active Repos: {public_repos}
         </h3>
         <h4 className="text-2xl ml-4 font-bold text-black ">
               Followers: {followers}
         </h4>
            </div>
        
           <img
                     className="w-64 h-64 rounded-2xl object-cover"
                     alt={name}
                     src={avatar_url} />

        </div>
        </div>
       </div>)
  
}

export default About





