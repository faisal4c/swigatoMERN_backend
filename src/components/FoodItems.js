import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom' 
import FoodItem from './FoodItem'
import Loading from './Loading';

import menu from '../images/menu.png'

import './FoodItems.css'

export default function FoodItems() {
    const [foodItemsArray, setFoodItemsArray] = useState([]);
    const [search, setSearch] = useState('');

    const navigate=useNavigate();

    useEffect(() => {
        const controller = new AbortController();//using this controller to abort fetch if component unmounts
        const fetchData = async () => {
            try {
                const res = await fetch('http://127.0.0.1:5000/api/getFoodItems', {
                    signal: controller.signal//registering this controller with fetch request
                })
                const data = await res.json();
                setFoodItemsArray(data);
            }
            catch (err) {

            }
        }

        fetchData();
        return () => {
            controller.abort()
        }
    }, [])




    if (foodItemsArray.length == 0) {
        return <Loading />
    }

    return (
        <>
            <img className='menu wrapper' src={menu} />
            <hr style={{ maxWidth: '900px', margin: '1rem auto' }} />
            <div id="food-items-id" className='food-items wrapper'>
                <form onSubmit={(e) => { e.preventDefault() }}>
                    <input placeholder='Search Our Menu' type='text' onChange={(e) => { setSearch(e.target.value) }} value={search} />
                    <Link to='/mycart'><button className='order-now' >Go To Cart</button></Link>
                </form>
                <hr style={{ maxWidth: '900px', margin: '1rem auto' }} />


                {
                    foodItemsArray.map((item) =>
                    (
                        <FoodItem key={item.name} item={{ ...item, search: search }} />
                    )
                    )
                }

            </div>
        </>
    )
}
