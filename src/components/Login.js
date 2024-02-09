import React, { useRef, useState } from 'react'
import Header from './Header'
import { BG_URL } from "../utils/constants";
import {checkValidData} from "../utils/validate"
const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const email = useRef(null);
    const password=useRef(null);
    const handleButtonClick=()=>{
        //validate the form data
       
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        console.log(message);

    }
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div  className="absolute">
        <img src={BG_URL} alt="logo" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()}className='w-3/12 absolute p-12 bg-black bg-opacity-80 mx-auto left-0 right-0  my-36 text-white'>
            <h1 className='font-bold text-3xl py-4 text-center'>
                {isSignInForm?"Sign In":"Sign Up"}
            </h1>
            <input
            ref={email} 
            type='email' placeholder='Email Address' className='p-4 my-3 w-full bg-gray-700 '/>
            <input 
            ref={password}
            type='password' placeholder='Password' className='p-4 my-3 w-full bg-gray-700'/>
            <p className='text-red-600 font-bold'>{errorMessage}</p>
            {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-3 w-full bg-gray-700'/>}
            <button className='py-3 m-3 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 text-center cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign Up now":"Already Registered"}</p>
        </form>
    </div>
  )
}

export default Login