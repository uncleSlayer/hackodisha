import React from 'react'
import Category from './Category';

import { ProductCategory } from "@prisma/client";

const categories = Object.values(ProductCategory); // returns an array of string

import '../../index.css'
import './catalog.css'

const Catalogue = () => {
  
  return (
    <div className='categories'>{categories.map((category,index)=>{
      return<div className='category' key={index}><Category category= {category}/></div>
    })}</div>
  )
}

export default Catalogue