import React from 'react'

import '../../index.css'
import './carousel.css'
import Slider from 'react-slick'

import Product from '../Products/Product';

import Row from 'react-bootstrap/Row';
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

const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  
};

const settings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true
};

const settings3 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:true
};



const Carousal: React.FC<Carousel> = ({ carousel1, carousel2, carousel3 }) => {
  console.log(carousel1)
  return (
    <div className="carousel_container">
      <Slider {...settings1}>
        {carousel1.map((product)=>{
          if(!product){
            return
          }else{
            return(
              <Col className='item'>
                <Product id={product.id} name={product.name}
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

    <Slider {...settings2}>
        {carousel2.map((product)=>{
          if(!product){
            return
          }else{
            return(
              <Col className='item'>
                <Product id={product.id} name={product.name}
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

    <Slider {...settings3}>
        {carousel3.map((product)=>{
          if(!product){
            return
          }else{
            return(
              <Col className='item'>
                <Product id={product.id} name={product.name}
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

