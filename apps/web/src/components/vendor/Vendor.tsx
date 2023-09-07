import React from 'react'
import { Link } from 'react-router-dom'

const Vendor = () => {
  return (
    <div>
        <div>vendor</div>
        <Link to="/upload"><div>Upload Product</div></Link>
    </div>
  )
}

export default Vendor