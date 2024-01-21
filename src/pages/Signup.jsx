import React, { useState } from 'react'
import k from '../assets/maria-ziegler-jJnZg7vBfMs-unsplash.jpg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import {getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import {db} from '../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

function Signup() {

  const [showPassword, setShowPassword] = useState(true);

  const [formData, setFormData] = useState({
    email:"",
    password:"",
    name:""
  })
  const { email, password,name} = formData 

  const navigate = useNavigate();
  function onChange(e)
  {
  setFormData (( prevState) => ({
    ...prevState,
    [e.target.id] : e.target.value
  }) )
  }

  // Register using email

  const  onSubmit = async (e) =>
  {
    e.preventDefault()

    try {

      const auth = getAuth()
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

      updateProfile(auth.currentUser,{
        displayName: name
      })

      const user = userCredentials.user
      const formDataCopy = {...formData}
      delete formData.password
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc( db, "users", user.uid ), formDataCopy )
      // toast.success("Registered successfully")
      navigate("/")
    } catch (error) {
      toast.error("Something went wrong with the registration")
      
    }
  }

  return (
  <div className='w-full p-10'>
    <div className='flex flex-col justify-center items-center' >
      <div>
        <h1 className='font-bold text-3xl'> Sign Up</h1>
      </div>

      <div className='flex md:flex-row flex-col md:space-y-4 md:space-x-10 w-full p-10 md:justify-center align-middle items-center' >
        <div className=' md:w-1/2 md:p-0 m-4'>
          <img src= {k} className='w-full rounded-lg' alt="" />
        </div>

        <div className='md:w-1/2 flex flex-col w-full  justify-center align-middle items-center md:ml-0 ' >

        <form className='w-full md:p-10 space-y-5 px-20' onSubmit={onSubmit} >

        <input 
          type='text' 
          id='name' 
          className='border w-96 bg-white p-4 md:ml-10 text-gray-700' 

          value={name} onChange={onChange} 
          placeholder='Name'/>

          <input 
          type='email' 
          id='email' 
          className='border w-96 bg-white p-4 md:ml-10 text-gray-700' 

          value={email} onChange={onChange} 
          placeholder='Email address'/>
          
          <input type={showPassword ? "text" : "password"}
           id='password' 
           onChange={onChange} 
           className='border w-96 md:ml-10 bg-white p-4  ' 
           value={password}
          placeholder='Password'/>

          {
            showPassword ? (
              <FaEyeSlash className='md:ml-80 relative md:-top-14 ml-80 -top-14 cursor-pointer  ' onClick={ () => setShowPassword ((prevState) => !prevState ) } />
            ) : (<FaEye className='md:ml-80 relative  md:-top-14 ml-80 -top-14 md:-top-14 cursor-pointer ' onClick={ () => setShowPassword ((prevState) => !prevState ) } />)
          }

<div className='flex space-x-8 w-full  '>
        <p className='m-0'> Don't have a account? <Link className='text-red-600 transition duration-200 ease-in-out ml-1' to='/signup'> Register</Link> </p>
        <p className='m-0 cursor-pointer transition ease-in-out text-blue-500'> <Link to={'/signin'}>Signin instead</Link> </p>
       </div>

       <div className='w-full  flex-col space-y-4'>
        <button className='bg-blue-600 hover:bg-blue-500 w-full p-2 text-white font-semibold text-2xl'> Sign UP </button>
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

export default Signup
