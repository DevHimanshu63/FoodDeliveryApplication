import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import {Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Cart from './pages/cart/cart'
import Order from './pages/PlaceOrder/Order'


function App() {
  const [showLogin, setshowLogin] = useState(false) ;


  return (
    <>
    {showLogin ? <Login setshowLogin={setshowLogin} /> : <></>}
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    
    </>
  )
}

export default App
