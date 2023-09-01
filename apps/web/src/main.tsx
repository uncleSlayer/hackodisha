import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Nav from './components/Nav/Nav.tsx'
import Signup from './components/auth/Signup.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<h1>home</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
