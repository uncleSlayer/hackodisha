import React from 'react'
import ReactDOM from 'react-dom/client'
// importing cssfiles
import './index.css'
// importing components
import Nav from './components/Nav/Nav.tsx'
import Home from './pages/Home/Home.tsx'
import Cart from './pages/Cart/cart.tsx'
import Catalog from './pages/Catalog/Catalog.tsx'
import Login from './components/auth/Login.tsx'
import Signup from './components/auth/Signup.tsx'
import { RecoilRoot } from "recoil"


import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <RecoilRoot>
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path='/' element={<div><Home /></div>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
)
