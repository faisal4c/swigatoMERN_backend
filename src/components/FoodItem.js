import React, { useState, useContext } from 'react'
import './FoodItem.css'
import veg from '../images/veg-icon.png'
import nonveg from '../images/non-veg-icon.png'

import { cartContext } from '../contexts/cartContextProvider'

export default function FoodItem({ item }) {
    const [showQty, setShowQty] = useState(false);
    const [qty, setQty] = useState(-1);

    const { cartArray, addToCart, decreaseQtyFromCart } = useContext(cartContext);//getting cartArray and Function to handle it from cartContext
    const changeQty = (type) => {//handling the quantity change
        if (type === 'inc') {
            //updating the cart array in cartContext
            addToCart({ item, selectedQty: qty })

            setQty((prev) => {//increasing the qty local state
                return prev + 1;
            })
        }
        else {
            //updating the cart array in cartContext
            decreaseQtyFromCart({ item, selectedQty: qty })

            if (qty <= 0) {
                setShowQty(false);
            }

            setQty((prev) => {//decreasing the qty local state
                return prev - 1;
            })
        }
    }




    if (item.search != '' && !item.name.toLowerCase().includes(item.search)) {//it means there is some search query
        if (!item.name.toLowerCase().includes(item.search) && !item.ingredients.toLowerCase().includes(item.search)) {//hamare current foodItem me search query nhi hai to empty return krdenge
            return (
                <div></div>
            )
        }
    }

    return (
        <div className='food-item'>
            <div className='item-text'>
                <img className='veg-nonveg' src={item.isVeg ? veg : nonveg} />
                <h5>{item.name}</h5>
                <h6>Rs. {item.price}</h6>
                <p>{item.ingredients}</p>
            </div>
            <div className='item-image'>
                <div className='img-container'>
                    <img src={item.image} />
                </div>

                <button onClick={() => { setShowQty(true); setQty(0) }} className={`add-btn ${showQty ? 'hide' : ''}`}>Add</button>
                <div className={`qty ${showQty ? '' : 'hide'}`}>
                    <button onClick={() => { changeQty('dec'); }} className='minus'>-</button>
                    <span>{qty}</span>
                    <button onClick={() => { changeQty('inc'); }} className='mplus'>+</button>
                </div>
            </div>
            <div className='hr'>
            </div>
        </div>
    )
}
