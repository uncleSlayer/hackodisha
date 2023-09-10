import React from 'react'
import { useEffect, useState } from 'react'


import Hero from '../../components/Hero/Hero.tsx'
// import Search from './components/Search/Search.tsx'
import Carousal from '../../components/Carousel/Carousal.tsx'
import { SERVER_IP } from 'configs'
import { date } from 'zod'

const Home = () => {

  interface Card {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    quantity: number;
    imageUrl: string;
    userId: number;
  }

  const [carosel1, setCarousel1] = useState<Card[]>([{
    id: 0,
    name: "ss",
    category: "ss",
    price: 0,
    description: "ss",
    quantity: 0,
    imageUrl: "ss",
    userId: 0,
  }]
  )

  const [carosel2, setCarousel2] = useState<Card[]>([{
    id: 0,
    name: "ss",
    category: "ss",
    price: 0,
    description: "ss",
    quantity: 0,
    imageUrl: "ss",
    userId: 0,
  }]
  )

  const [carosel3, setCarousel3] = useState<Card[]>([{
    id: 0,
    name: "ss",
    category: "ss",
    price: 0,
    description: "ss",
    quantity: 0,
    imageUrl: "ss",
    userId: 0,
  }]
  )

  const [carosel5, setCarousel5] = useState<Card[]>([{
    id: 0,
    name: "ss",
    category: "ss",
    price: 0,
    description: "ss",
    quantity: 0,
    imageUrl: "ss",
    userId: 0,
  }]
  )

  const [carosel4, setCarousel4] = useState<Card[]>([{
    id: 0,
    name: "ss",
    category: "ss",
    price: 0,
    description: "ss",
    quantity: 0,
    imageUrl: "ss",
    userId: 0,
  }]
  )



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

        try {
          console.log(data.products)
          setCarousel1(data.products)

        } catch (err) {
          console.log(err)
        }
      })
  }

  const fetchCarousel2 = () => {
    fetch(SERVER_IP + "products/all/Pashmina_Shawl",
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

        try {
          console.log(data.products)
          setCarousel2(data.products)

        } catch (err) {
          console.log(err)
        }
      })
  }

  const fetchCarousel3 = () => {
    fetch(SERVER_IP + "products/all/Silk_rug",
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

        try {
          console.log(data.products)
          setCarousel3(data.products)

        } catch (err) {
          console.log(err)
        }
      })
  }

  const fetchCarousel4 = () => {
    fetch(SERVER_IP + "products/all/Porcelain_HomeDecor",
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

        try {
          console.log(data.products)
          setCarousel4(data.products)

        } catch (err) {
          console.log(err)
        }
      })
  }

  const fetchCarousel5 = () => {
    fetch(SERVER_IP + "products/all/Banarasi_Saree",
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

        try {
          console.log(data.products)
          setCarousel5(data.products)

        } catch (err) {
          console.log(err)
        }
      })
  }


  useEffect(fetchCarousel1, [])
  useEffect(fetchCarousel2, [])
  useEffect(fetchCarousel3, [])
  useEffect(fetchCarousel4, [])
  useEffect(fetchCarousel5, [])



  return (
    <div>
      <Hero />
      {/* <Search /> */}
      <Carousal carousel1={carosel1} carousel2={carosel2} carousel3={carosel3} carousel4={carosel4} carousel5={carosel5} />
    </div>
  )
}

export default Home