import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FoodItem from '../components/FoodItem'
import './MyOrders.css'
import { Link } from 'react-router-dom';

export default function MyOrders() {
  const [ordersArray, setOrdersArray] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();//using this controller to abort fetch if component unmounts
    const fetchOrdersData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:5000/api/getOrders/${sessionStorage.getItem('email')}`, {
          signal: controller.signal//registering this controller with fetch request
        })

        const data = await res.json();
        if (data.status === 'failure') {
          setOrdersArray([]);
          return;
        }
        setOrdersArray(data.orders);
      }
      catch (err) {
        
      }
    }

    fetchOrdersData();
    return () => {
      controller.abort()
    }
  }, [])

  console.log(ordersArray.map((elem) => {
    return elem
  }))

  return (
    <>
      <Navbar />
      {
        error !== null ?
          <div className='myorders-error'>
            {error.toString()}
          </div> : <div></div>
      }

      {
        ordersArray.length === 0 ?
          <div className='no-orders'>
            <h3>Oops, No Orders Present</h3>
            <Link className='order-now' to='/menu'>Order Now</Link>
          </div>
          :
          <div className='myorders wrapper'>
            {
              ordersArray.map((elem) => (
                <div>
                  <h2>Date: {elem.date.toLocaleString().substring(0,10)}</h2>
                  <hr/>
                  {
                    elem.orders.map((eachOrder) => (
                      <FoodItem item={{ ...eachOrder.item}} />
                    ))
                  }
                  <hr />
                  <br />
                  <br />
                  <br />
                </div>
              ))
            }
          </div>
      }

    </>
  )
}
