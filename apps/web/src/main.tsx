import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './components/Nav/Nav.tsx'
import Signup from './components/auth/Signup.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <Nav />
      <Routes>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
