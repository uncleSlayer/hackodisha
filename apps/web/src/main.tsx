import React from 'react'
import ReactDOM from 'react-dom/client'
// importing cssfiles
import './index.css'
// importing components
import Nav from './components/Nav/Nav.tsx'
import Home from './pages/Home/Home.tsx'
import Cart from './pages/Cart/usercart.tsx'
import Login from './components/auth/Login.tsx'
import Signup from './components/auth/Signup.tsx'
import Carousal from './components/Carousel/Carousal.tsx'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >

      <Nav />

      <Routes>
        <Route path='/' element={<div><Home /></div>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/carousel' element={<Carousal />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
