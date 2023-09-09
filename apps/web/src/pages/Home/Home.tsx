import React from 'react'
import { useEffect, useState } from 'react'


import Hero from '../../components/Hero/Hero.tsx'
// import Search from './components/Search/Search.tsx'
import Carousal from '../../components/Carousel/Carousal.tsx'
import { SERVER_IP } from 'configs'
import { date } from 'zod'

const Home = () => {

  const [carousel1, setCarousel1] = useState<{
    id: number,
    name: string,
    category: string,
    price: number,
    description: string,
    quantity: number,
    imageUrl: string,
    userId: number,
  }[]>([{id: 0,
    name: "ss",
    category: "ss",
    price: 0,
    description: "ss",
    quantity: 0,
    imageUrl: "ss",
    userId: 0,}])
  
  const fetchCarousel1 = () => {
    fetch(SERVER_IP + "products/all/Wooden_Sculptures",
      {
        method: 'post',
        credentials: 'include',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify({
          lastItem: 0
        })
      }).then((response) => {
        console.log(response)
        return response.json()
      }).then((data) => {
     
        try{
          console.log(data.products)
          setCarousel1(data.products)
          
        }catch(err){
          console.log(err)
        } 
      })
  }
  

  useEffect(fetchCarousel1,[])
  




  return (
    <div>
      <Hero />
      {/* <Search /> */}
      <Carousal data={carousel1}/>
    </div>
  )
}

export default Home