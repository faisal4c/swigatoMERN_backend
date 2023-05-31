import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './Signup.css'
import { Link , useNavigate } from 'react-router-dom'


export default function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error,setError]=useState(null);

  const navigate = useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await fetch('http://localhost:5000/api/signup',{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({name,email,password,date:new Date()}),
      })

      const data=await res.json();//to get the data we sent from backend we need to first call res.json() and after that we get the object we sent from the backend
      if(data.status==='failure'){//we are returning status of the post request from the backend
        setError(data.error);
        throw new Error();
      }

      sessionStorage.setItem('authToken',data.authToken);
      sessionStorage.setItem('email',email);
      setName('');
      setPassword('');
      setEmail('');
      navigate('/');
    }
    catch(err){
      console.log('error is ',err);
    }
  }

  return (
    <>
    <Navbar/>
    <div className='signup'>
        <form onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <input onChange={(e)=>{setName(e.target.value)}} type='text' value={name} placeholder='name' required/>
            <input onChange={(e)=>{setEmail(e.target.value)}} type='email' value={email} placeholder='email' required/>
            <input onChange={(e)=>{setPassword(e.target.value)}} type='password' value={password} placeholder='password' required/>
            <p>Already a user? <span><Link to='/login'>Login</Link></span></p>
            {<p>{error===null?'':<div>{error}</div>}</p>}
            <button className='order-now'>Sign Up</button>
            <p>{document.cookie}</p>
        </form>
    </div>
    </>
  )
}
