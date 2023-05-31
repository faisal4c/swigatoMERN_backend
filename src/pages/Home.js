import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import './Home.css';
import plate from '../images/plate.png';
import WhatWeOffer from '../components/WhatWeOffer';
import ClientReviews from '../components/ClientReview';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='upper-section wrapper'>
        <div className='text '>
          <h1>Swigato</h1>
          <h3>Delicious Food for every</h3>
          <h2>MOOD</h2>
          <Link to='/menu'>See Our Menu</Link>
        </div>
        <div className='image'>
          <img src={plate} alt='Plate' />
        </div>
      </div>
      <WhatWeOffer />
      <ClientReviews/>
    </div>
  );
}
