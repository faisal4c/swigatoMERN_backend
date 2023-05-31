import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import cart from '../images/cart.png'
import { cartContext } from '../contexts/cartContextProvider'

export default function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    const navigate = useNavigate();

    const toggleNavbar = () => {//when we add show, it will show the hamburger list 
        setIsCollapsed((prev) => {
            return !prev;
        })
    }

    //deleting authtoken for logout
    const deleteAuthToken = () => {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("email");
        navigate('/')//navigating coz session stroage ki value update jab hi hogi jab component rerender hoga
    }

    //using cart context to show number of orders above my cart link
    const {cartArray}=useContext(cartContext)
    const [noOfOrders,setNoOfOrders]=useState(cartArray.length);
    useEffect(()=>{
        setNoOfOrders(cartArray.length)
    },[cartArray])

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className='logo' to='/'>Swigato</Link>
            <button onClick={toggleNavbar} className="navbar-toggler show" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home </Link>
                    </li>

                    {!sessionStorage.getItem('authToken') &&
                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>Login</Link>
                        </li>
                    }

                    {!sessionStorage.getItem('authToken') &&
                        <li className="nav-item">
                            <Link className="nav-link" to='/signup'>Signup</Link>
                        </li>
                    }


                    <li className="nav-item">
                        <Link className="nav-link" to='/menu'>Our Menu</Link>
                    </li>
                    
                    {sessionStorage.getItem('authToken') &&
                    <li className="nav-item">
                    <Link className="nav-link" to='/myorders'>My Orders</Link>
                    </li>
                    }
                
                

                    <li className="nav-item">
                        <Link className="nav-link" to='/contactdeveloper'>Contact Developer</Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link my-cart" to='/mycart'>My Cart
                            <img className='cart' src={cart} />
                            {noOfOrders>0?<span>{noOfOrders}</span>:''}
                        </Link>
                    </li>


                    {sessionStorage.getItem('authToken') &&
                        <li className="nav-item">
                            <Link onClick={deleteAuthToken} className="nav-link " to='/'>Logout</Link>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    )
}