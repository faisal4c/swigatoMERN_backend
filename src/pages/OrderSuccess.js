import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { cartContext } from '../contexts/cartContextProvider'
import { Link, useNavigate } from 'react-router-dom';

import './OrderSuccess.css'
export default function OrderSuccess() {
    const { cartArray, emptyTheCart } = useContext(cartContext);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const saveOrderOnDB = async () => {
            const res = await fetch('http://127.0.0.1:5000/api/addOrder', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ cartArray, email: sessionStorage.getItem('email') }),
            })

            const data = await res.json();

            if (data.status === "success") {
                setSuccess(true);
            }
        }

        saveOrderOnDB();
    }, []);

    return (
        <>
            <Navbar />
            {
                success &&
                (
                    <div className='order-success'>
                        <h3
                        style={{textAlign:'center'}}
                        >Order Received Successfully</h3>
                        <p
                        style={{textAlign:'center'}}
                        >It will reach you shortly</p>
                        <Link className='order-now' to='/'>Go Back</Link>
                    </div>
                )
            }
        </>

    )
}
