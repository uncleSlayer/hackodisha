import React from 'react'

import '../../index.css'
import './carousel.css'
import Slider from 'react-slick'

import Product from '../Products/Product';

import Col from 'react-bootstrap/Col';

interface Carousel {
  carousel1: {
    id: number,
    name: string,
    category: string,
    price: number,
    description: string,
    quantity: number,
    imageUrl: string,
    userId: number,
  }[]

  carousel2: {
    id: number,
    name: string,
    category: string,
    price: number,
    description: string,
    quantity: number,
    imageUrl: string,
    userId: number,
  }[]

  carousel3: {
    id: number,
    name: string,
    category: string,
    price: number,
    description: string,
    quantity: number,
    imageUrl: string,
    userId: number,
  }[]

}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode: true,
  draggable:true,
  swipeToSlide:true,
  autoplay:true,
  autoplaySpeed:1500,
};




const Carousal: React.FC<Carousel> = ({ carousel1, carousel2, carousel3 }) => {
  console.log(carousel1)
  return (
    <div className="carousel_container">
      <Slider {...settings}>
        {carousel1.map((product)=>{
          if(!product){
            return
          }else{
            return(
              <Col className='item' key={product.id}>
                <Product  id={product.id} name={product.name}
                  category={product.category}
                  price={product.price}
                  desc={product.description}
                  quantity={product.quantity}
                  imageUrl={product.imageUrl}
                />
              </Col>
            )
          }
        })}
        
    </Slider>

    <div className='card_padding'></div>

    <Slider {...settings}>
        {carousel2.map((product)=>{
          if(!product){
            return
          }else{
            return(
              <Col className='item' key={product.id}>
                <Product  id={product.id} name={product.name}
                  category={product.category}
                  price={product.price}
                  desc={product.description}
                  quantity={product.quantity}
                  imageUrl={product.imageUrl}
                />
              </Col>
            )
          }
        })}
        
    </Slider>

    <div className='card_padding'></div>

    <Slider {...settings}>
        {carousel3.map((product)=>{
          if(!product){
            return
          }else{
            return(
              <Col className='item' key={product.id}>
                <Product  id={product.id} name={product.name}
                  category={product.category}
                  price={product.price}
                  desc={product.description}
                  quantity={product.quantity}
                  imageUrl={product.imageUrl}
                />
              </Col>
            )
          }
        })}
        
    </Slider>
    </div>
  )
}

export default Carousal

