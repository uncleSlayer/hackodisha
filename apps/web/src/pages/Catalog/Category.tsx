import React from 'react'
import { Link } from 'react-router-dom'

interface Category {
    category: string
}
const Category:React.FC<Category> = ({category}) => {
  return (
    <div><Link to={`/Products/${category}`}>{category}</Link></div>
  )
}
  

export default Category;