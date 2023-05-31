import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { cartContext } from '../contexts/cartContextProvider'
import { Link } from 'react-router-dom';
export default function Order() {
    const { cartArray } = useContext(cartContext);
    if (!localStorage.getItem('authToken')) {
        return (
            <>
                <Navbar />
                <div className='loginFirst'>
                    <h2>To place your order now, log in to your existing account or sign up.</h2>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </div>
            </>

        )
    }
    return (
        <>
            <Navbar />
            <div className='order'>

            </div>
        </>
    )
}
