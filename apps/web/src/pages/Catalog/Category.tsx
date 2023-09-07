import React from 'react'
import { Link } from 'react-router-dom'

import'../../index.css'
import './category.css'

interface Category {
    category: string
}
const Category:React.FC<Category> = ({category}) => {
  return (
    <div className="categoryCard">
      <Link to={`/Products/${category}`}>
          <div className="image_container">

          </div>
          <div className="cardfooter">
            {category}
          </div>
      </Link>
    </div>
  )
}
  

export default Category;