import React from 'react'
import FoodItems from '../components/FoodItems'
import Navbar from '../components/Navbar'
import './Menu.css'
import cart from '../images/cart.png'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='menu-page'>
        <Navbar/>
        <FoodItems/>
        <div className='menu-go-to-cart'>
          <Link to='/mycart'>
          <img src={cart}/>
          </Link>
        </div>
    </div>
  )
}
