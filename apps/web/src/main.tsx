import React from 'react'
import ReactDOM from 'react-dom/client'
// importing cssfiles
import './index.css'
// importing components
import Nav from './components/Nav/Nav.tsx'
import Hero from './components/Hero/Hero.tsx'
import Search from './components/Search/Search.tsx'
import Catalogue from './components/Catalogue/Catalogue.tsx'
import Login from './components/auth/Login.tsx'
import Signup from './components/auth/Signup.tsx'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <Nav />
      <Hero />
      <Search />
      <Catalogue />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<h1>home</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
