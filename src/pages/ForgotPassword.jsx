import React, { useState } from 'react'
import k from '../assets/maria-ziegler-jJnZg7vBfMs-unsplash.jpg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Signup from './Signup';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import OAuth from '../components/OAuth';

function ForgotPassword() {

 

  const [formData, setFormData] = useState({
    email:""
  })


  const { email} = formData 

  function onChange(e)
  {
  setFormData (( prevState) => ({
    ...prevState,
    [e.target.id] : e.target.value
  }) )
  }

  const onSubmit = async (e) =>
  {
    e.preventDefault()

    try {

      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)

      toast.success("Email was sent")
      
    } catch (error) {

      toast.error("Unable to send reset password please try again later")
      
    }

  }

 

  return (
  <div className='w-full p-10'>
    <div className='flex flex-col justify-center items-center' >
      <div>
        <h1 className='font-bold text-3xl'> Forgot Password</h1>
      </div>

      <div className='flex md:flex-row flex-col md:space-y-4 md:space-x-10 w-full p-10 md:justify-center align-middle items-center' >
        <div className=' md:w-1/2 md:p-0 m-4'>
          <img src= {k} className='w-full rounded-lg' alt="" />
        </div>

        <div className='md:w-1/2 flex flex-col w-full  justify-center align-middle items-center md:ml-0 ' >

        <form className='w-full md:p-10 space-y-5 px-20' onSubmit={onSubmit} >
          <input 
          type='email' 
          id='email' 
          className='border w-96 bg-white p-4 md:ml-10 text-gray-700' 

          value={email} onChange={onChange} 
          placeholder='Email address'/>
        

<div className='flex space-x-8 align-middle justify-center items-center w-full  '>
        <p className='m-0'> Don't have a account? <Link className='text-red-600 transition duration-200 ease-in-out ml-1' to='/signup'> Register</Link> </p>
       
       </div>

       <div className='w-full  flex-col space-y-4'>
        <button className='bg-blue-600 w-full p-2 text-white font-semibold text-2xl'> Send Reset Password </button>
        <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
          OR
        </div>
        <OAuth/>
       </div>
        </form>

     

        </div>

      </div>
    </div>

  </div>
  )
}

export default ForgotPassword
