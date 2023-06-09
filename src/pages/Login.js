import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch('https://swigato-backend.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json();//here we will get the data
      if (data.status === 'failure') {
        setError(data.error);//if there is failure in login, set the error state, so that it can be shown
      }
      else {
        sessionStorage.setItem('authToken', data.authToken);
        sessionStorage.setItem('email', email);
        console.log(sessionStorage.getItem('authToken'));
        navigate('/');
      }
    }
    catch (err) {
      console.log(err);
    }

  }

  return (
    <>
      <Navbar />
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} placeholder='email' required />
          <input type='password' onChange={(e) => { setPassword(e.target.value) }} value={password} placeholder='password' required />
          <p style={{ color: 'red', fontWeight: '800' }}>{error}</p>
          <p>Not a user? <span><Link to='/signup'>Signup</Link></span></p>
          <button className='order-now'>Login</button>
        </form>
      </div>
    </>
  )
}
