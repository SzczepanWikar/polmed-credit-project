import React from 'react'
import Navbar from './components/home/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from  './components/Pages/Home.js';
import { Services } from  './components/Pages/Services.js';
import { Products } from  './components/Pages/Products.js';
import './App.scss'
export const App = () => {
  return (
      <>
      <Router>
        <Navbar/>
        
        <Routes>
        <Route path='/' element ={ <Home/>} />
          <Route path='/services' element = { < Services />} />
          <Route path='/products' element = { <Products />} />
        </Routes>
        </Router>
        
        
      </>
      
  )
}

export default App;