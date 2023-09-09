import React from 'react'
import ReactDOM from 'react-dom/client'
// importing cssfiles
import './index.css'
// importing components
import Nav from './components/Nav/Nav.tsx'
import Home from './pages/Home/Home.tsx'
import Cart from './pages/Cart/cart.tsx'
import Catalog from './pages/Catalog/Catalog.tsx'
import Login from './components/SignUp_Login/SingnUpLogin.tsx'
import Signup from './components/auth/Signup.tsx'
import Products from './components/Products/Products.tsx'
import { RecoilRoot } from "recoil"
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import UploadProduct from './components/vendor/UploadProduct.tsx'
import Vendor from './components/vendor/Vendor.tsx'
import Your_Cart from './components/Cart/Your_Cart.tsx'
import Address from './components/address/Address.tsx'
import Success from './components/payment/Success.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <RecoilRoot>
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path='/' element={<div><Home /></div>} />

        {/* <Route path='/signup' element={<Login />} /> */}
        <Route path='/Products/:category' element={<Products />} />

        <Route path='/auth' element={<Login />} />
        <Route path='/Catalog' element={<Catalog />} />
        <Route path='/cart' element={<Your_Cart />} />
        <Route path='/upload' element={<UploadProduct />} />
        <Route path='/vendor' element={<Vendor />} />
        <Route path='/checkout/address' element={<Address />} />
        {/* http://localhost:5173/success/?houseno=${orderAddress.houseNumber}&city=${orderAddress.cityAddr}&state=${orderAddress.stateAddr}&pin=${orderAddress.pinAddr}&phone=${orderAddress.phone}&country=${orderAddress.country}` */}
        <Route path='/success' element={<Success />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
)
