import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import './MyCart.css'

import { cartContext } from '../contexts/cartContextProvider'
import { Link } from 'react-router-dom';
export default function MyCart() {
  const { cartArray, emptyTheCart } = useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState('');

  //setting total price
  useEffect(() => {
    let currTotal = 0;
    for (let Objelem of cartArray) {
      currTotal += (Objelem.item.price) * (Objelem.qty);
    }

    setTotalPrice(currTotal);
  }, [])


  return (
    <div className='my-cart-page'>
      <Navbar />
      <div className='mycart wrapper'>
        <div className='mycart-heading'>
          <h3>My Cart:</h3>
          <button className='order-now' onClick={() => { emptyTheCart() }}>Empty the Cart</button>
        </div>

        {
          cartArray.length > 0 ?
            cartArray.map(({ item, qty }) => (
              <div className='cart-item' key={item.name}>
                <div className='info'>
                  <h5>{item.name}</h5>
                  <img src={item.image} />
                </div>
                <p><span>Quantity: </span>{qty}</p>
                <p><span>Price: </span>&#8377; {item.price * qty}</p>
                <hr />
              </div>
            )) : ''
        }
      </div>

      {
        cartArray.length === 0 ?
          <div id='noItemInCart' className='wrapper'>
            <p>Oops, No Items in the Cart</p>
            <Link to='/menu'>Go To Menu</Link>
          </div>
          :
          <div className='total-price wrapper '>
            <h5>Total Price is: <span>&#8377;{totalPrice}</span></h5>
            {
              sessionStorage.getItem('email') ?
                <div className='place-order'>
                  <textarea onChange={(e) => { setAddress(e.target.value) }} placeholder='Enter Delivery address' ></textarea>
                  {
                    address === '' ?
                      <Link className='order-now add-address' to='/mycart'>Add Address To order</Link>
                      :
                      <Link className='order-now' to='/ordersuccess'>Place Order</Link>
                  }
                </div>

                :
                <div id='please-login'>
                  <h3>Please Login To Order</h3>
                  <Link className='order-now' to='/login'>Login Now</Link>
                </div>
            }



          </div>
      }


    </div>

  )
}
