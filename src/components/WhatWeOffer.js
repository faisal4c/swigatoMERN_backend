import React from 'react'
import './WhatWeOffer.css'
import wwo1 from '../images/wwo1.png'
import wwo2 from '../images/wwo2.png'
import wwo3 from '../images/wwo3.png'
import { Link } from 'react-router-dom'
export default function WhatWeOffer() {
    return (
        <div className='whatweoffer wrapper'>
            <hr />
            <h3>What We Offer</h3>
            <p>Curious Here are our Top Selling menu items</p>
            <div className='boxes'>
                <div className='box'>
                    <Link to='/menu'>
                        <img src={wwo1} />
                        <h4>Hamburgers</h4>
                    </Link>
                </div>
                <div className='box'>
                    <Link to='/menu'>
                        <img src={wwo2} />
                        <h4>Chicken Wings</h4>
                    </Link>
                </div>
                <div className='box'>
                    <Link to='/menu'>
                        <img src={wwo3} />
                        <h4>Oreo Shake</h4>
                    </Link>
                </div>
            </div>
            <Link className='button-a' to='/menu'>
                <button className='order-now'>Order Now</button>
            </Link>
        </div>
    )
}
