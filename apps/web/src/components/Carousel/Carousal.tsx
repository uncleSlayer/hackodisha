import React from 'react'

import '../../index.css'
import './carousel.css'

interface Carousel{
  data: { id: number,
    name: string,
    category: string,
    price: number,
    description: string,
    quantity: number,
    imageUrl: string,
    userId: number,
  }[]
   
}

const Carousal:React.FC<Carousel> = ({data}) => {
  console.log(data)
  return (
    <div className="carousel_container">{}</div>
  )
}

export default Carousal