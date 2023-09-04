import React from 'react'


import Hero from '../../components/Hero/Hero.tsx'
// import Search from './components/Search/Search.tsx'
import Carousal from '../../components/Carousel/Carousal.tsx'

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Search /> */}
      <Carousal />
    </div>
  )
}

export default Home